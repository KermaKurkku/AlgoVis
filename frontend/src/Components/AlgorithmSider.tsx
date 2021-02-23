import React, { useState } from 'react'
import {
  Layout,
  Typography,
  Menu,
  Button,
  Divider
} from 'antd'

const { Title } = Typography
const { Sider } = Layout

import ListSizeSlider from '../Components/ListSizeSlider'

import { useDispatch, useSelector } from 'react-redux'
import { setStopped, setRunning, setWaiting } from '../store/running/runningReducer'

import {
  runAlgorithm,
  Algorithms,
  AlgorithmTypes
} from '../services/AlgorithmRunner'
import { RootState } from '../store'
import { fetchNewList } from '../store/list/listReducer'

const AlgorithmSider: React.FC = () => {

  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(algorithmOptions[0])

  const [open, setOpen] = useState<boolean>(false)
  const [breakpoint, setBreakpoint] = useState<boolean>(false)

  const [curStyle, setCurStyle] = useState<React.CSSProperties>({ position: 'relative' })

  const dispatch = useDispatch()

  const running = useSelector((state: RootState) => state.running)
  const listSize = useSelector((state: RootState) => state.numberList.size)


  const startVisualization = async (): Promise<void> => {
    if (running === 'finished')
      await dispatch(fetchNewList(listSize))

    if (breakpoint && open) {
      setOpen(false)
    }

    dispatch(setRunning())
    const selected: Algorithms =  selectedAlgorithm as Algorithms
    await runAlgorithm(selected)
  }

  const stopVisualization = (): void => {
    dispatch(setStopped())
    
  }

  const menuOnClick = (event: any)  => {
    const checkIfNotWaiting = async () => {
      if (running !== 'waiting') {
        await dispatch(fetchNewList(listSize))
        dispatch(setWaiting())
      }
    }

    checkIfNotWaiting()

    setSelectedAlgorithm(event.key)
  }

  const toggleOpen = (collapsed: any, type: any) => {
    setOpen(!collapsed)
    
  }

  const handleBreakpoint = (breakpoint: boolean) => {
    if (breakpoint) 
      setCurStyle({
        position: 'absolute',
        zIndex: 100
    })
    else
      setCurStyle({
        position: 'relative',
        zIndex: 1,
        transition: 'none' 
    })

    setBreakpoint(breakpoint)
  }

  return (
    <>
      <Sider
        width={'19em'} className='sider-root' theme='light'
        collapsed={!open}
        collapsedWidth="0" onCollapse={toggleOpen} breakpoint="lg"
        onBreakpoint={handleBreakpoint} style={curStyle}
      >
        {
          
          <div>
            <Title level={2} style={{ margin: '0,5em auto', padding: '0.2em 1em' }}>Select list size</Title>
            <ListSizeSlider />
            {running === 'stopped' || running === 'finished' || running === 'waiting' ?
              <Button type='primary' block size='large' style={{
                margin: '1em auto',
              }}
              onClick={startVisualization}
              >Visualize</Button> :
              <Button type='primary' block size='large' style={{
                margin: '1em auto'
              }}
              onClick={stopVisualization}
              >Stop visualization</Button>
            }
            <Divider>Select sorting algorithm</Divider>
            {/*Menu for selecting sorting algorithm*/}
            <Menu
              mode="inline"
              style={{ borderRight: 0 , transition: 'none'}}
              defaultSelectedKeys={[selectedAlgorithm]}
              onClick={menuOnClick}
            >
              {algorithmOptions.map(a =>
                <Menu.Item
                  key={a}
                  disabled={running === 'running' ? true : false}
                  style={{ transition: 'none' }}
                >{a}</Menu.Item>
              )}
            </Menu>
          </div> 
        }

      </Sider>
    </>
  )
}

export default AlgorithmSider