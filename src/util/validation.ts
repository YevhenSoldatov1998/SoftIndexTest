export const required = (value: any) => (value || typeof value === 'number' ? undefined : 'This field is required')

export const minLength = (min: any) => (value: any) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)

export const minValue = (min: any) => (value: any) =>
    value && value < min ? `Must be at least ${min}` : undefined

export const phoneNumber = (value: any) =>
    value && !/^(0|[1-9][0-9]{6,10})$/i.test(value)
        ? 'Invalid phone number, must be 6-10 digits'
        : undefined