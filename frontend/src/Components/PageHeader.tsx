import React from 'react'
import {
  Layout,
  Menu,
  Button
} from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import algorithmRunner, {
} from '../services/AlgorithmRunner'

import { RootState } from '../store'
import { fetchNewList } from '../store/list/listReducer'
import { setStopped, setRunning,  } from '../store/running/runningReducer'


const { Header } = Layout

type PageHeaderProps = {
  width: number
}

const PageHeader: React.FC<PageHeaderProps> = ({ width }: PageHeaderProps) => {
  const dispatch = useDispatch()

  const running = useSelector((state: RootState) => state.running.state)
  const algorithm = useSelector((state: RootState) => state.running.runnable)
  const listSize = useSelector((state: RootState) => state.numberList.size)

  const startVisualization = async (): Promise<void> => {
    if (running === 'finished')
      await dispatch(fetchNewList(listSize))

    dispatch(setRunning())
    
    await algorithmRunner(algorithm)
  }

  const stopVisualization = (): void => {
    dispatch(setStopped())
  }

  const buttonStyle: React.CSSProperties = { 
    display: 'inline-block', float: 'right', height: '90%', margin: 'auto 1em', 
    width: 'auto', transform: 'translate(0, -50%)', top: '50%'
  }

  const RunButton = () => (
    running !== 'running' ?
          <Button 
            type='primary' block size='large'
            style={buttonStyle}
            onClick={startVisualization}
          >
          Start Visualization
          </Button>
          : <Button
              type='primary' block size='large'
              style={buttonStyle} onClick={stopVisualization}
            >
              Stop Visualization
            </Button>
  )

  return (
    <Header className='header' style={{ 
      padding: width > 992 ? '0 5em 0 5em' : '0 1em 0 1em',
      position: width > 922 ? 'relative' : 'fixed', width: '100%',
      zIndex: 1000
      }}>
      <div />
      <Menu
        theme='dark' mode='horizontal' defaultSelectedKeys={['1']}
        style={{ display: 'inline-block'}}
      >
        <Menu.Item key="1">AlgoVis</Menu.Item>
      </Menu>
        {
          width < 992 ? 
          <RunButton />
          :null
        }
    </Header>
  )
}

export default PageHeader