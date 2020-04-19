import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Profile from './pages/Profile';
import Stocks from './pages/Stocks';
import Experiments from './pages/Experiments';
import Tanks from './pages/Tanks';
import UserSettings from './pages/UserSettings';

export default function Routes(){
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/newuser" exact component={NewUser}/>
            <Route path="/profile"component={Profile}/>
            <Route path="/stocks"component={Stocks}/>
            <Route path="/experiments"component={Experiments}/>
            <Route path="/tanks"component={Tanks}/>
            <Route path="/userSettings"component={UserSettings}/>
          </Switch>
        </BrowserRouter>
    );
}