import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Routes
import LandingPage from './containers/landing_page';
import HomePage from './containers/home';


const Routes = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/home" component={HomePage} />                    
                    <Route path="/" component={LandingPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;