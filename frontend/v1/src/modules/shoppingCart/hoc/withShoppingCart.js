import React, { useEffect, useState } from 'react'
import axios from 'axios'

const withShoppingCart = (Component, userShoppingCartApi) => {
    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    return () => {
        const [data, setData] = useState([])
        useEffect(() => {
            // const data = userShoppingCartApi.get()

            // 
            axios.get('https://google.com', config)
              .then(function (response) {
                console.log('response', response)
                setData([{1:1}])
              })
              .catch(function (error) {
                console.log('error', error)
                setData([{2:2}])
              })
            //   .then(function () {
            //     // always executed
            //   });
        }, [])

        return <Component data={data} />
    }
}

export default withShoppingCart