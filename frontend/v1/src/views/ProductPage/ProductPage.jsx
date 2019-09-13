import React,{ useEffect, useState } from 'react'
import Header from '../../modules/common/Header'
import ProductList from '../../modules/products/components/ProductList'
import {getProduct} from './actions'


const ProductPage = ({ classes, history }) => {
 
  const [products,setProducts] = useState([])
  useEffect(() => {
    const runFunction = async () => {
      let config = {}
      try {
        const data = await getProduct(config)
        const result = data.data.map(item =>{
          return {
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
  const handleSubmit = () => {
    history.push('/search-results')
  }
  return (
    <div>
      <Header handleSubmit={handleSubmit} amount={0}/>
      <ProductList className={classes.root} productItems={products}/>
    </div>
  )
}

export default ProductPage