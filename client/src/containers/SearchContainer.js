import React, {useState} from 'react'
import SearchForm from '../components/forms/SearchForm'
import StockDetails from './searchContainerComponents/StockDetails'

const StockSearch = ({loggedIn}) => {
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
        <div><br/>
            <h1></h1>
            <SearchForm handleSearchResults={handleSearchResults} handleSearchClick={handleSearchClick}/><br/>
            {clicked ? (<StockDetails results={results} loggedIn={loggedIn} />) : ("")}
        </div>
    )
}

export default StockSearch
