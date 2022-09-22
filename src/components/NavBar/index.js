import { Container } from 'react-bootstrap';
import React from 'react';

import Logo from '../../assets/images/sajha-logo.png';

const NavBar = () => {
  return (
    <>
      <section className='nav'>
        <Container>
          <div className='d-flex justify-content-between'>
            <a href='#home'>
              <div className='logo'>
                <img src={Logo} alt='logo' className='img-fluid' />
              </div>
            </a>
            <div className='connect'>
              <a href='#newsletter'>
                <button className='connect__btn'>Let’s Talk</button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavBar;
