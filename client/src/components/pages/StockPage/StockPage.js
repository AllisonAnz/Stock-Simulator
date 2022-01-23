import React, {useState, useEffect} from 'react'
import BuyButton from './StockPageComponents/BuyButton'
import SellButton from './StockPageComponents/SellButton'
import RemoveButton from './StockPageComponents/RemoveButton'
import Details from '../Shared/Details'
import Transactions from '../Transactions/Transactions'
import SharesDetails from './StockPageComponents/SharesDetails'
import axios from 'axios'
import { Container, Row, Col} from 'react-bootstrap'
import LoadingPage from '../Shared/LoadingPage'
import { useParams } from "react-router-dom";

const StockPage = () => {
    const [loading, setLoading] = useState(true)
    const [userStock, setUserStock] = useState({})
    const [stockQuote, setStockQuote] = useState({})
    const [companyInfo, setCompanyInfo] = useState()
    const [transactions, setTransactions] = useState([])
    const params = useParams()

    
    useEffect(() => {
        searchStock()
    }, [params.id])

    const searchStock = () => {
        axios.get(`http://localhost:3000/stocks/${params.id}`, { withCredentials: true })
            .then(response => {
                setUserStock(response.data.stock)
                setStockQuote(response.data.stock_quote)
                setTransactions(response.data.transactions)
                setCompanyInfo(response.data.company_info)
                setLoading(false)
                return response.data
            })
            .catch((errors) => {
                console.log(errors);
            });
        }


    if (loading) return (<LoadingPage />)

    const {latest_price } = stockQuote
    const {shares, id} = userStock

    return (
        <div><br/>
            <Container>
                  < Details stock={stockQuote} userStock={userStock}/><br/>
                  <Row>
                    <Col>
                        <div className="p-3 border bg-light">
                            <dl className="row-center">
                                <dt className="col-sm-10">Company Info</dt>
                            </dl>
                            <dl className="row">
                                <dd > {companyInfo.description} </dd>
                            </dl>
                        </div>
                    </Col>
                        
                    <Col sm>
                         <div className="p-3 border bg-light">
                            <SharesDetails userStock={userStock} latest_price={stockQuote.latest_price}/>

                            <dl className="row">
                                <dt className="col-sm-5">
                                <BuyButton price={latest_price} stock_id={id} searchStock={searchStock}/>
                                </dt>
                                <dd className="col-sm-6">
                                    <SellButton price={latest_price} stock_id={id} total_shares={shares} searchStock={searchStock}/>  
                                </dd>
                            </dl> 
                        </div>
                    </Col>
                  </Row><br/>

                <div align="right">
                   <RemoveButton shares={userStock.shares} stock_id={userStock.id}/>
                </div>

            </Container><br/>

               < Transactions transactions={transactions}/>

        </div>
    )
}

export default StockPage
