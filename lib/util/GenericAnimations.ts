export const motionFadeInY = (y: number, staggerChildren: number) => {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren }
    }
  }
}

export const motionFadeInX = (x: number, staggerChildren: number) => {
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren }
    }
  }
}