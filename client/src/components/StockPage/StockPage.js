import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Row, Col, Button} from 'react-bootstrap'

import { useParams } from "react-router-dom";

const StockPage = () => {
    const [userStock, setUserStock] = useState({})
    const [stockQuote, setStockQuote] = useState({})
    const params = useParams()
    
    //useEffect(() => {
    //    console.log(params.id)
    //    //searchStock()
    //}, [])

    //const searchStock = () => {
    //    axios.get(`http://localhost:3000/stocks/${params.id}`, { withCredentials: true })
    //        .then((response) => {
    //            setUserStock(response.data.stock),
    //            setStockQuote(response.data.stock_quote)
    //            
    //        })
    //        .catch((errors) => {
    //            console.log(errors);
    //        });
    //}

    return (
        <div>
            <h1>Stock Name</h1>
            <br/>
            <Container>
                <Row>
                    <Col className="p-3 border bg-light"sm={8}>
                        <h1>Chart</h1>

                    </Col>
                    <Col sm={4}>
                        <div className="p-3 border bg-light">

                            <dl className="row-center">
                                <dt className="col-sm-10">Symbol</dt>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">latest price</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">change</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Previous Close</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Previous Close</dt>
                                <dd className="col-sm-6">data</dd>
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
                                    <dd className="col-sm-6">data</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-5">High</dt>
                                    <dd className="col-sm-6">data</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-sm-5">Low</dt>
                                    <dd className="col-sm-6">data</dd>
                                </dl> 
                                <dl className="row">
                                    <dt className="col-sm-5">52 Wk high</dt>
                                    <dd className="col-sm-6">data</dd>
                                </dl> 
                                <dl className="row">
                                    <dt className="col-sm-5">52 Wk low</dt>
                                    <dd className="col-sm-6">data</dd>
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
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Avg Vol</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">Mkt cap</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">P/E ratio</dt>
                                <dd className="col-sm-6">data</dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">ytd_change</dt>
                                <dd className="col-sm-6">data</dd>
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
                                <dd className="col-sm-6"> 1 </dd>
                            </dl>
                            <dl className="row">
                                <dd className="col-sm-5">Avg Cost</dd>
                                <dd className="col-sm-6"> $1.00 </dd>
                            </dl>
                            <dl className="row">
                                <dd className="col-sm-5">Total Return</dd>
                                <dd className="col-sm-6"> $1.00 </dd>
                            </dl>
                            <dl className="row">
                                <dt className="col-sm-5">
                                    <button type="button" className="btn btn-success">Buy</button>
                                </dt>
                                <dd className="col-sm-6">
                                    <button type="button" className="btn btn-warning">Sell</button>
                                </dd>
                            </dl> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StockPage
