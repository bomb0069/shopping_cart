import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchResultsPage from './SearchResultsPage'
import Header from '../../modules/common/Header'
import ProductListDetailCard from '../../modules/products/components/ProductListDetailCard'


describe('<SearchResultsPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<SearchResultsPage />)

  })

  it('should render with no errors', () => {
    
    expect(toJson(component)).toMatchSnapshot()
  })

  it('should render with Header', () => {
    expect(toJson(component)).toMatchSnapshot()

    expect(component.find(Header).length).toEqual(1)
  })

  it('should render with ProductListDetailCard', () => {
    expect(toJson(component)).toMatchSnapshot()

    expect(component.find(ProductListDetailCard).length).toEqual(1)
  })
})