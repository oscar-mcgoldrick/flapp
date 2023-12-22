import express from 'express'
import * as db from '../db/flats'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const jobList = await db.getJobList()
    res.send(jobList)
  } catch {
    res.sendStatus(500)
  }
})

export default router
