import React from 'react'

const SharesDetails = ({latest_price, userStock}) => {
    const { shares, avg_cost, total_cost, id } = userStock
   
    return (
     <>
            <dl className="row-center">
                <dt className="col-sm-10">Your Shares</dt>
            </dl>
            <dl className="row">
                <dd className="col-sm-5">Total</dd>
                <dd className="col-sm-6"> {shares} </dd>
            </dl>
            <dl className="row">
                <dd className="col-sm-5">Avg Cost</dd>
                <dd className="col-sm-6"> {avg_cost} </dd>
            </dl>
            <dl className="row">
                <dd className="col-sm-5">Total Cost</dd>
                <dd className="col-sm-6"> {total_cost} </dd>
            </dl>
            <dl className="row">
                <dd className="col-sm-5">Total Return</dd>
                <dd className="col-sm-6"> {((latest_price - avg_cost) * shares).toFixed(2)} </dd>
            </dl>
            
        
        </>
    )
}

export default SharesDetails
