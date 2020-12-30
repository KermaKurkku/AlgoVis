import express from 'express'

import { listGenerator } from '../services/listGeneratorService'
import { isNumber } from '../utils'

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.query)
  const size: string = req.query.size as string
  if (!isNumber(size))
    res.send('Incorrect size of list')

  const listSize = Number(size) >= 250 ? 250 : Number(size)
  const list = listGenerator(listSize)

  res.send(list)
})

export default router

