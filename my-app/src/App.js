import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './pages/home';
import Contact from './pages/contact';
import Client from './pages/clients';
import Portfolio from './pages/portfolio';
import Whatwedo from './pages/whatwedo';
import "./configs/Navbar.css"
import "./configs/imageholder.css"

import Navbarmenu from './components/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">

        
        <Navbarmenu />
        
        <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Whatwedo" element={<Whatwedo/>}/>
          <Route path="/Client" element={<Client/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>

          
        </Routes>
      </Router>

    </div>
  );
}

export default App;