import React, {FC} from 'react'

const mainFields = [
    {id: 'firstName', title: 'First Name'},
    {id: 'lastName', title: 'Last Name'},
    {id: 'phone', title: 'Phone'},
    {id: 'gender', title: 'Gender'},
    {id: 'age', title: 'Age'},
]
type PropsType = {
    order: boolean | "asc" | "desc"
    sortByField: string | null
    handleSort: (field: string) => void
}
const TableHead: FC<PropsType> = ({ order, sortByField, handleSort}) => {

    const callHandleSort = (field: string) => {
        handleSort(field)
    }

    return (
        <>
            {mainFields.map((field: any) => {
                return (
                    <th key={field.id}
                        id={field.id}
                        onClick={() => callHandleSort(field.id)}
                        scope="col">

                        <strong>{field.title}</strong>

                        {sortByField === field.id ?
                            <span>{order === 'asc' ? <b>&#8593;</b> : <b>&#8595;</b>}</span> : false
                        }
                    </th>
                )
            })}
        </>
    )
}
export default TableHead