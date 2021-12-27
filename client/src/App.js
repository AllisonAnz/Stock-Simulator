import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import SearchForm from './components/forms/SearchForm';
import Home from './components/home/Home';
import Dashboard from './components/home/Dashboard';

import NavigationBar from './components/nav/Navbar';
import './App.css';

const App = () => {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = (data) => {
    setUser(data.user)
    setLoggedIn(true)
  }

  const checkLoginStatus = () => {
    //withCredentials giving permission for the API to read the cookie in
    // w/o it Rails wont know about the cookie
    axios.get("http://localhost:3000/logged_in", {withCredentials: true})
    .then(response => {
     if (response.data.logged_in && loggedIn === false ) {
       setLoggedIn(true)
       setUser(response.data.user)
     }
     else if (!response.data.logged_in && loggedIn === true ){
       setLoggedIn(false)
       setUser({})
      }
    })
    .catch(error => {console.log("check login error", error);
    })
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


  return (
    <div className="App">
      <NavigationBar  loggedIn={loggedIn} onLogout={handleLogout}/>
      <Routes>
        <Route index path="/" element={<Home user={user} loggedIn={loggedIn} handleLogin={handleLogin}/>} />
         <Route path="/dashboard" element={<Dashboard user={user} loggedIn={loggedIn}/>} />
        <Route path="/search" element= {<SearchForm />} />
       
      </Routes>
     
    </div>
  );
}

export default App;
