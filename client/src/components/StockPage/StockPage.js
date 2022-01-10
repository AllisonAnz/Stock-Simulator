import React, {useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner'
import BuyButton from './BuyButton'
import SellButton from './SellButton'
import RemoveButton from './RemoveButton'
import Chart from '../charts/Chart.js'
import axios from 'axios'
import { Container, Row, Col} from 'react-bootstrap'


import { useParams } from "react-router-dom";

const StockPage = () => {
    const [loading, setLoading] = useState(true)
    const [userStock, setUserStock] = useState({})
    const [stockQuote, setStockQuote] = useState({})
    const params = useParams()

    
    useEffect(() => {
        //console.log(params.id)
        searchStock()
    }, [params.id])

    const searchStock = () => {
        axios.get(`http://localhost:3000/stocks/${params.id}`, { withCredentials: true })
            .then(response => {
                setUserStock(response.data.stock)
                setStockQuote(response.data.stock_quote)
                setLoading(false)
                return response.data
            })
            .catch((errors) => {
                console.log(errors);
            });
        }


    if (loading) return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>)


    const {company_name, symbol, latest_price, change, previous_close, latest_source,
            open, high, low, week52_high, week52_low, volume, pe_ratio, market_cap, 
            avg_total_volume, ytd_change } = stockQuote

    const {shares, avg_cost, total_cost, id} = userStock
    return (
        <div>
            <h1>{company_name}</h1>
            <br/>
            <Container>
                <Row>
                    <Col className="p-3 border bg-light"sm={8}>
                        {<Chart symbol={userStock.ticker}/>}

                    </Col>
                    <Col sm={4}>
                        <div className="p-3 border bg-light">

                            <dl className="row-center">
                                <dt className="col-sm-10">{symbol}</dt>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Latest Price</dt>
                                <dd className="col-sm-6">{latest_price}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Change</dt>
                                <dd className="col-sm-6">{change}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Previous Close</dt>
                                <dd className="col-sm-6">{previous_close}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Latest Source</dt>
                                <dd className="col-sm-6">{latest_source}</dd>
                            </dl>
                        </div>
                    </Col>
                </Row><br/>
                <Row>
                    <Col sm>
                            <div className="p-3 border bg-light">

                                <dl className="row-center">
                                   <dt className="col-sm-10">Price History</dt>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-5">Open</dt>
                                    <dd className="col-sm-6">{open}</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-5">High</dt>
                                    <dd className="col-sm-6">{high}</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-5">Low</dt>
                                    <dd className="col-sm-6">{low}</dd>
                                </dl> 
                                <dl className="row">
                                    <dt className="col-sm-5">52 Wk high</dt>
                                    <dd className="col-sm-6">{week52_high}</dd>
                                </dl> 
                                <dl className="row">
                                    <dt className="col-sm-5">52 Wk low</dt>
                                    <dd className="col-sm-6">{week52_low}</dd>
                                </dl> 
                        </div>
                    </Col>

                    <Col sm>
                        <div className="p-3 border bg-light">

                            <dl className="row-center">
                                <dt className="col-sm-10">Stats</dt>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Volume</dt>
                                <dd className="col-sm-6">{volume}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Avg Vol</dt>
                                <dd className="col-sm-6">{avg_total_volume}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Mkt cap</dt>
                                <dd className="col-sm-6">{market_cap}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">P/E ratio</dt>
                                <dd className="col-sm-6">{pe_ratio}</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">ytd_change</dt>
                                <dd className="col-sm-6">{ytd_change}</dd>
                            </dl>
                        </div>
                    </Col>
                   
                    <Col sm>
                        <div className="p-3 border bg-light">
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
                            <dl className="row">
                                <dt className="col-sm-5">
                                <BuyButton price={latest_price} stock_id={id} />
                                </dt>
                                <dd className="col-sm-6">
                                    <SellButton price={latest_price} stock_id={id} total_shares={shares}/>
                                   
                                </dd>
                            </dl> 
                        </div>
                    </Col>
                </Row><br/>
                <div align="right">

                   <RemoveButton shares={userStock.shares} stock_id={userStock.id}/>
                </div>
            </Container>
           
           
        </div>
    )
}

export default StockPage
