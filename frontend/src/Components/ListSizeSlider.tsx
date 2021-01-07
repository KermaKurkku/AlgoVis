import React, { useState, useEffect } from 'react'
import { Slider } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

import { fetchNewList, changeListSize } from '../store/list/listReducer'


const ListSizeSlider: React.FC = () => {
  const dispatch = useDispatch()

  const [sliderValue, setSliderValue] = useState(25)
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
    if (value > 200)
      value = 200
    console.log('change list size', value)
    dispatch(changeListSize(value))
  }

	return (
		<div>
			<Slider
				min={3}
        max={150}
        onChange={onSliderChange}
        onAfterChange={setNewListSize}
        value={typeof sliderValue === 'number' ? sliderValue : 25}
        tipFormatter={null}
			/>
		</div>
	)
}

export default ListSizeSlider