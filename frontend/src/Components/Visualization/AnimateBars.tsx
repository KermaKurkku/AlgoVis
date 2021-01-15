
/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Used to animate changing bar positions
*/

import React, { useState, useEffect, useLayoutEffect, ReactChildren } from 'react'
import { usePrevious } from '../../hooks'
import calculateBoundingBoxes from '../../utils/calculateBoundingBoxes'

import { AnimationChild, AnimationChildren, DOMRectDict } from '../../types'

const AnimateBars: React.FC<any> = ({ children }: { children: any}) => {
  const [boundingBox, setBoundingBox] = useState<DOMRectDict>({})
  const [prevBoundingBox, setPrevBoundingBox] = useState<DOMRectDict>({})
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
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child: AnimationChild) => {
        const domNode = child.ref.current
        const firstBox = prevBoundingBox[child.key]
        const lastBox = boundingBox[child.key]
        const changeInX = firstBox.left - lastBox.left
        console.log(changeInX)

        if (changeInX) {
          requestAnimationFrame(() => {
            // Before DOM paints, invert child to old position
            domNode.style.transform = `translateX(${changeInX}px)`
            domNode.style.transform = `transform 10ms`

            requestAnimationFrame(() => {
              // After previous frame, remove the transition to play the animation
              domNode.style.transform = ''
              domNode.style.transition = 'transfrom 500ms'
            })
          })
        }
      })
    }
  }, [boundingBox, prevBoundingBox, children])

  return children

}

export default AnimateBars
