import express from 'express'
const cors = require('cors')
import listRouter from './routes/lists'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001

app.get('/api/ping', (_req, res) => {
  console.log('pinged')
  res.send('pong')
})

app.use('/api/list', listRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})