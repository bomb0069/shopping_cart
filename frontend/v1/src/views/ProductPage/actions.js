import axios from 'axios'

export const getProduct = async (config) => {
    const response = await axios.get('http://localhost:3000/products', config)
              
    return response
}