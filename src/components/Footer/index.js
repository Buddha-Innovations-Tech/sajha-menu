import { Col, Container, Row } from 'react-bootstrap';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
// import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <Container>
          <Row className='footer-one'>
            <Col
              lg={4}
              xl={4}
              xxl={4}
              className='footer__blocks footer__blocks--about'
            >
              <h5 className='footer__blocks--header mb-30'>About Sajha Menu</h5>
              <p className='footer__blocks--content'>
                Sajha Menu has one primary objective that is to upsell your food
                by presenting it in the best way possible. Its simplistic, easy
                to use, interface creates a fluid experience that keeps your
                guests engaged and ordering more .
              </p>
            </Col>
            <Col
              lg={3}
              xl={3}
              xxl={3}
              className='footer__blocks footer__blocks--quick-links second-footer'
            >
              <h5 className='footer__blocks--header mb-30'>Quick Links </h5>
              <ul className='clearfix footer__blocks--content'>
                <li className='mb-10'>
                  <a href='#poplicy'>Support</a>
                </li>
                <li className='mb-10'>
                  <a href='#terms'>Privacy Policy</a>
                </li>
                <li className='mb-10'>
                  <a href='#privacy'>Terms and Conditions </a>
                </li>
              </ul>
            </Col>
            <Col
              lg={3}
              xl={3}
              xxl={3}
              className='footer__blocks footer__blocks--contact'
            >
              <h5 className='footer__blocks--header mb-30'>
                Contact Information
              </h5>

              <ul className='clearfix footer__blocks--content'>
                <li className='mb-20'>
                  <FaPhoneAlt className='icon mr-13' />
                  071438471
                </li>
                <li className='mb-20'>
                  <FaEnvelope className='icon mr-13' />
                  support@tunatechnology.com{' '}
                </li>
                <li className='mb-20'>
                  <FaMapMarkerAlt className='icon mr-13' />
                  {/* Yogikuti 3, */}
                  Yogikuti,Rupandehi, Nepal
                </li>
              </ul>
            </Col>
            <Col
              lg={2}
              xl={2}
              xxl={2}
              className='footer__blocks footer__blocks--social-media '
            >
              <h5 className='footer__blocks--header mb-30'>Social Media</h5>
              {/* <p className="footer__blocks--content"> */}
              <a href='https://www.facebook.com/sajhamenu'>
                <FaFacebook className='icon fbicon' />
              </a>
              <a href='https://twitter.com/sajhamenu'>
                <AiFillTwitterCircle className='icon ' />
              </a>
              <a href='https://www.instagram.com/sajhamenu'>
                <AiFillInstagram className='icon ' />
              </a>

              {/* </p> */}
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className='footer__bottom'>
                <div className='footer__bottom--center'>
                  <span>
                    Copyright © Sajha Menu {new Date().getFullYear()} All Right
                    Reserved.
                  </span>
                  <p>Powered By Tuna Technology.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
