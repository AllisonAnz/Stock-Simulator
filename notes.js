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


//                    <dl className="row">
//                                <dt className="col-sm-5">
//                                    <Button variant="success" 
//                                            onClick = {toggleBuy}
//                                    >Buy</Button>
//                                  
//
//                                </dt>
//                                <dd className="col-sm-6">
//                                    <button type="button" onClick={handleSellClick} className="btn btn-warning">Sell</button>
//                                </dd>
//                            </dl> 
//                        </div >
//                    </Col >
//                </Row >
//            </Container >
//    <div className={isBuyActive ? < BuyButton /> : null}></div>
//        </div >

const toggleBuy = () => {
    setBuyActive(!isBuyActive)
}


return (
    <>
        <Button variant="danger" onClick={handleShow}>
            Delete Stock
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>You Don't own shares</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" >
                        Yes
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
)
    } else {
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Stock
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You Own Shares</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary" >
                            Yes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
    
    
}
