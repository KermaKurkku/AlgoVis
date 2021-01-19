import { useState, useEffect, useRef} from 'react'

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

// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
// Used to get the previous value of an object
export const usePrevious = (value: any): any => {
  const prevChildrenRef = useRef()

  useEffect(() => {
    prevChildrenRef.current = value
  }, [value])

  return prevChildrenRef.current
}