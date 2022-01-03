import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../Styles/index.css"
import {Link} from "react-router-dom"
import axios from "axios"
import SingleProduct from './SingleProduct';
// import about from "../Images/about.jpg"
const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [hasError, sethasError] = React.useState(false);

    const getData = () => {
        axios
            .get("http://localhost:4000/api/products/")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
                sethasError(true);
            });

    };

    React.useEffect(function () {
        console.log("Sending Ajax call");
        getData();
    }, []);
    return (
        <div>
            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center">
                        <h3 className="text-white crudHeader">Services We Offer</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="product-menu">
                <Row>
                    <Col xs={3} className="pro-menu-col ">
                    <Button as={Link} to="/products/create"variant="outline-danger" className="add-pr">Add Service</Button>{' '}
                    
                    </Col>
                    
                </Row>
            </Container>
            {products.length === 0 && !hasError && <p>Loading...</p>}
            {hasError && <p>Something Wrong Happened</p>}
            {products.map((p) => (
                <SingleProduct product={p} onDelete={getData}/>
                ))}
            

        </div>
    );
}

export default Products;