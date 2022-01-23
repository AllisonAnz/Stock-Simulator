import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import axios from 'axios';

import LoadingPage from './components/pages/Shared/LoadingPage';
import StockSearch from './components/pages/Search/SearchPage';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import StockPage from './components/pages/StockPage/StockPage';

import AccountTransactions from './components/pages/Transactions/AccountTransactions';
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

  
  if (loading) return (<LoadingPage />)

  return (
    <div className="App">
      <NavigationBar  loggedIn={loggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route index path="/" element={ <Home user={user} loggedIn={loggedIn} handleLogin={handleLogin} /> } />
        <Route path="/dashboard" element={<Dashboard user={user.user} stocks={user.stocks} loggedIn={loggedIn}/>} />
        <Route path="/search" element= {<StockSearch loggedIn={loggedIn} />} />
        <Route path="/stock/:id" element={<StockPage user={user.user} />} />
        <Route path="/account-history" element={<AccountTransactions />} />
        {/* route /*  */}
      </Routes>
    </div>
  );
}

export default App;
