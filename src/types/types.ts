export type UserType = {
    id: number
    firstName: string
    lastName: string
    phone: string
    gender: boolean
    age: number
}
export type UsersType = {
    users: Array<UserType>
}
