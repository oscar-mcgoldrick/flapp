const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client()

export async function verify(token: any) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      '788391161069-38t35smfnpc9np41mvb79raat8ci813p.apps.googleusercontent.com',
  })

  const payload = ticket.getPayload()

  return payload
}
