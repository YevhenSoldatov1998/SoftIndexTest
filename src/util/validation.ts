export const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = (max: any) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15)

export const minLength = (min: any) => (value: any) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)

export const number = (value: any) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const minValue = (min: any) => (value: any) =>
  value && value < min ? `Must be at least ${min}` : undefined

export const minValue13 = minValue(13)

export const email = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const tooYoung = (value: any) =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined

export const aol = (value: any) =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

export const alphaNumeric = (value: any) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const phoneNumber = (value: any) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined