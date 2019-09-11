import React, { useEffect, useState } from 'react'

const withShoppingCart = (Component, userShoppingCartApi) => {
    return () => {
        const [data, setData] = useState([])
        useEffect(() => {
            const data = userShoppingCartApi.get()

            setData(data)
        }, [])

        return <Component data={data} />
    }
}

export default withShoppingCart