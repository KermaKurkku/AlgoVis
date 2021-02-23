import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

import { fetchNewList } from '../store/list/listReducer'

import { isRunning } from '../utils'
import { setWaiting } from '../store/running/runningReducer'


const ListSizeSlider: React.FC = () => {
  const dispatch = useDispatch()

  const listSize = useSelector((state: RootState) => state.numberList.size)
  const visualizationStatus = useSelector((state: RootState) => state.running)

  console.log('list size', listSize)

  const [sliderValue, setSliderValue] = useState(listSize)
 

  useEffect(() => {
    if (visualizationStatus === 'finished') {
      dispatch(setWaiting())
      dispatch(fetchNewList(listSize))
    }
    
    
  }, [listSize])

  const onSliderChange = (value: any) => {
    if (typeof value !== 'number' || isNaN(Number(value)))
      return
    setSliderValue(value)
  }

  const setNewListSize = (value: any) => {
    if (typeof value !== 'number')
      return
    if (value > 40)
      value = 40
    dispatch(fetchNewList(value))
  }

  return (
    <div>
      <Slider
        min={3}
        max={40}
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