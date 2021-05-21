import { FC } from 'react'
import Image from 'next/image'

type BlogHeaderProps = {
  title: string;
  coverImageUrl: string;
}

export const BlogHeader: FC<BlogHeaderProps> = ({ title, coverImageUrl }) => {
  return (
    <div>
      <div className="w-full md:h-72 overflow-hidden">
        <Image
          width={1440}
          height={576}
          src={`/img/blog/cover/` + coverImageUrl}
          layout="responsive"
          quality={100}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="-mt-12 sm:-mt-16 sflex items-end space-x-5">
          <div className="flex">
            {/* <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src={profile.avatar} alt="" /> */}
          </div>
          <div className="mt-6 min-w-0 flex items-center justify-between space-x-6 pb-1 md:w-full">
            <div className="flex mt-6 w-auto">
              <h1 className="text-2xl font-bold text-gray-900 truncate bg-white px-4 pt-2">Beau Butner</h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                {/* <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 