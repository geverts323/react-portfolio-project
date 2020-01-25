import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Modal, ModalBody, ModalHeader, Label, Form, FormGroup, Input } from 'reactstrap';

class Games extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                Is there a game you want to play? Is it not on our list?{' '}
                                <Button onClick={this.toggleModal} className="requestButton">Make a Request!</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Request a Game*</ModalHeader>
                    <ModalBody>
                        <Form model="requestForm" onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input type="text" id="name" name="name" innerRef={input => this.name = input} />
                            </FormGroup><FormGroup>
                                <Label htmlFor="category">Category</Label>
                                <Input placeholder="Type of Game"type="select" id="category" name="category" innerRef={input => this.category = input}>
                                    <option placeholder>Type of Game</option>
                                    <option>Board Game</option>
                                    <option>Card Game</option>
                                    <option>Guide Book</option>
                                    <option>Other Game Type</option>
                                    <option>Other Game Accessories</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Email</Label>
                                <Input type="email" id="email" name="email" innerRef={input => this.email = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit Request</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

export default Games;