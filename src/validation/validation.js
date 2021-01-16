import is from 'is_js'

export const validateInput = (input, prop) => {
  if (!prop) {
    return true
  }
  let isValid = true

  if (prop.hasOwnProperty('required')) {
    isValid = input.trim() !== '' && isValid
  }
  if (prop.hasOwnProperty('empty')) {
    isValid = is.empty(input) && isValid
  }
  if (prop.hasOwnProperty('email')) {
    isValid = is.email(input) && isValid
  }
  if (prop.hasOwnProperty('number')) {
    isValid = is.number(input * 1) && isValid
  }
  if (prop.hasOwnProperty('phone')) {
    isValid = input.trim().length === 12 && isValid
  }
  if (prop.hasOwnProperty('role')) {
    isValid =
      (Number(input.trim()) === 1 || Number(input.trim()) === 2) && isValid
  }
  if (prop.hasOwnProperty('pass')) {
    isValid = input.trim().length >= 8 && isValid
  }
  return isValid
}
