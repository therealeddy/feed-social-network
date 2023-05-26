import React, { ImgHTMLAttributes } from 'react'

import { Image } from './styles'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

const Avatar: React.FC<Props> = ({ hasBorder = true, ...props }) => {
  return <Image hasBorder={hasBorder} {...props} />
}

export default Avatar
