import React, { useRef} from 'react'
import {
  Layout,
  Menu,
  Skeleton,
  Divider
} from 'antd'

const { Header, Footer, Content } = Layout

import Bars from './Components/Bars'
import AlgorithmSider from './Components/AlgorithmSider'

// Figure out webworkers at some point maybe?
//import SortWorker from 'comlink-loader!./worker'

import { useContainerDimensions } from './hooks'

const App: React.FC = () => {

  const componentRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(componentRef)

  console.log(width)

  return (
    <div>
      <Layout>
        <Header className='header'>
          <div />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key="1">AlgoVis</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ margin: '0 5em 0 5em' }}>

          <AlgorithmSider />

          <Layout style={{ padding: '0 10em em' }}>
            <Content className="site-layout-content" id='container'
                style={{
                  padding: 24,
                  margin: 0,
                }}
              >
              <div ref={componentRef}>
                <Bars componentWidth={width} />
                <Divider />
                <Skeleton />
                <Skeleton />
              </div>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari</Footer>
      </Layout>
    </div>
  )
}

export default App
