import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const StockSpreadsheet = ({stocks, handleClick}) => {

    
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
                        <th scope="col">Sector</th>
                        <th scope="col">Latest Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    { stocks.map (stock => {
                        return (
                            <tr key={stock.symbol}>
                            <th scope="row">{stock.symbol}</th>
                            <td>{stock.company_name}</td>
                            <td>{stock.sector}</td>
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
