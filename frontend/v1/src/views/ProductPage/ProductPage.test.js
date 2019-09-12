import React from 'react'
import { shallow } from 'enzyme'

import ProductPage from './ProductPage'

describe('<ProductPage />', () => {
    let component
  
    beforeEach(() => {
      component = shallow(<ProductPage />)
  
    })
  
    it('should render with no errors', () => {
      
      expect(component).toMatchSnapshot()
    })

})