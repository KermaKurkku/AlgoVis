import React, { useState, useEffect } from 'react'

import Bar from './Visualization/Bar'
import { useTransition, animated, TransitionFn } from 'react-spring'

import { useDispatch, useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

interface animationObject {
  value: number;
  y: number;
}

// wery much in progress
const Bars: React.FC = () => {
  const listSize: number = useSelector((state: RootState) => state.numberList.size)
  const list: number[] = useSelector((state: RootState) => state.numberList.list)
  const selected: CurrentNumberState = useSelector((state: RootState) => state.currentNumber)
  const width: number = 100/listSize * 20
  const barList = list.map((b, i) => (<Bar key={b} width={width} height={b/listSize}
    main={i === selected.main} sub={i === selected.sub} />))
  
  const transition: TransitionFn = useTransition(
    list.map((n: number, i: number) => ({value: n, y: i * width} as animationObject)), 
    (obj: animationObject) => obj.value,
    {
      initial: { postition: 'absolute', opacity: 0 },
      enter: { width: 0, opacity: 0},
      leave: {}
    })
  
  // https://codesandbox.io/s/animated-list-order-example-with-react-spring-teypu
  return (
    <div style={{ display: 'flex' }}>
    {transition.map(({ item, props: { x, ...rest }, key }, index) => (
        <animated.div
          key={key}
          style={{
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
          }}
        >
          <Bar key={item.value} width={width} height={item.value/listSize}
            main={index === selected.main} sub={index === selected.sub} />
        </animated.div>
      ))}
    </div>
  )
}

export default Bars