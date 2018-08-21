import React from 'react'
import { mount, shallow } from 'enzyme'

import NoData from './NoData'

const basicProps = {
  text: 'test-info'
}

describe('NoData', () => {
  it('renders without crashing', () => {
    shallow(<NoData {...basicProps} />)
  })
  it('renders info passed via props', () => {
    const wrapper = mount(<NoData {...basicProps} />)
    expect(wrapper.childAt(0).text()).toBe(basicProps.text)
  })
})