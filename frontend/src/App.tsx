import React, { useState, useEffect } from 'react'
import {
  Slider,
  InputNumber,
  Row,
  Col,
  Select
} from 'antd'

import Bar from './Components/Bar'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store'
import { fetchNewList } from './store/list/listReducer'

import SortWorker from 'comlink-loader!./worker'

import {quickSort} from './Algorithms'

import {
  runAlgorithm,
  Algorithms,
  AlgorithmTypes
} from './services/AlgorithmRunner'

const { Option } = Select

const App: React.FC = () => {
  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]
  const [listSize, setListSize] = useState<number>(25)
  const [sliderValue, setSliderValue] = useState<number>(25)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(algorithmOptions[0])
  const workerRef = React.useRef<SortWorker>()


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

  const onClick = async (): Promise<void> => {
    /* workerRef.current = new SortWorker()
    workerRef.current.addEventListener('message', message => {
      console.log(message)
    })
    //workerRef.current.postMessage('Yeetus deletus')
    await workerRef.current.quickSort()

    console.log(numbers) */
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
        
      <div style={{ display: 'flex' }}>
          {numbers.map(n => (
            <Bar key={n} width={100/numbers.length} height={n/listSize}
              main={numbers.indexOf(n) === current.main} sub={numbers.indexOf(n) === current.sub} />
          ))}
      </div>
    </div>
  )
}

export default App
