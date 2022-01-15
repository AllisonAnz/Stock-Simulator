
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';
import LoadingPage from '../pages/Shared/LoadingPage';

const Chart = ({symbol}) => {
   
    const [stockChartXValues, setStockChartXValues] = useState()
    const [stockChartYValues, setStockChartYValues] = useState()
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
       //getChart()
    }, [])

    
    const getChart = () => {
       
        let API_Call = `http://localhost:3000/find_chart?ticker=${symbol}`
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        axios.get(API_Call)
            .then((response) => {
                //console.log(response.data['Time Series (Daily)'])
                for (var key in response.data['Time Series (Daily)']) {
                    stockChartXValuesFunction.push(key);
                    stockChartYValuesFunction.push(response.data['Time Series (Daily)'][key]['1. open']);
                }
                setStockChartXValues(stockChartXValuesFunction)
                setStockChartYValues(stockChartYValuesFunction)
                setLoading(false)
            })
            .catch(errors => {
                console.log(errors);
            }); 
    }

    if (loading) return (<LoadingPage />)
    
    return (
        <>
            <div>
                <Plot
                    data={[
                        {
                            x: stockChartXValues,
                            y: stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        }
                    ]}
                    layout={{ width: 720, height: 440, title: 'Daily Open' }}
                />
            </div>
        </>
    )
}

export default Chart
