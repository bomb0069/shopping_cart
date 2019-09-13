import React,{ useEffect, useState } from 'react'

import Header from '../../modules/common/Header'
import ProductListDetailCard from '../../modules/products/components/ProductListDetailCard'

import {getProductWithFilter} from './actions'

const SearchResultsPage = ({productItems = [], filter}) => {
  const [products,setProducts] = useState([])
  useEffect(() => {
    const runFunction = async () => {
      let config = {}
      try {
        const data = await getProductWithFilter(config)
        const result = data.data.map(item =>{
          return {
            id: item.product_id,
            name: item.product_name,
            ...item
          }
        })
        setProducts(result)
      } catch(error) {
        console.log(error)
      }
    }
    runFunction()
  }, [])
    
    const handleSubmit = (searchValue, filter, age) => {
        // TODO WAIT API
    }


    return (
        <div>
            <Header amount={0} handleSubmit={handleSubmit} />
            <ProductListDetailCard productItems={products} />
        </div>
    )
}

export default SearchResultsPage
