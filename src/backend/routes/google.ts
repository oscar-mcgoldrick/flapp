import express from 'express'
import * as google from '../utils/google'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const creds = req.body
    const payload = await google.verify(creds)
    res.send(payload)
  } catch {
    res.sendStatus(500)
  }
})

export default router
