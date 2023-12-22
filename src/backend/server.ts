import express, { Request, Response } from 'express'
import 'dotenv/config'

import flatRoutes from './routes/flats'
import googleRoutes from './routes/google'

const server = express()
const port = process.env.EXPRESS_PORT

server.get('/api', (req: Request, res: Response) => {
  res.send('Backend Response test ting')
})

server.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})

server.use('/api/v1/googleRoutes', googleRoutes)
server.use('/api/v1/flatRoutes', flatRoutes)
