import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';

//import SearchForm from './components/forms/SearchForm';
import StockSearch from './containers/SearchContainer';
import Home from './components/home/Home';
import Dashboard from './components/home/Dashboard';

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

 useEffect(() => {
    //fetchAPI()
   
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
        <Route index path="/" element={ loggedIn ? <Dashboard user={user} loggedIn={loggedIn} /> : <Home user={user} loggedIn={loggedIn} handleLogin={handleLogin}/>} />
         <Route path="/dashboard" element={<Dashboard user={user} loggedIn={loggedIn}/>} />
        <Route path="/search" element= {<StockSearch />} />
       
      </Routes>
     
    </div>
  );
}

export default App;