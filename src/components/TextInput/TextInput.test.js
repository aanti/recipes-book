import React from 'react'
import { mount, shallow } from 'enzyme'

import TextInput from './TextInput'

const basicProps = {
  input: { value: 'test', onBlur: () => {}, onChange: () => {} },
  meta: { error: '', touched: false }
}

describe('TextInput', () => {
  it('renders without crashing', () => {
    shallow(<TextInput {...basicProps} />)
  })
  it('initially is inactive', () => {
    const wrapper = mount(<TextInput {...basicProps} />)
    expect(wrapper.state('active')).toBe(false)
  })
  it('changes state to active on focus', () => {
    const wrapper = mount(<TextInput {...basicProps} />)
    const input = wrapper.find('input')
    input.simulate('focus')
    expect(wrapper.state('active')).toBe(true)
  })
  it('changes state to inactive on blur', () => {
    const wrapper = mount(<TextInput {...basicProps} />)
    const input = wrapper.find('input')
    input.simulate('focus')
    input.simulate('blur')
    expect(wrapper.state('active')).toBe(false)
  })
  it('shows error when has some error and is touched', () => {
    const wrapper = mount(<TextInput {...basicProps} meta={{ error: 'error-test', touched: true }} />)
    expect(wrapper.text()).toBe('error-test')
  })
  it('hides error when has some error but is not touched', () => {
    const wrapper = mount(<TextInput {...basicProps} meta={{ error: 'error-test', touched: false }} />)
    expect(wrapper.text()).toBe('')
  })
  it('changes state based on input value', () => {
    const wrapper = mount(<TextInput {...basicProps} />)
    const input = wrapper.find('input')
    input.instance().value = 'new-text'
    input.simulate('change')
    expect(wrapper.state('value')).toBe('new-text')
  })
})