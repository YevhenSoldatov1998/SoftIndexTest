import React, {ChangeEvent, FC, useState} from 'react'
import {UserType} from "../../../types/types";

type PropsType = {
    users: Array<UserType>
    handleDelete: (userId:number) => void
}
const TableBody: FC<PropsType> = ({users , handleDelete}) => {
    const callHandleDelete = (userId: number) => {
        handleDelete(userId)
    }
    return (
        <>
            {users.map(user => {
                return <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender ? 'Man' : 'Woman'}</td>
                    <td>{user.age}</td>
                    <td onClick={() => callHandleDelete(user.id)}>&times;</td>
                </tr>
            })}
          </>
    )
}
export default TableBody