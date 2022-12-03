import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { useState } from 'react';


function App() {
  const [pages] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Resume'},
    {name: 'Contact'}
  ]);
  return (
    <div>
      <Nav>
        <Route exact path = "/" component={About} />
        <Route exact path = "/Portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} /> 
      </Nav>
    </div>
  )
};

export default App;