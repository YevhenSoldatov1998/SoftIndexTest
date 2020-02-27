import React, {ChangeEvent, FC} from 'react'
import {UserType} from '../../types/types'

type PropsType = {
    users: Array<UserType>
}
const Table: FC<PropsType> = ({users}) => {
    const handleSort = (e: any) => {
        debugger
        let current = e.target.id
    }
    return (
        <table>
            <caption>Users</caption>
            <thead>
            <tr onClick={handleSort}>
                <th id="firstName" scope="col">First Name</th>
                <th id="lastName" scope="col">Last Name</th>
                <th id="phone" scope="col">Phone</th>
                <th id="gender" scope="col">Gender</th>
                <th id="age" scope="col">Age</th>
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