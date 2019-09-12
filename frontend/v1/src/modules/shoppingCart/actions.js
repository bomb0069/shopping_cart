import axios from 'axios'

export const getShoppingCart = async (config) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', config)
              
    return response
}