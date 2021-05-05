import { FunctionComponent } from 'react'
import { AboutAttributes } from '../components/about/AboutAttributes'
import { AboutDevTools, DevTool } from '../components/about/AboutDevTools'
import { AboutEducation } from '../components/about/AboutEducation'
import { AboutInfo } from '../components/about/AboutInfo'
import { AboutTechnologies, Technology } from '../components/about/AboutTechnologies'
import { Layout } from '../components/layout'

type AboutProps = {
  technologies: Technology[];
  devTools: DevTool[];
}

const about: FunctionComponent<AboutProps> = ({ technologies, devTools }) => {
  return (
    <Layout pageTitle="About">
      <div className="w-3/4 md:w-2/3 m-auto text-gray-800 dark:text-gray-200 text-3xl md:text-4xl text-center md:text-left">
        <p className="mt-32 text-5xl md:text-7xl mb-4">About Me</p>
        <div className="bg-gradient-to-br from-red-400 to-yellow-600 md:w-1/2 h-2 mb-10" />
        <AboutInfo />
        <br />
        <AboutAttributes />
        <br />
        <AboutEducation />
        <br />
        <AboutTechnologies />
        <br />
        <AboutDevTools />
        <br />
        <div className="mt-8 mb-20 w-full">
          <p>Want to get in touch with me? Shoot me an email at <span className="text-purple-500"><a href="mailto:beau@bbutner.com">beau@bbutner.com</a></span>!</p>
        </div>
      </div>
    </Layout>
  )
}

export default about