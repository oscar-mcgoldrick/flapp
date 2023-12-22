import express, { Express, Request, Response } from "express";
const app = express()
const port = 3001

app.get('/api', (req: Request, res: Response) => {
  res.send('Backend Response')
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})