const fetchAPI = () => {
    fetch('http://localhost:3000/stocks').then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data);
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
}

const searchStock = () => {
    setErrors(false)
    var axios = require('axios');

    var config = {
        method: 'get',
        url: `http://localhost:3000/search_stocks?ticker="${ticker}"`,

    };

    axios(config)
        .then(function (response) {
            setResults(response.data)
            handleSearchResults(response.data);
        })
        .catch(function () {
            setErrors(true);
        });
}

//-------------------------------------------------------------------------------------
//Dashboard 
if (stockData) {

    return (

        <div>
            <h1>Dashboard</h1>
            <br />
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
    return (<div>Sign Up to View This Page</div>)
}
    
    
////---------------------------------
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
</tr>

//-----
// <Col sm>
//    <div className="p-3 border bg-light">
//        Custom column padding
//    </div>
// </Col>

//-----
{
    stockData ? <StockSpreadsheet stocks={stockData} handleClick={handleClick} /> : ""
}

<Button variant="outline-primary" value={stock.symbol} onClick={(e) => handleClick(e)}>View</Button>