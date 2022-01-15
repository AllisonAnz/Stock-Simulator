import React from 'react'
import {Table, Container} from 'react-bootstrap'

const Transactions = ({transactions}) => {
    if (transactions.length > 0) {
    return (
        <>
        <Container>
            <h1 className="title">Purchase History</h1>

            <Table className="table table-striped">
                   <thead>
                       <tr className="table-header">
                           <th scope="col">Date</th>
                           <th scope="col">Symbol</th>
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
                                    <td>{transaction.ticker}</td>
                                    <td> {transaction.option} </td>
                                    <td> {transaction.shares} </td>
                                    <td> ${transaction.per_stock} </td>
                                    <td> ${transaction.total} </td>  
                               </tr>
                        )})
                    }
                </tbody>
            </Table>
        </Container>
        </>
    )} else {return ("")}
}

export default Transactions
