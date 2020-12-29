import React, { useState } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'

import Bar from './Components/Bar'
import listGenerator from './utils/listGenerator'

const App: React.FC = () => {
  const [listSize, setListSize] = useState<number>(25)
  const [numbers, setNumbers] = useState<number[]>([
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  ])

  const setSliderValue = (value: any) => {
    if (typeof value !== 'number')
      return
    /* if (value > 50)
      value = 50 */
    setNumbers(listGenerator(value))
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
            max={50}
            onChange={setSliderValue}
            value={typeof listSize === 'number' ? listSize : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={3}
            max={50}
            value={listSize}
            onChange={setSliderValue}
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
