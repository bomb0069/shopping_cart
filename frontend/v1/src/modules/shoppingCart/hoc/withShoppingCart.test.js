import React from 'react'
import { shallow, mount } from 'enzyme'

import withShoppingCart from './withShoppingCart'

describe('<withShoppingCart /> test', () => {
    let wrapper
    beforeEach(() => {
        let getUserShoppingCart = {
            get: jest.fn(() => {
                Promise.resolve([])
            })
        }
        const MockComponent = jest.fn()
        const Component = withShoppingCart(MockComponent, getUserShoppingCart)
        wrapper = shallow(<Component />)
    })
    it('Should render without error', () => {
        expect(wrapper).not.toBe(null)
    })

    it('Should redner component with data', () => {
        let expectData = [{
            id: 6,
            name: "Princess Palace",
            price: 24.95,
            brand: 'coolkidz'
        }]

        let getUserShoppingCart = {
            get: jest.fn(() => {
                Promise.resolve(expectData)
            })
        }

        const MockComponent = () => <div />
        const Component = withShoppingCart(MockComponent, getUserShoppingCart)
        wrapper = mount(<Component />)
        console.log(wrapper.dive())
        console.log(wrapper.props())
        expect(wrapper.prop('data')).toEqual(expectData)
    })
})