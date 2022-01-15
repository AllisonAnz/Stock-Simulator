import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import { Nav } from 'react-bootstrap'
import axios from 'axios';

import LoadingPage from '../pages/Shared/LoadingPage';
import Watchlist from './DashboardComponents/Watchlist';

const Dashboard = ({stocks, loggedIn}) => {
    const [loading, setLoading] = useState(true)
    const [stockData, setStockData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        searchStock()
    }, [])
    

    const searchStock = () => {
        
        axios.get(`http://localhost:3000/stocks`, {withCredentials: true})
            .then((response) => {
                handleResponse(response.data)  
            })

            .catch((errors) => {
                console.log(errors);
                setLoading(false)
            });
    }

    const handleResponse = (data) => {
        if (Array.isArray(data)){
            setStockData(data)
        } else {
            setStockData([data])
        }
        setLoading(false)
    }

    const handleClick = (e) => {
       stocks.map(stock => {
           if(stock.ticker === e.target.value){
               navigate(`/stock/${stock.ticker}`)
        }
        return (e.target.value)
     })      
    }

    if (loading) return (<LoadingPage />)
    if (!loggedIn) return (<Nav.Link variant="pills" href="/"> Login to view this page</Nav.Link>) 

     return (
         <div><br/>
            <div><br/>
                 {
                     stockData ? <Watchlist stocks={stockData} handleClick={handleClick} userStocks={stocks}/> : ""
                 }

            </div>
        </div>
    )
}

export default Dashboard
