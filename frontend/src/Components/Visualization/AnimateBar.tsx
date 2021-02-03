
/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Used to animate changing bar positions
*/

import React, { useState, useEffect, useLayoutEffect, ReactChildren } from 'react'
import { usePrevious } from '../../hooks'
import calculateBoundingBoxes from '../../utils/calculateBoundingBoxes'

import { AnimationChild, DOMRectDict } from '../../types'

interface AnimationProps {
  child: AnimationChild,
  styling: CSSStyleDeclaration
}

const StyledBar: React.FC<any> = React.forwardRef((props: any, ref: any) => {
  return <div style={props.style} ref={ref} />
})
StyledBar.displayName = 'StyledBar'

const AnimateBar: React.FC<any> = ({ styling }: { styling: any }) => {
  // Need to update child
  const [child, setChild] = useState<React.RefObject<HTMLDivElement>>(React.createRef<HTMLDivElement>())
  console.log(child)

  const [boundingBox, setBoundingBox] = useState<DOMRect | null>(null)
  const [prevBoundingBox, setPrevBoundingBox] = useState<DOMRect | null>(null)
  const prevChild = usePrevious(child)

  // Fix bounding boxes updating when list size updates
  // get child to update
  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(child)
    console.log(newBoundingBox)
    setBoundingBox(newBoundingBox)
  }, [child])

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChild)
    setPrevBoundingBox(prevBoundingBox)
  }, [prevChild])

  useEffect(() => {
    if (!prevBoundingBox || !boundingBox || Object.keys(prevBoundingBox).length < Object.keys(boundingBox).length)
      return

    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length

    if (hasPrevBoundingBox) {
      const domNode = child.current
      const firstBox = prevBoundingBox
      const lastBox = boundingBox
      if (!firstBox || !lastBox)
        return

      const changeInX = firstBox.left - lastBox.left


      if (changeInX && domNode) {
        requestAnimationFrame(() => {
          // Before DOM paints, invert child to old position
          // Maybe longer animation time?
          // Reduce speed of sorting so the animation shows
          domNode.style.transform = `translateX(${changeInX}px)`
          domNode.style.transition = `transform 0ms`

          requestAnimationFrame(() => {
            // After previous frame, remove the transition to play the animation
            domNode.style.transform = ''
            domNode.style.transition = 'transform 200ms'
          })
        })
      }
    }
  }, [boundingBox, prevBoundingBox, child])

  return <StyledBar style={styling} ref={child} />
   

}

AnimateBar.displayName = 'AnimatedBar'

export default AnimateBar
