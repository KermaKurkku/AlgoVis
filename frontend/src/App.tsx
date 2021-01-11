import React, { useState } from 'react'
import {
  Select,
  Layout,
  Typography,
  Menu,
  Button,
  Skeleton,
  Divider
} from 'antd'

const { Title } = Typography
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout

import Bars from './Components/Bars'
import ListSizeSlider from './Components/ListSizeSlider'

import isRunning from './utils/isRunning'

import { useDispatch, useSelector } from 'react-redux'
import { removeCurrent } from './store/currentNumber/currentNumberReducer'

// Figure out webworkers at some point maybe?
//import SortWorker from 'comlink-loader!./worker'

import {
  runAlgorithm,
  Algorithms,
  AlgorithmTypes
} from './services/AlgorithmRunner'
import { RootState } from './store'

const App: React.FC = () => {
  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(algorithmOptions[0])

  const dispatch = useDispatch()

  const main = useSelector((state: RootState) => state.currentNumber.main)

  const startVisualization = async (): Promise<void> => {
    
    const selected: Algorithms =  selectedAlgorithm as Algorithms
    await runAlgorithm(selected)
  }

  const stopVisualization = (): void => {
    console.log('Stop visualizing')
    dispatch(removeCurrent())
    setTimeout(() => {
      isRunning()
    }, 20);
  }

  const menuOnClick = (event: any)  => {
    console.log(event)
    setSelectedAlgorithm(event.key)
  }
  console.log(isRunning())

  return (
    <div>
      <Layout>
        <Header className='header'>
          <div />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key="1">AlgoVis</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ margin: '0 5em 0 5em'}}>
          <Sider width={'20%'} className='site-layout-background' theme='light'>

            

            <Title level={2} style={{ margin: '0,5em auto', padding: '0.2em 1em'}}>Select list size</Title>
            <ListSizeSlider />
            {main === null ? 
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
            <Menu
              mode="inline"
              style={{ borderRight: 0 }}
              defaultOpenKeys={['slider', 'sub2']}
              defaultSelectedKeys={[algorithmOptions[0]]}
              onClick={menuOnClick}
            >
              {algorithmOptions.map(a => 
                <Menu.Item key={a} >{a}</Menu.Item>  
              )}
            </Menu>
            
          </Sider>
          <Layout style={{ padding: '0 10em em'}}>
            <Content className="site-layout-content"
              style={{
                padding: 24,
                margin: 0,
              }}>
              <Bars />
              <Divider />
              <Skeleton />
              <Skeleton />
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center'}}>AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari</Footer>
      </Layout>
    </div>
  )
}

export default App
