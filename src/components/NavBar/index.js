import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

import Logo from "../../assets/images/sajha-logo.png";

const NavBar = () => {
  return (
    <>
      <section className="nav">
        <Container>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
            </Link>
            <div className="connect">
              <button className="connect__btn">Let’s Talk</button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavBar;
