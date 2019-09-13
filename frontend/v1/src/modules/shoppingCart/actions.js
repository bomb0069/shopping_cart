import axios from 'axios'

const headers = {'Access-Control-Allow-Origin': '*'}
export const getShoppingCart = async (user) => {
  const response = await axios.get('http://localhost:3000/api/v1/carts', {
    headers,
    params: {
      user_id: user.id
    }
  })
  console.log('response', response)
  return response.data
}

export const getFilters = async () => {
  const response = await axios.get('http://localhost:3000/api/v1/filters', {
    headers,
  })
  console.log('response', response)
  return response.data
}
