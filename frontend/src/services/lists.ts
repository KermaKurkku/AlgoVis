import axios from 'axios'
import { apiBaseUrl } from '../constants'

const fetchNew = async (size: number): Promise<number[]> => {
  const { data: list } = await axios.get<number[]>(`${apiBaseUrl}/list?size=${size}`)
  return list
}

export default { fetchNew }