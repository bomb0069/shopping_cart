import React, { useEffect, useState } from 'react'

const withShoppingCart = (Component, userShoppingCartApi) => {
    const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    return () => {
        const [data, setData] = useState([])
        useEffect(() => {
          const runFunction = async () => {
            const data = await userShoppingCartApi(config)
            setData(data)
          }
          runFunction()
        }, [])

        return <Component data={data} />
    }
}

export default withShoppingCart