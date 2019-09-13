import React from 'react'
import { shallow, mount } from 'enzyme'
import { act } from 'react-dom/test-utils'

import withShoppingCart from './withShoppingCart'

describe('<withShoppingCart /> test', () => {
    let wrapper
    beforeEach(() => {
        let getUserShoppingCart = jest.fn(() => {
            Promise.resolve([])
        })
        let getFilters = jest.fn(() => {
            Promise.resolve([])
        })
        const MockComponent = jest.fn()
        const Component = withShoppingCart(MockComponent, getUserShoppingCart, getFilters)
        
        act(() => {
            wrapper = shallow(<Component />)
        })
    })
    it('Should render without error', () => {
        expect(wrapper).not.toBe(null)
    })

    it('Should render component with data', () => {
        let expectData = [{
            id: 6,
            name: "Princess Palace",
            price: 24.95,
            brand: 'coolkidz'
        }]

        let getUserShoppingCart = jest.fn(() => {
            Promise.resolve(expectData)
        })
        let getFilters = jest.fn(() => {
            Promise.resolve([])
        })
        const MockComponent = () => <div />
        const Component = withShoppingCart(MockComponent, getUserShoppingCart, getFilters)
        wrapper = mount(<Component />)
        // expect(wrapper.prop('data')).toEqual(expectData)
    })
})