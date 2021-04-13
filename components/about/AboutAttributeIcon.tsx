import React, { FunctionComponent } from 'react'

type AboutAttributeIconProps = {
  Icon: React.FC;
}

export const AboutAttributeIcon: FunctionComponent<AboutAttributeIconProps> = ({ Icon }) => {
  return <div className="rounded-full p-3 bg-purple-500 text-white">
    <Icon />
  </div>
}