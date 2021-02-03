import React, { useState, useEffect, createRef } from 'react'

import Bar from './Visualization/Bar'

import { useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

import AnimateBars from './Visualization/AnimateBar'

interface Props {
  componentWidth: number;
}

// wery much in progress
// Maybe
// https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba
// https://codesandbox.io/s/reorder-elements-with-slide-transition-and-react-hooks-flip-211f2?from-embed
const Bars: React.FC<Props> = ({componentWidth}: { componentWidth: number } ) => {
  const listSize: number = useSelector((state: RootState) => state.numberList.size)
  const list: number[] = useSelector((state: RootState) => state.numberList.list)
  const selected: CurrentNumberState = useSelector((state: RootState) => state.currentNumber)
  
  const width: number = 100/listSize * componentWidth/listSize 

  const area = {
    start: 1,
    end: 5
  }

  return (
    <div style={{ display: 'flex' }}>
        {
          list.map((b, i) => {
            return <Bar key={b} width={width} height={b/listSize} area={i >= area.start && i <= area.end}
            // Fix types here

              main={i === selected.main} sub={i === selected.sub} // Ref is null for some reason
            />
        })}
    </div>
  )
}

export default Bars