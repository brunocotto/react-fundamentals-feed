import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  //? => envio da prop não obrigatório
  hasBorder?: boolean
}

export function Avatar({ hasBorder=true, ...props }: AvatarProps) {
  return (
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    {...props} 
    />
  )
}