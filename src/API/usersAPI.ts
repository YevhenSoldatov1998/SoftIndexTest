import {instance} from "./instance";
import {UserType} from "../types/types";

export const getUsers = () => {
    return instance.get('users').then(res => res.data)
}
export const setUser = (user: UserType) => {
    return instance.post('users', user).then(res=> res.data)
}
export const deleteUser = (userId: number) => {
    return instance.delete(`users/${userId}`)
}