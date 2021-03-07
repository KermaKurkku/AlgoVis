import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

import { fetchNewList } from '../store/list/listReducer'

import { isRunning } from '../utils'
import { setWaiting } from '../store/running/runningReducer'

type SliderProps = {
  breakpoint: boolean
}

const ListSizeSlider: React.FC<SliderProps> = ({ breakpoint }: SliderProps) => {
  const dispatch = useDispatch()
  const maxSliderValue = breakpoint ? 20 : 40

  const listSize = useSelector((state: RootState) => state.numberList.size)
  const visualizationStatus = useSelector((state: RootState) => state.running.state)

  const [sliderValue, setSliderValue] = useState(listSize)
 
  useEffect(() => {
    dispatch(setWaiting());
    dispatch(fetchNewList(maxSliderValue/2))
    setSliderValue(maxSliderValue/2)
  }, [maxSliderValue])

  useEffect(() => {
    if (visualizationStatus === 'finished') {
      dispatch(setWaiting())
      dispatch(fetchNewList(listSize))
    }
    
    
  }, [listSize])

  const onSliderChange = (value: number) => {
    setSliderValue(value)
  }

  const setNewListSize = (value: number) => {
    if (typeof value !== 'number')
      return
    if (value > maxSliderValue)
      value = maxSliderValue
    dispatch(fetchNewList(value))
  }

  return (
    <div>
      <Slider
        min={3}
        max={ maxSliderValue }
        onChange={onSliderChange}
        onAfterChange={setNewListSize}
        value={sliderValue}
        tipFormatter={null}
        disabled={isRunning() === 'running'}
      />
    </div>
  )
}

export default ListSizeSlider