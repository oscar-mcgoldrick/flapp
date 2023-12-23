import express from 'express'
import * as google from '../utils/google'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('google route hit')
    const creds = req.body.creds
    const payload = await google.verify(creds)
    res.send(payload)
  } catch (e) {
    res.send(e)
  }
})

export default router
