import React, { Component, useState } from 'react';
import { Container, Row, Col, Card, CardImg, CardImgOverlay, CardTitle, Collapse, CardBody } from 'reactstrap';
import CarouselComponent from './CarouselComponent';


function RenderFeatItem({ featuredItem, homeDescription }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <React.Fragment>
            <Card className="featFoodDrinkCard" onClick={toggle}>
                <CardImg width="100%" src={featuredItem.image} alt={featuredItem.name} />
                <CardImgOverlay>
                    <CardTitle className="homeCardTitle">{featuredItem.name}</CardTitle>
                </CardImgOverlay>
            </Card>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        {homeDescription}
                    </CardBody>
                </Card>
            </Collapse>
        </React.Fragment>
    );
}


class Home extends Component {


    render() {
        console.log(this.props);
        return (
            <Container>
                <Row className="carouselRow">
                    <CarouselComponent carouselObjects={this.props.carouselObjects} />
                </Row>
                <hr />
                <Row className="featFoodDrinkRow">
                    <Col>
                        <RenderFeatItem 
                            featuredItem={this.props.foodDrinkObj.food.filter(item => item.featured)[0]}
                            homeDescription={this.props.foodDrinkObj.homeDescriptions.food}
                        />
                    </Col>
                    <Col>
                        <RenderFeatItem 
                            featuredItem={this.props.foodDrinkObj.drinks.filter(item => item.featured)[0]}
                            homeDescription={this.props.foodDrinkObj.homeDescriptions.drinks}
                        />
                    </Col>

                </Row>
                <hr/>
                <Row className="featuredGamesRow">
                    <Col xs="12">
                        <h3 className="myGreen">Featured Games</h3>
                    </Col>
                    <Col xs="4">
                        <RenderFeatItem
                            featuredItem={this.props.gamesObj.filter(item => item.featured)[0]}
                            homeDescription={this.props.gamesObj.filter(item => item.featured)[0].description}
                        />
                    </Col>
                    <Col xs="4">
                        <RenderFeatItem
                            featuredItem={this.props.gamesObj.filter(item => item.featured)[1]}
                            homeDescription={this.props.gamesObj.filter(item => item.featured)[1].description}
                        />
                    </Col>
                    <Col xs="4">
                        <RenderFeatItem
                            featuredItem={this.props.gamesObj.filter(item => item.featured)[2]}
                            homeDescription={this.props.gamesObj.filter(item => item.featured)[2].description}
                        />
                    </Col>
                    

                </Row>
            </Container>
            );
        }
    }
    
export default Home;