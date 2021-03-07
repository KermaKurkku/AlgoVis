import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()


router.get('/', (_req, res) => {
	console.log('ping')
	res.send('ping')
}) 

router.post('/', (req, res) => {
	console.log('posted')
	const body: string = req.body.algorithm
	console.log(body)
	const fPath = path.resolve(`data/${body}.txt`)
	fs.readFile(fPath, 'utf8', (err, data: String | undefined) => {
		if (err) {
			console.log(err.stack)
		} else {
			console.log(data)
		}
		res.send(data)
		
	})
})

export default router