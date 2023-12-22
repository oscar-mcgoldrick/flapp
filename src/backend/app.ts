import express, { Request, Response } from 'express'

// import flatRoutes from './routes/flats'
// import googleRoutes from './routes/google'

const app = express()

app.get('/api', (req: Request, res: Response) => {
  res.send('Backend Response test ting')
})

// app.use('/api/v1/googleRoutes', googleRoutes)
// app.use('/api/v1/flatRoutes', flatRoutes)

export default app