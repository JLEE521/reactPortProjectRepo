import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import React from 'react';
import paper6 from '../src/images/paperPeople/paper_6.jpg';

const ImageCard = ({ imageUrl, title, to }) => (
    <Col md={4} className="mb-4">
      <Link to={to}>
        <Card>
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
        { imageUrl: paper6, title: 'Paper People', to: '/page1' },
        { imageUrl: '', title: 'Swamp', to: '/page2' },
        { imageUrl: '', title: 'Charcaol Drawings', to: '/page2' },
        { imageUrl: '', title: 'Sketchbook Drawings', to: '/page2' },
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