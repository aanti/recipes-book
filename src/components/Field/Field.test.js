import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { reduxForm } from 'redux-form'

import { TextField, TextFieldArray, IngredientFieldArray } from './Field'

import configureStore from '../../store'

const store = configureStore()

const TestForm = ({ children }) => <div>{children}</div>

const ReduxFormWrapper = reduxForm({
  form: 'testForm',
  initialValues: {
    textArray: ['a', 'b'],
    ingredients: [{ product: 'a', amount: '1' }, { product: 'b', amount: '2' },{ product: 'c', amount: '10' }]
  }
})(TestForm)

describe('TextField', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ReduxFormWrapper>
          <TextField name= "testName" />
        </ReduxFormWrapper>
      </Provider>
    )
  })
})

describe('TextFieldArray', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ReduxFormWrapper>
          <TextFieldArray name= "testName" />
        </ReduxFormWrapper>
      </Provider>
    )
  })
  it('renders fields based on value', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxFormWrapper>
          <TextFieldArray name= "textArray" />
        </ReduxFormWrapper>
      </Provider>
    )
    const numberOfFields = wrapper.find(TextField).length
    expect(numberOfFields).toBe(2)
  })
})

describe('IngredientFieldArray', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <ReduxFormWrapper>
          <IngredientFieldArray name= "ingredients" />
        </ReduxFormWrapper>
      </Provider>
    )
  })
  it('renders fields based on value', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ReduxFormWrapper>
          <IngredientFieldArray name= "ingredients" />
        </ReduxFormWrapper>
      </Provider>
    )
    const numberOfFields = wrapper.find(TextField).length
    expect(numberOfFields).toBe(6) // 3 Fields, 2 subfields each
  })
})