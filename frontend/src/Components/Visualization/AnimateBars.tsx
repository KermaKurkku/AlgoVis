
/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Used to animate changing bar positions
*/

import React, { useState, useEffect, useLayoutEffect, ReactChildren } from 'react'
import { usePrevious } from '../../hooks'
import calculateBoundingBoxes from '../../utils/calculateBoundingBoxes'
import Bar from './Bar'

import { AnimationChild, AnimationChildren } from '../../types'

const AnimateBars: React.FC<any> = ({ children }: { children: any}) => {
  const [boundingBox, setBoundingBox] = useState({})
  const [prevBoundingBox, setPrevBoundingBox] = useState({})
  const prefChildren = usePrevious(children)

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children)
    setBoundingBox(newBoundingBox)
  }, [children])

  return children

}

export default AnimateBars
