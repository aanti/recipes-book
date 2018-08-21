import React from 'react'
import { shallow, mount } from 'enzyme'

import Collapsed from './Collapsed'

const children = [
  <Collapsed.Header>
    <div data-test-header>Header</div>
  </Collapsed.Header>,
  <Collapsed.Content>
    <div data-test-content>Content</div>
  </Collapsed.Content>
]

describe('AddButton', () => {
  it('renders without crashing', () => {
    shallow(<Collapsed children={children} />)
  })
  it('is initially closed', () => {
    const wrapper = mount(<Collapsed children={children} />)
    expect(wrapper.state().open).toBe(false)
  })
  it('doesn\'t show content when not expanded', () => {
    const wrapper = mount(<Collapsed children={children} />)
    expect(wrapper.find('[data-test-content]')).toHaveLength(0)
  })
  it('changes state on header click', () => {
    const wrapper = mount(<Collapsed children={children} />)
    wrapper.find('[data-test-header]').simulate('click')
    expect(wrapper.state().open).toBe(true)
  })
  it('recalculates content when content change', () => {
    const newChildren = [
      <Collapsed.Header>
        <div data-test-header>Header</div>
      </Collapsed.Header>,
      <Collapsed.Content>
        <div data-test-content>Content content content content</div>
      </Collapsed.Content>
    ]
    const wrapper = mount(<Collapsed children={children} />)
    const spy = jest.spyOn(wrapper.instance(), 'recalculateContent')
    wrapper.setProps({ children: newChildren })
    expect(spy).toHaveBeenCalled()
  })
})