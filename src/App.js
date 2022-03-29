import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Style bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ViewDetail from './components/Detail/Detail';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/movieDetail'>
                        <ViewDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
