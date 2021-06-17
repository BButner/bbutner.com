import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

export enum DARK_MODE_OPTION {
  auto = 'auto',
  dark = 'dark',
  light = 'light'
}

interface DarkModeListOption {
  name: string;
  setting: DARK_MODE_OPTION;
}

const darkModeList: DarkModeListOption[] = [
  { name: 'Automatic', setting: DARK_MODE_OPTION.auto },
  { name: 'Light', setting: DARK_MODE_OPTION.light },
  { name: 'Dark', setting: DARK_MODE_OPTION.dark }
]

export const PageOptions: FC = () => {
  const [darkModeSetting, setDarkModeSetting] = useState<DarkModeListOption>(localStorage.theme ? darkModeList.filter(e => e.setting === localStorage.theme)[0] : darkModeList[0])

  useEffect(() => {
    const html: HTMLElement = document.documentElement
  
    if (darkModeSetting.setting === DARK_MODE_OPTION.dark && !html.classList.contains('dark')) {
      html.classList.add('dark')
      localStorage.theme = 'dark'
    } else if (darkModeSetting.setting === DARK_MODE_OPTION.light && html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.theme = 'light'
    } else if (darkModeSetting.setting === DARK_MODE_OPTION.auto && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.remove('dark')
    }
  })

  return (
    <div className="w-full mb-2 text-lg pb-2 pr-4 border-l-2 border-gray-300 pl-4">
      <p>Theme:</p>
      <Listbox value={darkModeSetting} onChange={setDarkModeSetting}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={clsx(
                'border-2 border-orange-400 w-full text-left px-2 flex items-center justify-between focus:outline-none focus:ring focus:ring-orange-200 relative',
                open ? 'rounded-b-lg' : 'rounded-lg'
              )}
            >
              {darkModeSetting.name}
              <SelectorIcon className="w-5 h-5 text-gray-400" />
            </Listbox.Button>
            <Transition
              show={open}
              className="relative transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute bottom-8 bg-white dark:bg-gray-900 border-t-2 border-l-2 border-r-2 border-orange-400 rounded-t-lg w-full space-y-2 py-2 focus:outline-none"
                static
              >
                {darkModeList.map((setting, index) => (
                  <Listbox.Option
                    key={index}
                    value={setting}
                    as="button"
                    className="block w-full"
                  >
                    {({ active, selected }) => (
                      <div className={clsx(
                          'transform transition duration-200 flex items-center justify-between cursor-pointer px-2 w-full',
                          active ? 'bg-orange-200 text-orange-900' : ''
                        )}
                      >
                        {setting.name}
                        {selected && <CheckIcon className={clsx('w-5 h-5 transition-color duration-200', active ? 'text-orange-900' : 'text-orange-500')} />}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}