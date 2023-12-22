import request from 'superagent'

export async function getFlatJobList() {
  const jobList = await request.get('/api/v1/flatRoutes')
  console.log(jobList)
  return jobList.body
}
