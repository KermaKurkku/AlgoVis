
/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Used to animate changing bar positions
*/

import React, { useState, useEffect, useLayoutEffect, ReactChildren } from 'react'
import { usePrevious } from '../../hooks'
import calculateBoundingBoxes from '../../utils/calculateBoundingBoxes'

import { AnimationChild, AnimationChildren, DOMRectDict } from '../../types'
import { domainToUnicode } from 'url'

const AnimateBars: React.FC<any> = ({ children }: { children: any}) => {
  const [boundingBox, setBoundingBox] = useState<DOMRectDict | null>({})
  const [prevBoundingBox, setPrevBoundingBox] = useState<DOMRectDict | null>({})
  const prevChildren = usePrevious(children)

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children)
    setBoundingBox(newBoundingBox)
  }, [children])

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren)
    setPrevBoundingBox(prevBoundingBox)
  }, [prevChildren])

  useEffect(() => {
    if (!prevBoundingBox || !boundingBox)
      return

    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child: AnimationChild) => {
        const domNode = child.ref.current
        const firstBox = prevBoundingBox[child.key]
        const lastBox = boundingBox[child.key]
        const changeInX = firstBox.left - lastBox.left


        if (changeInX) {
          requestAnimationFrame(() => {
            // Before DOM paints, invert child to old position
            // Maybe longer animation time?
            // Reduce speed of sorting so the animation shows
            domNode.style.transform = `translateX(${changeInX}px)`
            domNode.style.transition = `transform 0ms`
            console.log(domNode.style)

            requestAnimationFrame(() => {
              // After previous frame, remove the transition to play the animation
              domNode.style.transform = ''
              domNode.style.transition = 'transform 300ms'
            })
          })
        }
      })
    }
  }, [boundingBox, prevBoundingBox, children])

  return children

}

export default AnimateBars
