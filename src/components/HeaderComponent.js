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
                    <div className="container nobg">
                        <div className="row nobg">
                            {/* <Media className="col-md-2 nobg">
                                <Media data-src="../../public/assets/images/logo2.png" alt="Game Bar Logo"/>
                            </Media> */}
                            <div className="col nobg">
                                <h1 className="nobg">Game Bar</h1>
                                <h2 className="nobg">come play with us!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar sticky="top" expand="md" className="nobg">
                    <div className="container nobg navBorder">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="../assets/images/logo2.png" height="30" width="30" alt="Game Bar Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/games">
                                        <i class="fa fa-gamepad fa-lg" /> Games
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/foodndrink">
                                        <i className="fa fa-coffee fa-lg" /> Food and Drinks
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
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


 