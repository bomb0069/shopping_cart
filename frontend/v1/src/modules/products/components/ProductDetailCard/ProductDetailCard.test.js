import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { Button } from '@material-ui/core'
import ProductDetailCard from './ProductDetailCard'

describe('<ProductCard />', () => {
  let component
  const handleOnClick = jest.fn()
  beforeEach(() => {
    component = shallow(<ProductDetailCard classes={{}}/>)

  })

  it('should render with no errors', () => {
    
    component.setProps({
      imgUrl: 'https://s3-ap-southeast-1.amazonaws.com/assets-eng-prod/products/th_310093-3.jpg',
      name: 'Princess Palace',
      gender: 'Female',
      age: '3_to_5',
      price: 24.95,
      availability: 'In Stock',
      handleOnClick: handleOnClick
    })
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should call function when button onClick', () => {
    component.setProps({
      handleOnClick: handleOnClick
    })
    const button = component.find(Button)

    button.simulate('click')
    expect(handleOnClick).toHaveBeenCalled()
  })
})
