import { Col, Container, Row } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-one">
            <Col lg={3} className="footer__blocks footer__blocks--about">
              <h5 className="footer__blocks--header mb-30">About Sajha Menu</h5>
              <p className="footer__blocks--content">
                Sajha Menu has one primary objective that is to upsell your food
                by presenting it in the best way possible. Its simplistic, easy
                to use, interface creates a fluid experience that keeps your
                guests engaged and ordering more .
              </p>
            </Col>
            <Col lg={3} className="footer__blocks footer__blocks--quick-links">
              <h5 className="footer__blocks--header mb-30">Quick Links </h5>
              <ul className="clearfix footer__blocks--content">
                <li className="mb-10">
                  <a href="#poplicy">Support</a>
                </li>
                <li className="mb-10">
                  <a href="#terms">Privacy Policy</a>
                </li>
                <li className="mb-10">
                  <a href="#privacy">Terms and Conditions </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} className="footer__blocks footer__blocks--contact">
              <h5 className="footer__blocks--header mb-30">
                Contact Information
              </h5>

              <ul className="clearfix footer__blocks--content">
                <li className="mb-20">
                  <FaPhoneAlt className="icon mr-13" />
                  9812345678
                </li>
                <li className="mb-20">
                  <FaEnvelope className="icon mr-13" />
                  sajhamenu@gmail.com
                </li>
                <li className="mb-20">
                  <FaMapMarkerAlt className="icon mr-13" />
                  Yogikuti 3, Rupandehi, Nepal
                </li>
              </ul>
            </Col>
            <Col lg={2} className="footer__blocks footer__blocks--social-media">
              <h5 className="footer__blocks--header mb-30">Social Media</h5>
              <p className="footer__blocks--content">
                <FaFacebook className="icon mr-13" />
                <AiFillTwitterCircle className="icon mr-13" />
                <AiFillGoogleCircle className="icon" />
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <div className="footer__bottom">
                <div className="footer__bottom--center">
                  <span>Copyright © Sajha Menu 2022. All Right Reserved.</span>
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
