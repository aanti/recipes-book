import uuid from 'uuid/v4'

export const list = [
  {
    id: uuid(),
    name: 'Keylime pie',
    description: 'You wil always miss it! Yum yum :)',
    ingredients: [
      { product: 'Flour', amount: '220g' },
      { product: 'Keylime fruit', amount: '4 - 5' },
      { product: 'Sugar', amount: '2/3 cup' },
      { product: 'Salt', amount: '1 spoon' },
      { product: 'Eggs', amount: '2' }
    ],
    recipe: ['Make.', 'Eat.']
  },
  {
    id: uuid(),
    name: 'Blueberry muffins',
    description: 'Feel blue!',
    ingredients: [],
    recipe: ['Make.', 'Eat.']
  },
  {
    id: uuid(),
    name: 'Ramen',
    description: 'Like a pro',
    ingredients: [],
    recipe: ['Make.', 'Eat.']
  },
  {
    id: uuid(),
    name: 'Butter Chicken',
    description: 'Indian treasure',
    ingredients: [],
    recipe: ['Make.', 'Eat.']
  },
  {
    id: uuid(),
    name: 'Moussaka',
    description: 'Lasagne from potatos ;-)',
    ingredients: [],
    recipe: ['Make.', 'Eat.']
  }
]

export default list
