import axios from 'axios'
import {apiBaseUrl} from '../constants'

const fetchDescription = async (algorithmName: string) => {
	const { data: desc } = await axios.post(`${apiBaseUrl}/description`, {algorithm: algorithmName})
	return desc
}

export default { fetchDescription }