import React, {ChangeEvent, FC, useState} from 'react'
import {UserType} from '../../types/types'
import TableBody from './TableBody/TableBody'
import TableHead from "./TableHead/TableHead";
import Preloader from "../Preloader/Preloader";

const mainFields = [
    {id: 'firstName', title: 'First Name'},
    {id: 'lastName', title: 'Last Name'},
    {id: 'phone', title: 'Phone'},
    {id: 'gender', title: 'Gender'},
    {id: 'age', title: 'Age'},
]
type PropsType = {
    users: Array<UserType>
    isFetching: boolean
    sortBy: (field: string) => void
    descOrAsc: () => void
    order: boolean | "asc" | "desc"
    deleteUserThunk: (userId: number) => void
}
const Table: FC<PropsType> = ({users, isFetching, sortBy, descOrAsc, order, deleteUserThunk}) => {

    const [sortByField, setSortByField] = useState(null);

    const handleSort = (field: any) => {
        sortBy(field);
        descOrAsc();
        setSortByField(field)
    }
    const handleDelete = (userId: number) => {
        deleteUserThunk(userId)
    }
    return (
        <table>
            <caption>Users</caption>
            <thead>
            <TableHead order={order}
                       sortByField={sortByField}
                       handleSort={handleSort}/>
            </thead>
            {isFetching ?
                <Preloader/> :
                <tbody>
                <TableBody users={users} handleDelete={handleDelete}/>
                </tbody>
            }


        </table>
    )
}
export default Table