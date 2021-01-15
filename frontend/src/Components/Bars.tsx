import React, { useState, useEffect, createRef } from 'react'

import Bar from './Visualization/Bar'
import { useTransition, a, TransitionFn } from 'react-spring'

import { useDispatch, useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

import AnimateBars from './Visualization/AnimateBars'

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
// Maybe
// https://itnext.io/animating-list-reordering-with-react-hooks-aca5e7eeafba
// https://codesandbox.io/s/reorder-elements-with-slide-transition-and-react-hooks-flip-211f2?from-embed
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
      unique: true,
      initial: { opacity: 1, width: width},
      from: { opacity: 1, width: width},
      leave: { opacity: 0, width: 0},
      enter: ({ x, width }: { x: number; width: number }) => ({ x, width, opacity: 1 }),
      update: ({ x, width }: { x: number; width: number }) => ({ transform: `translatex(${x}px)`, width })
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
      <AnimateBars>
        {
          list.map((b, i) => {
            const barRef = createRef<HTMLDivElement>()
            return <Bar key={b} width={width} height={b/listSize}
            // Fix types here
            // @ts-expect-error
              main={i === selected.main} sub={i === selected.sub} ref={barRef}
            />
        })}
      </AnimateBars>
    </div>
  )
}

export default Bars