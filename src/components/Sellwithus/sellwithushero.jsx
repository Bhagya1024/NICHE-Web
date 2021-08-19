import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { Link } from '@reach/router'



const Hero = () => {
    return (
      <section id="sellhero" className="multi-bg-example">
        <Container>
          <Row className="hero-wrapper">
            <Col xs={12} sm={12} md={6} lg={6}>
              <Row className="hero-heading">
                <h2>
                NICHE online shopping store
                </h2>
                <h1>
                Your Brand , Your Way
                </h1>
                <div className="hero-wrapper__info">
                  <p className="hero-wrapper__info-text">
                    {
                      'Selling with your own virtual store has never been easier, faster and scalable'
                    }
                  </p>
                </div>
              </Row>
              <Row>
                <Col>
                  <button className="sellbtn">Sell with us</button>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="col-hero-wrapper__image">
              <div className="hero-wrapper__image">
                <img
                  alt=""
                  src={HeroImg}
                  className="hero-phone"
                />
              </div>
            </Col>
          </Row>
          <img alt="" src={Lot} width="50" height="50" className="bg-img" />
        </Container>
      </section>
    );
}

export default Hero