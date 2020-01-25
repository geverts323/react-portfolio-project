import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container, Table } from 'reactstrap';
import classnames from 'classnames';

function FoodDrink({foodDrinkObj}) {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return(
        <Container>
            <Row>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Drinks
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Food
                        </NavLink>
                    </NavItem>
                </Nav>
            </Row>
            <Row>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Ingredients</th>
                                        <th>Price</th>
                                    </tr>                                    
                                </thead>
                                <tbody>
                                    {
                                        foodDrinkObj.drinks.map(drink => {
                                            return (
                                                <tr>
                                                    <td>{drink.name}</td>
                                                    <td>{drink.ingredients}</td>
                                                    <td>{drink.price}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ingredients</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            foodDrinkObj.food.map(item => {
                                                return (
                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>{item.ingredients}</td>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Row>
        </Container>     
    );
}

export default FoodDrink;