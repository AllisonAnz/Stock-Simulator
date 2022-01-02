import React, { useState } from 'react'

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
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `http://localhost:3000/search_stocks?ticker="${ticker}"`,
           
        };

        axios(config)
            .then(function (response) {
                setResults(response.data)
                handleSearchResults(response.data);
            })
            .catch(function () {
                setErrors(true);
            });
        }


    return (
       <>
        <h1>Seach For a Stock!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)}></input>
                <button type="submit">submit</button>
            </form>
            <br/>
            <div>
            { errors ? (<div>Stock does not exisit</div>) : ("")}
                {results ? (
                    <button type="button" className="btn btn-link" onClick={handleSearchClick}>
                        {results.company_name} ${results.latest_price} <br/>
                    </button> ) 
                    
                    : ("")}
            </div>
       </>
   )
}

export default SearchForm;

         
