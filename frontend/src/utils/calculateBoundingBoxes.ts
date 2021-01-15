/*
  Based on https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba by Tara Ojo
  Calculates the bounding boxes of elements given to it
*/

import React, { ReactChildren } from 'react'

import { AnimationChild, AnimationChildren } from '../types'

const calculateBoundingBoxes = (children: AnimationChildren) => {
  const boundingBoxes: any = {}

  React.Children.forEach(children, (child: AnimationChild) => {
    const domNode = child.ref.current
    const nodeBoundingBox = domNode.getBoundingClientRect()

    boundingBoxes[child.key] = nodeBoundingBox
  })

  return boundingBoxes
}

export default calculateBoundingBoxes