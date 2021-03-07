import React, { useState, useEffect, ReactElement, ReactHTML } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { Skeleton, Typography } from 'antd'
const { Paragraph, Title } = Typography

import descriptionService from '../services/descriptions'
import { RootState } from '../store'


const Description = () => {
	const [description, setDescription] = useState<string>("")

	const algorithm = useSelector((state: RootState) => state.running.runnable)
	
	useEffect(() => {
		const getDesc = async () => {
			const desc = await descriptionService.fetchDescription(algorithm.toLowerCase())
			setDescription(desc)
			console.log(desc)
		}
		console.log('useEffect')
		console.log(algorithm)

		getDesc()
	}, [algorithm])

	const mapToParagraphs = (par: string, i: number) => {
		console.log

		const mapToCode = (desc: any, i: number) => {
			return <span key={i} style={{whiteSpace: 'pre'}}>{desc}<br/></span>
		}

		if (par[0] === '#')
			return <Title level={4} >{par.substring(1)}</Title>
		else if (par[0]==='/' && par[1]==='/')
			return <Paragraph code >{par.substring(2).split('//').map(mapToCode)}</Paragraph>
		else 
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