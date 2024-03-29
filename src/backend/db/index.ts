var admin = require('firebase-admin')
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require('./creds.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const db = getFirestore()

export default db
