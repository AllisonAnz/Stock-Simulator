import axios from 'axios'
import React, {useState} from 'react'
import Chart from '../../charts/Chart.js'
import Details from '../Shared/Details.js'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap'




const StockDetails = ({results, loggedIn}) => {
    const [addStockClicked, setAddStockClick] = useState(false)
  
    
    const { company_name, symbol, latest_price, change, previous_close, latest_source,
        open, high, low, week52_high, week52_low, volume, pe_ratio, market_cap,
        avg_total_volume, ytd_change } = results
    const isLoggedIn = loggedIn

    const handleAddStockClick = () => {
        //console.log(results.symbol)
        addStock()
       
    }

    const addStock = () => {
        //const { ticker } = results.symbol;
        axios.post("http://localhost:3000/stocks",
                {ticker: results.symbol},
                { withCredentials: true }
            )
            .then(response => {
                if (response) {
                    setAddStockClick(true)
                }
            })
            .catch(error => {
                //debugger
                console.log("error", error);
            });
    }

    
    
    return (
        <>
        <div>

                {addStockClicked ? (
                    <div><br/>
                        <h3 style={{ color: "green" }}>{symbol} Added To Watchlist!</h3>
                        <Nav.Link variant="pills" href="/dashboard"> Go To Dashboard</Nav.Link>
                    </div>) : ("")}
                <br />
                <Container>
                    <Details stock={results} />
                </Container>
                
                {isLoggedIn ? (<Button variant="info" onClick={handleAddStockClick}>Add</Button>): ("")}
               

        </div>
        </>
    )
}

export default StockDetails
