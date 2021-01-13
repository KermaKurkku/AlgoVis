import React, { useState, useEffect } from 'react'

import Bar from './Visualization/Bar'
import { useTransition, a, TransitionFn } from 'react-spring'

import { useDispatch, useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

interface AnimationObject {
  value: number;
  index: number;
  x: number;
  width: number;
}

interface Props {
  componentWidth: number;
}

// wery much in progress
const Bars: React.FC<Props> = ({componentWidth}: { componentWidth: number } ) => {
  const listSize: number = useSelector((state: RootState) => state.numberList.size)
  const list: number[] = useSelector((state: RootState) => state.numberList.list)
  const selected: CurrentNumberState = useSelector((state: RootState) => state.currentNumber)
  
  const width: number = 100/listSize * componentWidth/listSize 
  const barList = list.map((b, i) => (<Bar key={b} width={width} height={b/listSize}
    main={i === selected.main} sub={i === selected.sub} />))

  const transition = useTransition(
    list.map((n: number, i: number) => ({ value: n, index: i, x: (i+width)-width, width } as AnimationObject)),
    {
      from: { opacity: 0, width: 0 },
      leave: { width: 0, opacity: 0 },
      enter: ({ x, width }: { x: number; width: number }) => ({ x, width, opacity: 1 }),
      update: ({ x, width }: { x: number; width: number }) => ({ x, width })
    }
  )
  const fragment = transition((style, item) => {
    return (
      // @ts-expect-error
      <a.div style={style} key={item.value}> 
        <Bar width={100} height={item.value/listSize} main={item.index === selected.main}
          sub={item.index === selected.sub}
        />
      </a.div>
    )
  })

  // https://codesandbox.io/s/animated-list-order-example-with-react-spring-teypu
  return (
    <div style={{ display: 'flex' }}>
      {componentWidth ? fragment : null}
    </div>
  )
}

export default Bars