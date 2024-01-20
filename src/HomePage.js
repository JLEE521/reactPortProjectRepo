import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import React from 'react';
import paper6 from '../src/images/paperPeople/paper_6.jpg';
import swampFrog from '../src/images/swamp/swampFrog.JPG';
import charcoalWings from '../src/images/charcoal/charcoalWings.jpg';
import sbLibrary from '../src/images/sketchbook/sb_library.jpg';

const ImageCard = ({ imageUrl, title, to }) => (
    <Col md={4} className="mb-4">
      <Link to={to} className="text-decoration-none" style={{ cursor: 'pointer' }}>
        <Card style={{ maxWidth: '600px', margin: '50px' }}>
          <CardImg top width="100%" src={imageUrl} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );

 

const HomePage = () => {
    const imageData = [
        { imageUrl: paper6, title: '', to: '/paperPeople' },
        { imageUrl: swampFrog, title: '', to: '/page2' },
        { imageUrl: charcoalWings, title: '', to: '/page2' },
        { imageUrl: sbLibrary, title: '', to: '/page2' },
      ];

    return (
        <Container>
             <Row>
                {imageData.map((data, index) => (
                <ImageCard key={index} {...data} />
                ))}
            </Row>
        </Container>
    );
};

export default HomePage;