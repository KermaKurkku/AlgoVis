import {
	Divider,
	Layout,
	Skeleton,
	Typography,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Algorithms } from '../services/AlgorithmRunner'
import { RootState } from '../store'
import Bars from './Bars'
import Description from './Description'

const { Title } = Typography
const { Content } = Layout

type propType = {
	width: number
}

const MainContent: React.FC<propType> = ({width}: propType) => {
	const [loading, setLoading] = useState<boolean>(false)
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
		<Layout style={{ padding: '0 10em em' }}>
			<span style={{ display: 'block', marginTop: '1em', marginLeft: width > 992 ? '5em' : 'auto', marginRight: 'auto' }}>
				<Title level={3} style={{}}>{algorithm}</Title>
			</span>
			<Content className="site-layout-content" id='container'
				style={{
					padding: 24,
					paddingTop: width > 922 ? 24 : 5,
					marginTop: width > 922 ? 0 : 10,
				}}
			>
				<div className="bar-desc-container" >
					{
						loading ? <Skeleton /> :
							<Bars componentWidth={width} />
					}
					<Divider />
					<Description width={width} />
				</div>
			</Content>
		</Layout>
	)
}

export default MainContent