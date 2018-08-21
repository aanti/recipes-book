import React from 'react'
import { mount, shallow } from 'enzyme'

import Section from './Section'

const basicProps = {
  title: 'test-title',
  children: <div data-test-content>test-content</div>,
  titleColor: 'cornflowerblue'
}

describe('Section', () => {
  it('renders without crashing', () => {
    shallow(<Section {...basicProps} />)
  })
  it('renders proper title with correct color', () => {
    const wrapper = mount(<Section {...basicProps} />)
    expect(wrapper.find('span').text()).toEqual(basicProps.title)
    expect(wrapper.find('span').prop('style').color).toEqual(basicProps.titleColor)
  })
})