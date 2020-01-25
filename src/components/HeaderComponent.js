import React, { Component } from 'react';
import { Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);

        this.togleNav =this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Game Bar</h1>
                                <h2>come play with us!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md" className="navBarStyle">
                    <div className="container navBorder">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="../assets/images/logo2.png" height="30" width="30" alt="Game Bar Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="navToggler"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link myGreen" to="/home">
                                        <i className="fa fa-home fa-lg myGreen" /><span className="myGreen">Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link myGreen" to="/games">
                                        <i className="fa fa-gamepad fa-lg myGreen" /><span className="myGreen">Games</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link myGreen" to="/foodndrink">
                                        <i className="fa fa-coffee fa-lg myGreen" /><span className="myGreen">Food and Drinks</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link myGreen" to="/contactus">
                                        <i className="fa fa-address-card fa-lg myGreen" /><span className="myGreen">Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;


 