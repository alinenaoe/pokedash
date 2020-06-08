import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Home } path="/" exact />
            <Route component={ About } path="/about" />
        </BrowserRouter>

    )
}

export default Routes;