import React from "react";
import { Button, Card, Col, Container, ListGroup, Nav, Navbar, Row } from "react-bootstrap";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Instagram</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Create Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col xs="12" lg="6">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                />
                <Card.Body>
                  <Card.Title> Title</Card.Title>
                  <Card.Text>Notes</Card.Text>
                  <Button variant="primary">Ekle</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                />
                <Card.Body>
                  <Card.Title> Title</Card.Title>
                  <Card.Text>Notes</Card.Text>
                  <Button variant="primary">Ekle</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" lg="6">
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
