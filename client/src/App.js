import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router'

import SearchForm from './components/forms/SearchForm';

import NavigationBar from './components/nav/Navbar';
import './App.css';

const App = () => {
 
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
  }, [])


  return (
    <div className="App">
      <NavigationBar  />
      <Routes>
        <Route path="/search" element= {<SearchForm />} />
      </Routes>
     
    </div>
  );
}

export default App;
