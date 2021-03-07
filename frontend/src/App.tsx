import React, { useRef } from 'react'
import {
  Layout,
} from 'antd'


const { Footer } = Layout

import AlgorithmSider from './Components/AlgorithmSider'
import PageHeader from './Components/PageHeader'

import { useContainerDimensions } from './hooks'

import MainContent from './Components/MainContent'



const App: React.FC = () => {

  const componentRef = useRef<HTMLDivElement>(null)
  const { width } = useContainerDimensions(componentRef)

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

          <MainContent width={width} />
        </Layout>
        <Footer style={{ textAlign: 'center' }}>AlgoVis algorithm visualizer @2020 Created by Jere Salmensaari</Footer>
      </Layout>
    </div>
  )
}

export default App
