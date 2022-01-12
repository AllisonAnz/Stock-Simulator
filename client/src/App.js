import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';

//import SearchForm from './components/forms/SearchForm';
import StockSearch from './containers/SearchContainer';
import Home from './components/home/Home';
import Dashboard from './components/home/Dashboard';
import StockPage from './components/StockPage/StockPage';
import StockSpreadsheet from './components/home/DashboardComponents.js/StockSpreadsheet';
import Chart from './components/charts/Chart';
import NavigationBar from './components/nav/Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
 


  const handleLogin = (data) => {
    setUser(data)
    setLoggedIn(true)
  }

  const checkLoginStatus = () => {
    //withCredentials giving permission for the API to read the cookie in
    // w/o it Rails wont know about the cookie
    axios.get("http://localhost:3000/logged_in", {withCredentials: true})
    .then(response => {
     if (response.data.logged_in && loggedIn === false ) {
       setLoggedIn(true)
       setUser(response.data)
      }
      else if (!response.data.logged_in && loggedIn === true ){
        setLoggedIn(false)
        setUser({})
      }
    })
    .catch(error => {console.log("check login error", error);
  })
    setLoading(false)
  }

  const handleLogout = () => {
    console.log("logging out...")
    setLoggedIn(false)
    setUser({})
  }


 useEffect(() => {
    setLoading(true)
    checkLoginStatus()
  }, [])

  if (loading) return (
      <Spinner animation="border" role="status">
         <span className="visually-hidden">Loading...</span>
      </Spinner>)


  return (
    <div className="App">
      <NavigationBar  loggedIn={loggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route index path="/" element={ <Home user={user} loggedIn={loggedIn} handleLogin={handleLogin} /> } />
        <Route path="/dashboard" element={<Dashboard user={user.user} stocks={user.stocks} loggedIn={loggedIn}/>} />
        <Route path="/search" element= {<StockSearch loggedIn={loggedIn} />} />
        <Route path="/stock/:id" element={<StockPage user={user.user} />} />
        <Route path="/spreadsheet" element={<StockSpreadsheet />} />
         <Route path="/chart" element={<Chart />} />
      </Routes>
     
    </div>
  );
}

export default App;
