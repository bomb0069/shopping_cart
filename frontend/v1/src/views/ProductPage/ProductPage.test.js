import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import ProductPage from './ProductPage'
import Header from '../../modules/common/Header'
import ProductList from '../../modules/products/components/ProductList'

describe('<ProductPage />', () => {

  it('should render with no errors', () => {
    let component = shallow(<ProductPage/>)
    
    expect(toJson(component)).toMatchSnapshot()
    expect(component.find(Header).length).toEqual(1)
    expect(component.find(ProductList).length).toEqual(1)
  })

})