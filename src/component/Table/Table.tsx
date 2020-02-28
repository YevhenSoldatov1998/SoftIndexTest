import React, {ChangeEvent, FC, useState} from 'react'
import {UserType} from '../../types/types'
import TableBody from './TableBody/TableBody'
import TableHead from "./TableHead/TableHead";
import Preloader from "../Preloader/Preloader";
import './Table.sass'


type PropsType = {
    users: Array<UserType>
    isFetching: boolean
    mainFields: Array<{id: string, title: string}>
    sortBy: (field: string) => void
    descOrAsc: () => void
    order: boolean | "asc" | "desc"
    deleteUserThunk: (userId: number) => void
}
const Table: FC<PropsType> = ({users, isFetching, sortBy, descOrAsc, order, deleteUserThunk, mainFields}) => {

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
            <thead>
            <TableHead order={order}
                       sortByField={sortByField}
                       mainFields={mainFields}
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