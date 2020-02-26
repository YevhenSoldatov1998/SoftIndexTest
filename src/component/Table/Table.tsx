import React from 'react'
const Table = () => {
    return (
        <table>
            <caption>Users</caption>
            <thead>
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender </th>
                <th scope="col">Age </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Donuts</th>
                <td>3,000</td>
            </tr>
            <tr>
                <th scope="row">Stationery</th>
                <td>18,000</td>
            </tr>
            </tbody>
        </table>
    )
}
export default Table