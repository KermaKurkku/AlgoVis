import React, { useState, useEffect } from 'react'
import {
  Select,
  Layout,
  Typography,
  Menu,
  Button
} from 'antd'

const { Title } = Typography
const { SubMenu } = Menu
const { Header, Footer, Sider, Content } = Layout

import Bars from './Components/Bars'
import ListSizeSlider from './Components/ListSizeSlider'

import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './store'
import { fetchNewList, changeListSize } from './store/list/listReducer'

import SortWorker from 'comlink-loader!./worker'

import {
  runAlgorithm,
  Algorithms,
  AlgorithmTypes
} from './services/AlgorithmRunner'

const App: React.FC = () => {
  const algorithmOptions: string[] = Object.values(AlgorithmTypes) as string[]
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>(algorithmOptions[0])
  const workerRef = React.useRef<SortWorker>()

  const onClick = async (): Promise<void> => {
    
    const selected: Algorithms =  selectedAlgorithm as Algorithms
    await runAlgorithm(selected)
  }

  const menuOnClick = (event: any)  => {
    console.log(event)
    setSelectedAlgorithm(event.key)
  }

  const handleAlgorithm = (value: string): void => {
    setSelectedAlgorithm(value)
  }

  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">AlgoVis</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ margin: '0 5em 0 5em'}}>
          <Sider width={'20%'} className="site-layout-background">

            <Button type='primary' block size='large' style={{
                margin: '1em auto',
              }}
              onClick={onClick}
            >Visualize</Button>

            <Title level={2} style={{ color: 'white', margin: '0,5em auto'}}>Select list size</Title>

            <Menu
              mode="inline"
              style={{ borderRight: 0 }}
              defaultOpenKeys={['slider', 'sub2']}
              defaultSelectedKeys={[algorithmOptions[0]]}
              onClick={menuOnClick}
            >
              <Menu.Item key='slider' title={
                <p>Select list size</p>
              }>
                <ListSizeSlider />
              </Menu.Item>
              <SubMenu
                key='sub2'
                title="Select algorithm"
              >
                {algorithmOptions.map(a => 
                  <Menu.Item key={a} >{a}</Menu.Item>  
                )}
              </SubMenu>
            </Menu>
            
          </Sider>
          <Layout style={{ padding: '0 10em em'}}>
            <Content className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
              }}>
              <Bars />
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center'}}>AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari</Footer>
      </Layout>
    </div>
  )
}

export default App
