import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

            <div className='content'>
                <Route exact path='/' render={() => <Redirect to='/About' />} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' componet={Contact} />
            </div>
            </HashRouter>
        );
    }
}

export default Header;