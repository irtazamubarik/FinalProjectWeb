import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import "../Styles/index.css"
import { Link } from "react-router-dom"
import axios from 'axios';
const SingleProduct = (props) => {

    let product = props.product;

    return (
        <div className="container-fluid">
            <Container>
                <Row className="row">
                <Col className="pro-col col-12 col-6 d-flex justify-content-center">
        <Card style={{ width: '20rem', margin: '18px' }}>
            <Card.Body>
                <Card.Title style={{ color: 'black'}} className="text-center ">{product.name}</Card.Title>
                <Card.Title style={{ color: 'black'}} className="text-center">{product.charges}</Card.Title>
                <Card.Title style={{ color: 'black'}} className="text-center font-weight-underline ">
                {product.description}
                </Card.Title>
                <div className="text-center">
                <Button className=" pr-btn"as={Link} to={"/products/edit/"+ product._id} variant="outline-danger">Edit Service</Button>
                                <Button className="mx-1 pr-btn" variant="outline-danger" onClick={() => {
                                    axios.delete("http://localhost:4000/api/products/" + product._id).then((res)=>{
                                        console.log("deleted");
                                        props.onDelete();
                                    })
                                }}>Delete Service</Button>
                                </div>
            </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default SingleProduct;