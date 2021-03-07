import React, { useRef, useEffect, useState} from 'react'
import {
  Layout,
  Menu,
  Skeleton,
  Divider,
  Button,
  Typography
} from 'antd'

const { Title } = Typography

const { Header, Footer, Content } = Layout

import Bars from './Components/Bars'
import AlgorithmSider from './Components/AlgorithmSider'
import PageHeader from './Components/PageHeader'

// Figure out webworkers at some point maybe?
//import SortWorker from 'comlink-loader!./worker'

import { useContainerDimensions } from './hooks'
import Description from './Components/Description'

import { useSelector } from 'react-redux'
import { Algorithms } from './services/AlgorithmRunner'
import { RootState } from './store'



const App: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(componentRef)
  const algorithm: Algorithms = useSelector((state: RootState) => state.running.runnable)

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        setLoading(false)
      }, 250)
      setLoading(true)
    }
    
  }, [width])

  return (
    <div ref={componentRef}>
      <Layout>
        <PageHeader width={width} />
        <Layout style={{ 
          margin: width > 992 ? '0 5em 0 5em' : '0',
          marginTop: width > 922 ? 0 : '64px',
          minHeight: '90vh'
        }}>

          <AlgorithmSider />

          <Layout style={{ padding: '0 10em em' }}>
            <span style={{ display: 'block', marginLeft: width > 992 ? '5em' : 'auto', marginRight: 'auto' }}>
              <Title level={3} style={{}}>{algorithm}</Title>
            </span>
            <Content className="site-layout-content" id='container'
                style={{
                  padding: 24,
                  marginTop: width > 922 ? 0 : 20,
                }}
              >
              <div className="bar-desc-container" >
                {
                  loading ? <Skeleton/> :
                    <Bars componentWidth={width} />
                }
                <Divider />
                <Description width={width}/>
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
