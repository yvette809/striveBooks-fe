import React from 'react';
import Gallery from './components/Gallery'
import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import{BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar/>
      <Gallery title = "StrivesBooks"/>
      <Footer/>
    
    </Router>
  );
}

export default App;
