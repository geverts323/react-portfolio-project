import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import FoodDrink from './FoodDrinkComponent';
import Games from './GamesComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/foodndrink' component={FoodDrink} />
                    <Route path='/games' component={Games} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>

            </React.Fragment>
        );}
}

export default Main;