import React, { useEffect, useState } from 'react'

const withShoppingCart = (Component, userShoppingCartApi, getFilters) => {

    return (props) => {
        const user = {
          id: 1,
          name: 'rittichai timrattanakul',
          email: 'rittichai@gmail.com'
        }
        const [userShoppingCart, setUserShoppingCart] = useState([])
        const [filters, setFilters] = useState([])
        useEffect(() => {
          const runFunction = async () => {
            const userShoppingCart = await userShoppingCartApi(user)
            setUserShoppingCart(userShoppingCart)
            const filters = await getFilters()
            setFilters(filters)
            console.log('userShoppingCart:', userShoppingCart)
            console.log('filter:', filters)
          }
          runFunction()
        }, [])

        return <Component userShoppingCart={userShoppingCart} filters={filters} {...props} />
    }
}

export default withShoppingCart