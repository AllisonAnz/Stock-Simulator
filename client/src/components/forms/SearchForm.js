import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'

const SearchForm = ({ handleSearchResults, handleSearchClick }) => {
    const [ticker, setTicker] = useState("")
    const [errors, setErrors] = useState(false)
    const [results, setResults] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(ticker)
        searchStock()
    }

    const searchStock = () => {
        setErrors(false)
        axios.get(`http://localhost:3000/stocks?ticker="${ticker}"`)
            .then((response) => {
                setResults(response.data)
                handleSearchResults(response.data);
            })
            .catch(() => {
                setErrors(true);
            });
        }


    return (
       <>
       <Container>

        <h1>Search for Stock by Symbol!</h1><br/>
            <Form onSubmit={handleSubmit}>
                <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)}></input>
                <Button type="submit" variant="info">submit</Button>
            </Form>
            <br/>
            <div>
            { errors ? (<div>Stock does not exisit</div>) : ("")}
                {results ? (
                    <button type="button" className="btn btn-link" onClick={handleSearchClick}>
                        {results.company_name} Latest Price: ${results.latest_price} <br/>
                    </button> ) 
                    
                    : ("")}
            </div>
        </Container>
       </>
   )
}

export default SearchForm;

         
