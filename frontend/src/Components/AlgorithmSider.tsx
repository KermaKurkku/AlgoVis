import React, { useEffect, useState } from 'react'
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
import { setStopped, setRunning, setWaiting, setRunnable} from '../store/running/runningReducer'

import algorithmRunner, {
  Algorithms,
  AlgorithmTypes
} from '../services/AlgorithmRunner'
import { RootState } from '../store'
import { fetchNewList } from '../store/list/listReducer'

const AlgorithmSider: React.FC = () => {

  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]

  const [open, setOpen] = useState<boolean>(false)
  const [breakpoint, setBreakpoint] = useState<boolean>(false)

  const [currStyle, setCurrStyle] = useState<React.CSSProperties>({ position: 'relative' })
  const [wrapperStyle, setWrappperStyle] = useState<React.CSSProperties>({ opacity: 1 })

  const dispatch = useDispatch()

  const running = useSelector((state: RootState) => state.running.state)
  const algorithm = useSelector((state: RootState) => state.running.runnable)
  const listSize = useSelector((state: RootState) => state.numberList.size)

  useEffect(() => {
    if (running === 'running' && breakpoint && open)
      toggleOpen(true)
  }, [running])


  const startVisualization = async (): Promise<void> => {
    if (running === 'finished')
      await dispatch(fetchNewList(listSize))

    dispatch(setRunning())
    
    await algorithmRunner(algorithm)
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
    dispatch(setRunnable(event.key as Algorithms))

  }

  const toggleOpen = (collapsed: boolean) => {
    3

    setOpen(!collapsed)
    if (collapsed) 
      setWrappperStyle({
        opacity: 0,
        transition: 'opacity, 0.2s cubic-bezier(0,1,0,1)',
      })
    else 
      setWrappperStyle({
        ...wrapperStyle,
        opacity: 1,
        transition: 'opacity, 0.2s cubic-bezier(1,0,1,0)',
      })
    
  }

  const handleBreakpoint = (breakpoint: boolean) => {
    if (breakpoint) {
      setCurrStyle({
        position: 'absolute',
        zIndex: 100,
        transition: 'all 0.2s'
      })
      setWrappperStyle({
        opacity: 0,
        transition: 'opacity, 0.2s cubic-bezier(0,1,0,1)',
      })
    } else {
      setCurrStyle({
        position: 'relative',
        zIndex: 1,
        transition: 'none'
      })
      setWrappperStyle({
        ...wrapperStyle,
        opacity: 1,
        transition: 'none',
      })
    }
      

    setBreakpoint(breakpoint)
  }

  const RunButton = () => (
    running === 'stopped' || running === 'finished' || running === 'waiting' ?
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
    
  )


  return (
    <>
      <Sider
        width={'19em'} className='sider-root' theme='light'
        collapsed={!open}
        collapsedWidth="0" onCollapse={toggleOpen} breakpoint="lg"
        onBreakpoint={handleBreakpoint} style={currStyle} zeroWidthTriggerStyle={{ top: 0 }}
      >
       <div className='sider-wrapper' style={wrapperStyle}>
        <Title level={2} style={{ margin: '0,5em auto', padding: '0.2em 1em' }}>Select list size</Title>
          {/* List size slider */}
          <ListSizeSlider breakpoint={breakpoint} />

          {/* Run button */}
          {
            breakpoint ? null 
            : <RunButton />
          }

          <Divider>Select sorting algorithm</Divider>
          {/*Menu for selecting sorting algorithm*/}
          <Menu
            mode="inline"
            style={{ borderRight: 0 , transition: 'none'}}
            defaultSelectedKeys={[algorithm]}
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
      </Sider>
    </>
  )
}

export default AlgorithmSider