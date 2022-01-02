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