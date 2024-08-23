import { useState, useEffect } from 'react'

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('xs')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width > breakpoints.xl) setBreakpoint('2xl')
      else if (width > breakpoints.lg) setBreakpoint('xl')
      else if (width > breakpoints.md ) setBreakpoint('lg')
      else if (width > breakpoints.sm  ) setBreakpoint('md')
      else if (width < breakpoints.sm) setBreakpoint('sm')
      else setBreakpoint('xs')
    }

    // Викликаємо відразу для встановлення початкового breakpoint
    handleResize()

    // Додаємо слухач для події зміни розміру вікна
    window.addEventListener('resize', handleResize)

    // Очищаємо слухач при розмонтуванні компонента
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return breakpoint
}

export default useBreakpoint
