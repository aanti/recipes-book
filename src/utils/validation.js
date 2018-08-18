export const required = value => !value ? 'This field is required' : undefined

export const atLeastOne = (name, nonEmptyItemCondition = v => !!v) => (value, values, a, b) => {
  const numberOfFields = (values[name] || []).filter(value => nonEmptyItemCondition(value)).length
  return (!numberOfFields) ? 'Fill at least one input' : undefined
}