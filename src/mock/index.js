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
    ingredients: [
      { product: 'Blueberries', amount: '400-500 g' },
      { product: 'Flour', amount: '2 cups' },
      { product: 'Eggs', amount: '2' },
      { product: 'Sugar', amount: '120 g' },
      { product: 'Salt', amount: '1 pinch' },
      { product: 'Cinnamon', amount: '1 tsp' },
    ],
    recipe: [
      'Preheat oven to 200 degrees C.',
      'Combine flour, sugar, salt and baking powder.',
      'Add eggs, mix everything.',
      'Carefully add blueberries.',
      'Bake for 20 to 25 minutes in the preheated oven.'
    ]
  },
  {
    id: uuid(),
    name: 'Ramen',
    description: 'Like a pro',
    ingredients: [
      { product: 'Chicken stock', amount: '700 ml' },
      { product: 'Garlic', amount: '3 cloves (halved)' },
      { product: 'Soy souce', amount: '1 tsp' },
      { product: 'Ramen noodles', amount: '375 g' },
      { product: 'Sesame oil', amount: '2 tsp' },
      { product: 'Eggs', amount: '4' }
    ],
    recipe: [
      'Mix the chicken stock, garlic, soy sauce, Worcestershire sauce, ginger, five spice, chilli powder and 300ml water in a stockpot or large saucepan, bring to the boil, then reduce the heat and simmer for 5 mins.',
      'Cook the ramen noodles following pack instructions, then drain and set aside.',
      'Divide the noodles between four bowls. Top each with a quarter of the meat and spinach, 1 tbsp sweetcorn and two egg halves.',
      'Strain the stock into a clean pan, then bring to the boil once again. Divide the stock between the bowls, then sprinkle over the nori, spring onion or shallots and sesame seeds.'
    ]
  },
  {
    id: uuid(),
    name: 'Butter Chicken',
    description: 'Indian treasure',
    ingredients: [
      { product: 'Butter', amount: '200 g' },
      { product: 'Chicken', amount: '1' }
    ],
    recipe: ['Make.', 'Eat.']
  },
  {
    id: uuid(),
    name: 'Moussaka',
    description: 'Lasagne from potatos ;-)',
    ingredients: [
      { product: 'Potatos', amount: '3 kg' },
      { product: 'Good mood', amount: '1 smile' }
    ],
    recipe: ['Make.', 'Eat.']
  }
]

export default list
