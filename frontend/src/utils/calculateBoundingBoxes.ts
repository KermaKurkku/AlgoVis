/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Calculates the bounding boxes of elements given to it
*/

import React, { ReactChildren } from 'react'

import { AnimationChild, AnimationChildren, DOMRectDict } from '../types'

const calculateBoundingBoxes = (child: AnimationChild): DOMRect | null => {
  

  if (!child.ref.current)
    return null
  const domNode = child.ref.current
  const nodeBoundingBox = domNode.getBoundingClientRect()


  const boundingBox: DOMRect = nodeBoundingBox

  return boundingBox
}

export default calculateBoundingBoxes