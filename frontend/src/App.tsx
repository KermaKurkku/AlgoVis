import React, { useState, useEffect } from 'react'
import {
  Slider,
  Row,
  Col,
  Select
} from 'antd'

import Bars from './Components/Bars'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store'
import { fetchNewList } from './store/list/listReducer'

import SortWorker from 'comlink-loader!./worker'

import {
  runAlgorithm,
  Algorithms,
  AlgorithmTypes
} from './services/AlgorithmRunner'
import { changeListSizeAction } from './store/list/actions'

const { Option } = Select

const App: React.FC = () => {
  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]
  const [sliderValue, setSliderValue] = useState<number>(25)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(algorithmOptions[0])
  const workerRef = React.useRef<SortWorker>()


  const dispatch = useDispatch()
  const numbers = useSelector((state: RootState) => state.numberList.list)
  const listSize = useSelector((state: RootState) => state.numberList.size)
  const current = useSelector((state: RootState) => state.currentNumber)


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
    dispatch(changeListSizeAction(value))
  }

  const onClick = async (): Promise<void> => {
    
    const selected: Algorithms =  selectedAlgorithm as Algorithms
    await runAlgorithm(selected)
  }

  const handleAlgorithm = (value: string) => {
    setSelectedAlgorithm(value)
  }

  return (
    <div>
      <h1>AlgoVis</h1>
      <br />
      <Row>
        <Col span={12}>
          <Slider
            min={3}
            max={150}
            onChange={onSliderChange}
            onAfterChange={setNewListSize}
            value={typeof sliderValue === 'number' ? sliderValue : 25}
          />
        </Col>
        <Col>
          <Select defaultValue={algorithmOptions[0]} onChange={handleAlgorithm}>
            {algorithmOptions.map(a => 
              <Option key={a} value={a}>{a}</Option>  
            )}
          </Select>
        </Col>
      </Row>
      <button onClick={onClick}>test</button>

      <h3>{listSize}</h3>
        
      <Bars />
    </div>
  )
}

export default App
