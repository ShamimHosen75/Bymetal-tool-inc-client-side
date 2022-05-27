import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg from '../../../../images/banner-bg.jpg';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#D8E8EB',padding: '40px 0' }}>
            <Container>
                <Row className="g-2">
                    <Col className="d-flex  align-items-center" md={6}>
                        <div>
                            <h2>We Are Manufacturing Products with World Class</h2>
                            <p>Industry has consistently embraced innovation to provide a superior level of excellentce for all over valuable customers.</p>
                            <Link className="btn btn-dark" to="/explore">
                                Shop Now
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid rounded-2" src={bg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;