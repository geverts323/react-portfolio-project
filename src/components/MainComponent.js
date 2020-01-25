import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import FoodDrink from './FoodDrinkComponent';
import Games from './GamesComponent';
import Contact from './ContactComponent'
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CAROUSEL_ITEMS } from '../shared/carousel';
import { FOOD_DRINKS } from '../shared/foodDrink';
import { GAMES_OBJ } from '../shared/games';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carouselObjects: CAROUSEL_ITEMS,
            foodDrinkObj: FOOD_DRINKS,
            gamesObj: GAMES_OBJ
        }
    }
    render() {
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/home' render={() => 
                        <Home 
                            carouselObjects={this.state.carouselObjects} 
                            foodDrinkObj={this.state.foodDrinkObj} 
                            gamesObj={this.state.gamesObj} 
                        />} 
                    />
                    <Route path='/foodndrink' render={() => <FoodDrink foodDrinkObj={this.state.foodDrinkObj}/>} />
                    <Route path='/games' render={() => <Games gamesObj={this.state.gamesObj}/>} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );}
}

export default Main;