import React from 'react'
import { mount, shallow } from 'enzyme'

import Modal from './Modal'

const basicProps = {
  open: true,
  children: <div data-test-content>content</div>
}

describe('Modal', () => {
  it('renders without crashing', () => {
    shallow(<Modal {...basicProps} />)
  })
  it('renders its content when open', () => {
    const wrapper = mount(<Modal {...basicProps} />)
    expect(wrapper.find('[data-test-content]').length).toBe(1)
  })
  it('doesn\'t render its content when closed', () => {
    const wrapper = mount(<Modal {...basicProps} open={false} />)
    expect(wrapper.find('[data-test-content]').length).toBe(0)
  })
})