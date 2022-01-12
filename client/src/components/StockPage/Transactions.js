import React from 'react'
import Table from 'react-bootstrap/Table'

const Transactions = ({transactions}) => {
    
    return (
        <>
            <h1 className="title">Purchase History</h1>
         <Table className="table table-striped">
                <thead>
                    <tr className="table-header">
                        <th scope="col">Date</th>
                        <th scope="col">Option</th>
                        <th scope="col">Shares</th>
                        <th scope="col">Price Per Share</th>
                        <th scope="col">Total</th>

                    </tr>
                    </thead>
                    <tbody>

            {transactions.map(transaction => {
                return (
                    <tr className="table-body" key={transaction.id}>
                        <td> {transaction.date} </td>
                        <td> {transaction.option} </td>
                        <td> {transaction.shares} </td>
                        <td> ${transaction.per_stock} </td>
                        <td> ${transaction.total} </td>
                         
                       </tr>
                )
            })}
            </tbody>
        </Table>
        </>
    )
}

export default Transactions
