import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import StockPage from '../StockPage/StockPage';

const Dashboard = ({user, stocks, loggedIn}) => {
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [stockData, setStockData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        searchStock()
    }, [])
    

    const searchStock = () => {
        
        axios.get(`http://localhost:3000/stocks`, {withCredentials: true})
            .then((response) => {
                setStockData(response.data);
                setLoading(false)
            })
            .catch((errors) => {
                console.log(errors);
            });
    }

    const handleClick = (e) => {
        console.log(e.target.value)
        
       const data = stocks.map(stock => {
           if(stock.ticker === e.target.value){
               navigate(`/stock/${stock.id}`)
        }
    })


       
      
       //{ <StockPage stock={data}/> } 
      //handleStuff(data)
       
       //navigate(`/stock/${data.id}`)
        
        
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
                {stockData.map((stock) => { 
                    return (
                    <ul key={stock.symbol}>
                        {stock.symbol}: {stock.latest_price} 
                        <button value={stock.symbol} onClick={handleClick}>view</button></ul>
                    )
                   
                }
                
                )}
            
            </div>
        </div>
    )
    } else {
        return(<div>Sign Up to View This Page</div>)}
    
    
}

export default Dashboard
