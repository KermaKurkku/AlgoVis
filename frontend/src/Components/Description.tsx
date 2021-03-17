import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


import { Skeleton, Typography } from 'antd'
const { Paragraph, Title } = Typography

import descriptionService from '../services/descriptions'
import { RootState } from '../store'

type propType = {
	width: number
}

const Description: React.FC<propType> = ({width}: propType) => {
	const [description, setDescription] = useState<string>("")

	const algorithm = useSelector((state: RootState) => state.running.runnable)
	
	useEffect(() => {
		const getDesc = async () => {
			const desc = await descriptionService.fetchDescription(algorithm.toLowerCase())
			if (!desc)
				setDescription("")
			else
				setDescription(desc)
		}

		getDesc()
	}, [algorithm])

	const mapToParagraphs = (par: string, i: number) => {
		const mapToCode = (desc: string, i: number) => {
			return <p key={i} style={{whiteSpace: width > 700 ? 'pre-wrap' : 'pre-line' }}>{desc}<br/></p>
		}

		if (par[0] === '#')
			return <Title level={4} key={par.substring(1,3)}>{par.substring(1)}</Title>
		if (par[0]==='/' && par[1]==='/')
			return <Paragraph 
				key={`code${par.substring(2,4)}`}
				style={{ overflowWrap: 'break-word', fontFamily: 'monospace'}}
			>{par.substring(2).split('//').map(mapToCode)}</Paragraph>

		return <Paragraph key={i}>{par}</Paragraph>
	}

	return (
		<div>
			<Title level={3}>Description</Title>
			{description ? 
			description.split("\n").map((d, i) => mapToParagraphs(d, i)) : 
			<div>
				<Skeleton/>
				<Skeleton/>
			</div>}
		</div>
	)
}

export default Description