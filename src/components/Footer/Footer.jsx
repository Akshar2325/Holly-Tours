import React from "react";
import "./Footer.css";

import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const quick__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing elit.
              </p>

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-fill"></i>
                  </a>
                </span>
                <span>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((items, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={items.path}>{items.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((items, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={items.path}>{items.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex flex-column flex-md-row align-items-md-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h6 className="mb-0">Email:</h6>
                </div>
                <p className="mb-0">
                  <a href="mailto:aksharbhesaniya@gmail.com" className="color-text">aksharbhesnaiya@gmail.com</a>
                </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex flex-column flex-md-row align-items-md-center gap-3">
                <div className="d-flex align-items-center gap-2 ">
                  <span className="text-warning">
                    <i className="ri-phone-fill"></i>
                  </span>
                  <h6 className="mb-0">Phone:</h6>
                </div>
                <p className="mb-0">
                  <a href="tel:9876543210">+91 6353331705</a>
                </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex flex-column flex-md-row align-items-md-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <span className="text-warning">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h6 className="mb-0">Address:</h6>
                </div>
                <p className="mb-0">Ankleshwar, Gujarat, India</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              &copy; {year} Travel World. All Rights Reserved.
              Designed and Developed By{" "}
              <a href="https://www.linkedin.com/in/akshar-bhesaniya/" target="_blank" rel="noopener noreferrer">Akshar</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
