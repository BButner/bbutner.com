import Icon from '@mdi/react'
import { FunctionComponent } from 'react'

type AboutAttributeIconProps = {
  icon: string;
}

export const AboutAttributeIcon: FunctionComponent<AboutAttributeIconProps> = ({ icon }) => {
  return <div className="rounded-full p-3 bg-purple-400 text-white"><Icon path={icon} size={1} /></div>
}