import express from 'express'
import fs from 'fs'
import path from 'path'

const router = express.Router()

router.post('/', (req, res) => {
	const body: string = req.body.algorithm
	const fPath = path.resolve(`data/${body}.txt`)
	fs.readFile(fPath, 'utf8', (err, data: String | undefined) => {
		if (err) {
			console.log(err.stack)
		} else {
		}
		res.send(data)
		
	})
})

export default router