import axios from 'axios'

export const getProductWithFilter = async (config) => {
  const response = await axios.get('http://localhost:3000/api/v1/products?age=3_to_5', config)
              
  return response
}