import request from 'superagent'

export async function verifyCredentials(creds: string) {
  const payload = await request.post('/api/v1/googleRoutes').send({ creds })
  return payload.body
}
