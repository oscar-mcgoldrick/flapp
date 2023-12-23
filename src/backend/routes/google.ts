import express from 'express'
import * as google from '../utils/google'
import * as firestore from '../db/users'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    console.log('google route hit')
    const token = req.body.creds
    const verifiedCreds = await google.verify(token)
    const userExists = await firestore.findUser(verifiedCreds.sub)
    if (userExists) {
      console.log('user exists')
      console.log(userExists)
      res.send(verifiedCreds)
    } else {
      console.log('user does not exist')
      const newUser = await firestore.addUser(verifiedCreds)
      res.send(newUser)
    }
  } catch (e) {
    res.send(e)
  }
})

export default router
