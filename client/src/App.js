import React, {useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { getCardsAction } from './actions/cards';

import Header from "./Components/Header/Header.js";
// pages
import SignUp from './Pages/SignUp/SignUp.js';
import LogIn from './Pages/LogIn/LogIn.js';


function App() {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCardsAction());
    }, [dispatch])

  return (
    <div className='app'>
    <Router>
      <Routes>
        
          <Route path="/*" element={<Header/>} />
          
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/log_in" element={<LogIn />} />
        </Routes>
    </Router>
    </div>
  );

}

export default App;



