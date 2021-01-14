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
  
  const itemList: number[] = []

  const updateItemlist = () => {
    itemList.map((v: number, i: number) => v === list[i] ? v : list[i])
  }

  useEffect(() => {
    updateItemlist()
    console.log('updated list')
  }, [list])


  const transition = useTransition(
    list.map((n: number, i: number) => ({ value: n, index: i, x: (i+width)-width, width } as AnimationObject)),
    {
      expires: false,
      initial: { opacity: 1, width: width},
      from: { opacity: 1, width: width},
      leave: { opacity: 1},
      enter: ({ x, width }: { x: number; width: number }) => ({ x, width, opacity: 1 }),
      update: ({ x, width }: { x: number; width: number }) => ({ position: `translate3d(${x}px,0,0)`, width })
    }
  )
  const fragment = transition((style, item) => {
    return (
      // @ts-expect-error
      <a.div style={style} key={item.value}> 
        <Bar width={100} height={item.value/listSize} main={item.index === selected.main}
          sub={item.index === selected.sub}
        />
        {item.index}
      </a.div>
    )
  })

  // https://codesandbox.io/s/animated-list-order-example-with-react-spring-teypu
  // https://codesandbox.io/embed/1wqpz5mzqj
  return (
    <div style={{ display: 'flex' }}>
      {componentWidth ? fragment : null}
    </div>
  )
}

export default Bars