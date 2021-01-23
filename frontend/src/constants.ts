
let apiBaseUrl = ''
// eslint-disable-next-line
if (process.env.NODE_ENV === 'development')
  apiBaseUrl = 'http://localhost:3001/api'
else
  apiBaseUrl = '/api'

const baseDelay = 250

export { apiBaseUrl, baseDelay }