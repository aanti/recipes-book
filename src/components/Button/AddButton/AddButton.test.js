import React from 'react'
import { shallow, mount } from 'enzyme'

import AddButton from './AddButton'

const basicProps = {
  label: "Click"
}

describe('AddButton', () => {
  it('renders without crashing', () => {
    shallow(<AddButton {...basicProps} />)
  })

  it('calls onClick on clicking', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<AddButton {...basicProps} onClick={mockFn} />)
    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('has proper width based on the prop', () => {
    const wrapper = mount(<AddButton {...basicProps} width={220} />)
    const receivedWidth = wrapper.find('div').first().prop('style').width
    expect(receivedWidth).toBe(220)
  })
})