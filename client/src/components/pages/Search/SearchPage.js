import React, {useState} from 'react'
import SearchForm from '../../forms/SearchForm'
import Details from '../Shared/Details'
import axios from 'axios'
import { Container, Button, Nav } from 'react-bootstrap'

const StockSearch = ({loggedIn}) => {
    const [results, setResults] = useState({})
    const [searchClicked, setSearchClick] = useState(false)
    const [addStockClicked, setAddStockClick] = useState(false)
    const isLoggedIn = loggedIn
    const handleSearchResults = (results) => {
        setSearchClick(false)
        setResults(results)
    }

    const handleAddStockClick = () => {
        addStock()

    }
    const handleSearchClick = () => {
        setSearchClick(true)
    }

    const addStock = () => {
        axios.post("http://localhost:3000/stocks",
            { ticker: results.symbol },
            { withCredentials: true }
        )
            .then(response => {
                if (response) {
                    setAddStockClick(true)
                }
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    return (
        <div><br/>
            <h1></h1>
            <SearchForm handleSearchResults={handleSearchResults} handleSearchClick={handleSearchClick}/><br/>
            <div>

                {addStockClicked ? (
                    <div><br />
                        <h3 style={{ color: "green" }}>{results.symbol} Added To Watchlist!</h3>
                        <Nav.Link variant="pills" href="/dashboard"> Go To Dashboard</Nav.Link>
                    </div>) : ("")}
                <br />

                {searchClicked ?  (
                    <Container>
                        <Details stock={results} /><br/>
                        {isLoggedIn ? (<Button variant="info" onClick={handleAddStockClick}>Add</Button>) : ("")}
                    </Container>
                ): ("")}
               
            </div>
        </div>
    )
}

export default StockSearch
