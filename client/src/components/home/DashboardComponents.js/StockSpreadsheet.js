import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import './Dashboard.css'

const StockSpreadsheet = ({stocks, handleClick, userStocks}) => {

    
 if (stocks) {

     return (
         <div>
            <Container className="container">
            <h1 className="title">Watchlist</h1>

            <Table className="table table-striped">
                
                <thead>
                    <tr className="table-header">
                        <th scope="col">Symbol</th>
                        <th scope="col">Company</th>
                        <th scope="col">Shares</th>
                        <th scope="col">Latest Price</th>
                             <th scope="col"></th>
                        
                    </tr>
                </thead >
                <tbody>
                    { stocks.map (stock => {
                        return (
                            <tr className="table-body" key={stock.symbol}>
                            <th scope="row">{stock.symbol}</th>
                            <td>{stock.company_name}</td>
                            <td>
                                { userStocks.map(userStock => {
                                    if (userStock.ticker === stock.symbol && userStock.shares > 0){
                                       return (userStock.shares)
                                    } return ("")
                                })
                                }
                            </td>
                            <td>{stock.latest_price}</td>
                            <td>
                                <Button 
                                    variant="outline-primary" 
                                    value={stock.symbol} 
                                    onClick={(e) => handleClick(e)}>View</Button>
                            </td>
                        </tr>
                            )
                        })}
                   
                </tbody>
            </Table>
            </Container>
        </div>
    )
} else {
    return (<div>Loading...</div>)
}
}

export default StockSpreadsheet
