import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Lot from '../../images/lot1.png';
import HeroImg from '../../images/hero-phone.png';
import PlayStore from '../../images/playstore.png';
import AppStore from '../../images/appstore.svg';
import { StaticImage } from 'gatsby-plugin-image';
import CEO from '../../images/ceo.png';

const Hero = () => {
    return (
      <section id="aboutus-whoweare-l" className="multi-bg-example">
      <Container fluid className="bio">
     <div className="section-info-div">
        <Row className="bio-row">
        
             <Col sm={12} md={8} lg={8} className="bio-ceo" >
              <Row className="bio-name">
               <h3>Ms.Serena Williams</h3>
              </Row>
              <Row className="bio-position">
              <h4>Cofounder and CEO</h4>
             </Row>
             <Row className="bio-desc">
             <p className="bio-para">Niche Is Designed To Build The Robust Relationship Between Truly Talented Sri Lankan Fashion Artists Aspiring To Build Their Own Brand And Expand It To Other Horizons.</p>
             </Row>  
             </Col>
             <Col sm={12} md={4} lg={4}>
               
                      <img alt="" src={CEO} className="ceo-image"/>
                 
             </Col>
        </Row>
              
        </div>
      </Container>
     
    </section>
)
}

export default Hero