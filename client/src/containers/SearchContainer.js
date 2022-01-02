import React, {useState} from 'react'
import SearchForm from '../components/forms/SearchForm'
import StockDetails from './searchContainerComponents/StockDetails'

const StockSearch = () => {
    const [results, setResults] = useState({})
    const [clicked, setClick] = useState(false)
    const handleSearchResults = (results) => {
        setClick(false)
        setResults(results)
    }

    const handleSearchClick = () => {
        setClick(true)
    }
    return (
        <div>
            <h1>Stock Container</h1>
            <SearchForm handleSearchResults={handleSearchResults} handleSearchClick={handleSearchClick}/><br/>
            {clicked ? (<StockDetails results={results} />) : ("")}
        </div>
    )
}

export default StockSearch
