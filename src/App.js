import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import Contact from './Components/Contact';
import Navbar  from './Components/Navbar';
import Index   from './Components/Index';
import Footer  from './Components/Footer';

class App extends Component {
  
  render() {

    return (
      <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
        <Footer />
      </BrowserRouter>
      
      </div>
    );
  }
}

export default App;
