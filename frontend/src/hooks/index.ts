import { useState, useEffect } from 'react'

interface Dimensions {
  width: number;
  height: number;
}

export const useContainerDimensions = (myRef: React.MutableRefObject<HTMLDivElement | null>): Dimensions => {
  const getDimensions = (): Dimensions => ({
    width: myRef.current?.offsetWidth || 0,
    height: myRef.current?.offsetHeight || 0
  })

  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current)
      setDimensions(getDimensions())

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef])

  return dimensions

}