import { FC } from 'react'
import styles from './Crosshairs.module.sass'

export const Crosshairs: FC = () => {
  return (
    <>
      <div className={styles['crosshair-left']} />
      <div className={styles['crosshair-right']} />
    </>
  )
}