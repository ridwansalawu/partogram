import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home'
import Partograph from './components/Partograph';
import User from './components/User';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Bishop from './components/Bishop';


const App = () => (
    <BrowserRouter>
        <main>
            <Header />
            <Bishop />
            <Switch>
                <Redirect from="/home" to="/" />
                <Route exact path='/' component = {Home}/>
                <Route path='/partograph' component = {Partograph}/>
                <Route path="/user" component={User} />
                <Route component={NotFound} />
            </Switch>

        </main>
    </BrowserRouter>
)

export default App;