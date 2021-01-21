import { FunctionComponent } from 'react'
import styles from './cardglass.module.scss'

type CardGlassProps = {
  className?: string;
  border?: boolean;
}

const CardGlass: FunctionComponent<CardGlassProps> = ({ children, className, border }) => {
  return (
    <div className={`${styles.card} ${className} ${border ? styles['card-border'] : styles['card-background']}`}>
      {children}
    </div>
  )
}

export default CardGlass