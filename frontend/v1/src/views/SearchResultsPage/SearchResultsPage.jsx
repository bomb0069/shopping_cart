import React from 'react'

import Header from '../../modules/common/Header'
import ProductList from '../../modules/products/components/ProductList'

const SearchResultsPage = ({productItems = [], filter}) => {
    const handleSubmit = (searchValue, filter, age) => {
        // TODO WAIT API
    }

    return (
        <div>
            <Header amount={0} handleSubmit={handleSubmit} />
            <ProductList productItems={productItems} />
        </div>
    )
}

export default SearchResultsPage
