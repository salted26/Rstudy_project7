import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {Container, Row, Col} from "react-bootstrap";

const ProductAll = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/salted26/Rstudy_project8/products`;
        let response = await fetch(url)
        let data = await response.json()
        setProducts(data);
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <Container>
            <Row>
                {products?.map((item, index) => (
                    <Col lg={3} key={index} >
                        <ProductCard products={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductAll;
