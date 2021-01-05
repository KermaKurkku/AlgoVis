import React, { useState, useEffect } from 'react'
import {
  Slider,
  InputNumber,
  Row,
  Col,
} from 'antd'

import Bar from './Components/Bar'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store'
import { fetchNewList } from './store/list/listReducer'

import SortWorker from './worker'

const App: React.FC = () => {
  const [listSize, setListSize] = useState<number>(25)
  const [sliderValue, setSliderValue] = useState<number>(25)


  const dispatch = useDispatch()
  const numbers = useSelector((state: RootState) => state.numberList.list)
  const current = useSelector((state: RootState) => state.currentNumber.current)


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
    setListSize(value)
  }

  const onClick = async () => {
    const instance = new SortWorker()

    await instance.quickSort()

    console.log(numbers)
  }

  return (
    <div>
      <h1>AlgoVis</h1>
      <br />
      <Row>
        <Col span={12}>
          <Slider
            min={3}
            max={200}
            onChange={onSliderChange}
            onAfterChange={setNewListSize}
            value={typeof sliderValue === 'number' ? sliderValue : 25}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={3}
            max={200}
            value={sliderValue}
            onChange={setNewListSize}
          />
        </Col>
      </Row>
      <button onClick={onClick}>test</button>

      <h3>{listSize}</h3>
        
      <div style={{ display: 'flex' }}>
          {numbers.map(n => (
            <Bar key={n} width={100/numbers.length} height={n/listSize} selected={numbers.indexOf(n) === current}/>
          ))}
      </div>
    </div>
  )
}

export default App
