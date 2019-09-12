import React from 'react'
import { shallow } from 'enzyme'

import ProductCard from './ProductCard'

describe('<ProductCard />', () => {
  let component

  beforeEach(() => {
    component = shallow(<ProductCard />)

  })

  it('should render with no errors', () => {
    
    expect(component).toMatchSnapshot()
  })

  it('should render with an image', () => {
    component.setProps({imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/assets-eng-prod/products/th_310093-3.jpg'})

    expect(component).toMatchSnapshot()

    expect(component.find('img').length).toEqual(1)
  })

  it('should render with name, gender, age', () => {
    component.setProps({
      name: 'Princess Palace',
      gender: 'Female',
      age: '3_to_5'
    })

    expect(component).toMatchSnapshot()

    expect(component.find('p').length).toEqual(3)
  })

  it('should render with price and availability', () => {
    component.setProps({
      price: 24.95,
      availability: 'In Stock'
    })


    expect(component).toMatchSnapshot()

    expect(component.find('h5').length).toEqual(2)
  })
})