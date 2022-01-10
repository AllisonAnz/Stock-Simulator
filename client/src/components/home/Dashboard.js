import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import StockSpreadsheet from './DashboardComponents.js/StockSpreadsheet';

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
                
                //setStockData(oldArr => [...oldArr, data])
                //debugger
                handleResponse(response.data)
                
            })
            .catch((errors) => {
                console.log(errors);
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
        //console.log(e.target.value)
        
       stocks.map(stock => {
           if(stock.ticker === e.target.value){
               navigate(`/stock/${stock.ticker}`)
        }
        return (e.target.value)
    })
       //{ <StockPage stock={data}/> }           
    }


    if (loading) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)

 if (stockData) {

     return (
         
         <div>
            <h1>Dashboard</h1>
            <br/>
            <div>
                 {
                     stockData ? <StockSpreadsheet stocks={stockData} handleClick={handleClick} userStocks={stocks}/> : ""
                 }

            </div>
        </div>
    )
    } else {
        return(<div>Sign Up to View This Page</div>)}
    
    
}

export default Dashboard
