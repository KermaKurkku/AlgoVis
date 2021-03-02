import express from 'express'
import data from '../../data/descriptions' 

const router = express.Router()

router.get('/', (_req, res) => {
	console.log('ping')
	res.send('ping')
}) 

router.post('/', (req, res) => {
	console.log('posted')
	const body: string = req.body
	console.log(body)
	console.log(data.Test)
	res.send('ping')
})

export default router