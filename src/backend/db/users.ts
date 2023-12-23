import { UserAuthModel } from '../../models/UserAuthModel'
import db from './index'

export async function addUser(credentials: UserAuthModel) {
  console.log('adding new user')
  const newUserData = await db
    .collection('users')
    .doc(credentials.sub)
    .set(credentials)

  return newUserData.data()
}

export async function findUser(userSub: string) {
  const userData = await db.collection('users').doc(userSub).get()

  return userData.data()
}
