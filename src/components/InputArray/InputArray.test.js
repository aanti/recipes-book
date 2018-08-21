import React from 'react'
import { mount, shallow } from 'enzyme'

import InputArray from './InputArray'
import { AddButton } from '../Button'
import { Delete } from '../Icon'

const basicProps = {
  children: () => <div />,
  fields: [],
  newItemLabel: 'item'
}

describe('InputArray', () => {
  it('renders without crashing', () => {
    shallow(<InputArray {...basicProps} />)
  })

  it('renders as many inputs as the length of passes fields array', () => {
    const fields = ['a', 'b']
    const wrapper = mount(<InputArray {...basicProps} fields={fields} />)
    const numberOfInputs = wrapper.childAt(0).children().filter('div').length
    expect(numberOfInputs).toBe(fields.length)
  })

  it('shows Delete icon when there\'s more than one child', () => {
    const fields = ['a', 'b']
    const wrapper = mount(<InputArray {...basicProps} fields={fields} />)
    expect(wrapper.find(Delete).length).toBe(2)
  })

  it('doesn\'nt show Delete icon when there\'s only one child', () => {
    const fields = ['a']
    const wrapper = mount(<InputArray {...basicProps} fields={fields} />)
    expect(wrapper.find(Delete).length).toBe(0)
  })

  it('shows one AddButton icon', () => {
    const fields = ['a']
    const wrapper = mount(<InputArray {...basicProps} fields={fields} />)
    expect(wrapper.find(AddButton).length).toBe(1)
  })

  it('renders newItemLabel correctly', () => {
    const label = 'item'
    const wrapper = mount(<InputArray {...basicProps} newItemLabel={label} />)
    expect(wrapper.find(AddButton).childAt(0).childAt(1).html()).toEqual('<div>item</div>')
  })
})