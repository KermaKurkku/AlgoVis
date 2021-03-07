/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Calculates the bounding boxes of elements given to it
*/

import React from 'react'

import { AnimationChild, AnimationChildren, DOMRectDict } from '../types'

const calculateBoundingBoxes = (children: AnimationChildren): DOMRectDict | null => {
  const boundingBoxes: DOMRectDict = {}

  React.Children.forEach(children, (child: AnimationChild) => {
    if (!child.ref.current)
      return null
    const domNode = child.ref.current
    const nodeBoundingBox = domNode.getBoundingClientRect()


    boundingBoxes[child.key] = nodeBoundingBox
  })

  return boundingBoxes
}

export default calculateBoundingBoxes