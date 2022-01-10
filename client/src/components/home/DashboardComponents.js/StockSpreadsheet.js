import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const StockSpreadsheet = ({stocks, handleClick, userStocks}) => {

    
 if (stocks) {

     return (
         <div>
            <h1>Chart!</h1>
            <Container>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Symbol</th>
                        <th scope="col">Company</th>
                        <th scope="col">Shares</th>
                        <th scope="col">Latest Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { stocks.map (stock => {
                        return (
                            <tr key={stock.symbol}>
                            <th scope="row">{stock.symbol}</th>
                            <td>{stock.company_name}</td>
                            <td>
                                { userStocks.forEach(userStock => {
                                    if (userStock.ticker === stock.symbol && userStock.shares > 0){
                                       return (userStock.shares)
                                    }
                                    
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
            </table>
            </Container>
        </div>
    )
} else {
    return (<div>Loading...</div>)
}
}

export default StockSpreadsheet
