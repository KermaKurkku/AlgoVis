
let apiBaseUrl = ''
if (process.env.NODE_ENV === 'development')
	apiBaseUrl = `http://localhost:3001/api`
else
	apiBaseUrl = `/api`

export {apiBaseUrl}