import clsx from 'clsx'
import { FC } from 'react'
import styles from './Crosshairs.module.sass'

export const Crosshairs: FC = () => {
  return (
    <>
      <div className={clsx(
        styles['crosshair-left'],
        'border-l-2 border-b-2 border-black dark:border-gray-500'
      )} />
      <div className={clsx(
        styles['crosshair-right'],
        'border-r-2 border-b-2 border-black dark:border-gray-500'
      )} />
    </>
  )
}