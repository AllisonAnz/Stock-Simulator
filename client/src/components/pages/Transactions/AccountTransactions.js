import React, {useEffect, useState} from 'react'
import Transactions from './Transactions'
import axios from 'axios';

const AccountTransactions = () => {
    const [transactions, setTransactions] = useState()

    useEffect(() => {
        getTransactions()
    }, [])

    const getTransactions = () => {
        axios.get(`http://localhost:3000/transactions`, { withCredentials: true })
            .then((response) => {
                setTransactions(response.data)
            })
            .catch((errors) => {
                console.log(errors);
            });
    }

    return (
           <> {transactions ? <Transactions transactions={transactions} /> : <div>No Purchase History</div>} </>
    )
}

export default AccountTransactions
