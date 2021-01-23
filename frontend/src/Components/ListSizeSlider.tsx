import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

import { fetchNewList, changeListSize } from '../store/list/listReducer'

import { isRunning } from '../utils'


const ListSizeSlider: React.FC = () => {
  const dispatch = useDispatch()

  const [sliderValue, setSliderValue] = useState(20)
  const listSize = useSelector((state: RootState) => state.numberList.size)

  useEffect(() => {
    dispatch(fetchNewList(listSize))
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
    dispatch(changeListSize(value))
  }

  return (
    <div>
      <Slider
        min={3}
        max={40}
        onChange={onSliderChange}
        onAfterChange={setNewListSize}
        value={typeof sliderValue === 'number' ? sliderValue : 20}
        tipFormatter={null}
        disabled={isRunning() === 'running'}
      />
    </div>
  )
}

export default ListSizeSlider