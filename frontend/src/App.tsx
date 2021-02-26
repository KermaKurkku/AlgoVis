import React, { useRef, useEffect, useState} from 'react'
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

  const [loading, setLoading] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(componentRef)


  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
      setLoading(true)
    }
    
  }, [width])

  return (
    <div>
      <Layout>
        <Header className='header' style={{ padding: width > 992 ? '0 5em 0 5em' : '0 1em 0 1em'}}>
          <div />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key="1">AlgoVis</Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ margin: width > 992 ? '0 5em 0 5em' : '0' }}>

          <AlgorithmSider />

          <Layout style={{ padding: '0 10em em' }}>
            <Content className="site-layout-content" id='container'
                style={{
                  padding: 24,
                  marginTop: width > 922 ? 0 : 20,
                }}
              >
              <div className="bar-desc-container" ref={componentRef}>
                {
                  loading ? <Skeleton/> :
                    <Bars componentWidth={width} />
                }
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
