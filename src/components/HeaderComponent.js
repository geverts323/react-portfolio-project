import React, { Component } from 'react';
import { Jumbotron, Media } from 'reactstrap';


class Header extends Component {

    render() {
        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container nobg">
                        <div className="row nobg">
                            <Media className="col-md-2 nobg">
                                <Media data-src="../../public/assets/images/logo2.png" alt="Game Bar Logo"/>
                            </Media>
                            <div className="col nobg">
                                <h1 className="nobg">Game Bar</h1>
                                <h2 className="nobg">come play with us!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;


 