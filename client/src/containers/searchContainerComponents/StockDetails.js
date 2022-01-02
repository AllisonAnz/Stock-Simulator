import axios from 'axios'
import React from 'react'

const StockDetails = ({results}) => {
    const {change} = results

    const handleClick = () => {
        console.log(results.symbol)
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
                    console.log(response)
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
            {change}
        </div><br/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default StockDetails
