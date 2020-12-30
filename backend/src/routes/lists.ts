import express from 'express'

import { listGenerator } from '../services/listGeneratorService'
import { isNumber } from '../utils'

const router = express.Router()

router.post('/', (req, res) => {
	console.log(req.body)
	if (!isNumber(req.body.size))
		res.send('Incorrect size of list')
	const listSize = Number(req.body.size) >= 250 ? 250 : Number(req.body.size)
	const list = listGenerator(listSize)

	res.send(list)
})

export default router

