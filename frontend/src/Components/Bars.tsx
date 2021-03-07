import React, { createRef } from 'react'

import Bar from './Visualization/Bar'

import { useSelector } from 'react-redux'

import { RootState, CurrentNumberState } from '../store'

import AnimateBars from './Visualization/AnimateBars'

interface Props {
  componentWidth: number;
}

const Bars: React.FC<Props> = ({componentWidth}: { componentWidth: number } ) => {
  const listSize: number = useSelector((state: RootState) => state.numberList.size)
  const list: number[] = useSelector((state: RootState) => state.numberList.list)
  const selected: CurrentNumberState = useSelector((state: RootState) => state.currentNumber)
  
  const width: number = 100/listSize * componentWidth/listSize 

  return (
    <div style={{ display: 'flex' }}>
      
      <AnimateBars>
        {
          list.map((b, i) => {
            const barRef = createRef<HTMLDivElement>()
            return <Bar key={b} width={width} height={b/listSize} area={i >= selected.area.start && i <= selected.area.end}
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