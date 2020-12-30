import React, { useState, useEffect } from 'react'
import {
  Slider,
  InputNumber,
  Row,
  Col,
} from 'antd'

import Bar from './Components/Bar'
//import listGenerator from './utils/listGenerator'
import axios from 'axios'

import { apiBaseUrl } from './constants'

const App: React.FC = () => {
  const [listSize, setListSize] = useState<number>(25)
  const [sliderValue, setSliderValue] = useState<number>(25)
  const [numbers, setNumbers] = useState<number[]>([
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  ])

  useEffect(() => {
    // eslint-disable-next-line
    axios.get<void>(`${apiBaseUrl}/ping`)
    const fetchNewList = async () => {
      try {
        const { data: newList } = await axios.get<number[]>(`${apiBaseUrl}/list?size=${listSize}`)
        console.log(newList)
        setNumbers(newList)
      } catch (e) {
        return (<h2>Error</h2>)
      }
    }
    // eslint-disable-next-line
    fetchNewList()
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

  console.log(numbers)
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
            value={typeof sliderValue === 'number' ? sliderValue : 0}
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

      <h3>{listSize}</h3>
        
      <div style={{ display: 'flex' }}>
          {numbers.map(n => (
            <Bar key={n} width={100/numbers.length} height={n/listSize}/>
          ))}
      </div>
    </div>
  )
}

export default App
