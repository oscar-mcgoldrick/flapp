import db from './index'

export async function getJobList() {
  const doc = await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').get()
  console.log('flat db func')
  return doc.data().Joblist
}
