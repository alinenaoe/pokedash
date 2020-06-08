import React from 'react';
import { Card, Col } from 'react-bootstrap';

const PokeCard = ({ data }) => {
  
    return (
        <>
        <Col lg={3} key={ data.name}>
            <Card className="mb-4" >
            <Card.Img variant="top" src={ data.sprites.front_default}/>
            <Card.Body>
                <Card.Title key={ data.name}>{  data.name }</Card.Title>
            </Card.Body>
            </Card>
        </Col>
        </>
    )
  };
  
export default PokeCard;