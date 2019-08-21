import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
   <Router>
   <Header />
   <Route exact path = '/' component={Home} />
   <Footer />
   </Router>
  );
}

export default App;
