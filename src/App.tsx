import React, { useState } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'
import listGenerator from './utils/listGenerator'

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(5)
  const [numbers, setNumbers] = useState<number[]>(listGenerator(inputValue))

  const setSliderValue = (value: any) => {
    if (typeof value !== 'number')
      return
    setNumbers(listGenerator(value))
    setInputValue(value)
  }

  console.log(numbers)
  return (
    <div>
      <h1>AlgoVis</h1>
      {numbers.map(n => `${n}, `)}
      <br />
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={15}
            onChange={setSliderValue}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={15}
            value={inputValue}
            onChange={setSliderValue}
          />
        </Col>
      </Row>

      <h3>{inputValue}</h3>
    </div>
  )
}

export default App
