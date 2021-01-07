import React, { useState, useEffect } from 'react'

import Bar from './Visualization/Bar'

import { useDispatch, useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

const Bars: React.FC = () => {
  const listSize: number = useSelector((state: RootState) => state.numberList.size)
  const list: number[] = useSelector((state: RootState) => state.numberList.list)
  const selected: CurrentNumberState = useSelector((state: RootState) => state.currentNumber)

  return (
    <div style={{ display: 'flex' }}>
      {list.map((b, i) => (
        <Bar key={b} width={100/listSize} height={b/listSize}
        main={i === selected.main} sub={i === selected.sub} />
      ))}
    </div>
  )
}

export default Bars