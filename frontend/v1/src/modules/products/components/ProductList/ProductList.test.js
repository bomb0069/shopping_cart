import React from 'react'
import { shallow } from 'enzyme'

import ProductList from './ProductList'
import ProductCard from '../ProductCard'

describe('<ProductList />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ProductList />)

  })

  it('should render with no errors', () => {
    
    expect(component).toMatchSnapshot()
  })

  it('should render with product cards', () => {
    const productItems = [
      {
        id: 6,
        name: 'Princess Palace',
        price: 24.95,
        brand: 'Coolkidz',
        age: '3_to_5',
        availibility: 'InStock',
        gender: 'Female'
      },
      {
        id: 15,
        name: 'Sailboat',
        price: 24.95,
        brand: 'Coolkidz',
        age: 'over8',
        availibility: 'InStock',
        gender: 'Male'
      }    
    ]
    component.setProps({
      productItems
    })

    expect(component).toMatchSnapshot()
    expect(component.find(ProductCard).length).toEqual(productItems.length)
  })
})