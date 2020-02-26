import React, {FC} from 'react'
import {UserType} from '../../types/types'

type PropsType = {
    users: Array<UserType>
}
const Table: FC<PropsType> = ({users}) => {
    return (
        <table>
            <caption>Users</caption>
            <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => {
                return <tr key={user.id}>
                    <td> {user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                </tr>
            })}

            </tbody>
        </table>
    )
}
export default Table