import React, {FC} from 'react'

type PropsType = {
    order: boolean | "asc" | "desc"
    mainFields: Array<{id: string, title: string}>
    sortByField: string | null
    handleSort: (field: string) => void
}
const TableHead: FC<PropsType> = ({ order, sortByField, handleSort, mainFields}) => {

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