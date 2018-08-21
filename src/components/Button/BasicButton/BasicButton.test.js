import React from 'react'
import { shallow, mount } from 'enzyme'

import BasicButton from './BasicButton'

const basicProps = {
  label: "Click"
}

describe('AddButton', () => {
  it('renders without crashing', () => {
    shallow(<BasicButton {...basicProps} />)
  })

  it('calls onClick on clicking', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<BasicButton {...basicProps} onClick={mockFn} />)
    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('does\'nt call onClick when disabled', () => {
    const mockFn = jest.fn()
    const wrapper = mount(<BasicButton {...basicProps} disabled />)
    wrapper.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})