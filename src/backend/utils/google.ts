const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client(
  '788391161069-38t35smfnpc9np41mvb79raat8ci813p.apps.googleusercontent.com'
)

export async function verify(token: any) {
  console.log('before verify id function')
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      '788391161069-38t35smfnpc9np41mvb79raat8ci813p.apps.googleusercontent.com',
  })
  const payload = await ticket.getPayload()

  return payload
}
