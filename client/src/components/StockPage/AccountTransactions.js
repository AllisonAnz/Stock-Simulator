import React, {useEffect, useState} from 'react'
import Transactions from './Transactions'
import { Container} from 'react-bootstrap'
import axios from 'axios';

const AccountTransactions = () => {
    const [transactions, setTransactions] = useState()

    useEffect(() => {
        getTransactions()
    }, [])

const getTransactions = () => {
    axios.get(`http://localhost:3000/transactions`, { withCredentials: true })
        .then((response) => {

            //setStockData(oldArr => [...oldArr, data])
            //debugger
            setTransactions(response.data)

        })
        .catch((errors) => {
            console.log(errors);
        });
}




    return (
           <Container>
                {transactions ? <Transactions transactions={transactions} /> : <div>No Purchase History</div>}
           </Container>
    )
}

export default AccountTransactions
