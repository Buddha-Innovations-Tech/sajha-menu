import { Col, Row, Container, Form, Modal } from 'react-bootstrap';

import { ImCross } from 'react-icons/im';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import Modal from "react-bootstrap/Modal";
import React, { useState } from 'react';

import Slide from 'react-reveal/Slide';

import AccordinComp from '../../components/AccordinComp';
import InputForm from '../../components/InputForm';
import WhyCard from '../../components/WhyCard';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import Illustration from '../../assets/images/illustration.png';
import sajha from '../../assets/images/sajha-menu.png';
import qrcode from '../../assets/images/qrcode.jpg';
import line from '../../assets/images/line.png';
import demo from '../../assets/images/demo.gif';
import CustomerVideo from '../../assets/images/Customer View.mp4';
import WaiterVideo from '../../assets/images/Waiter View.mp4';

// why-section images
import productivity from '../../assets/images/Productivity.png';
import contactless from '../../assets/images/contactless.png';
import order from '../../assets/images/order.png';
import noapp from '../../assets/images/noapp.png';
import fast from '../../assets/images/fast.png';
import care from '../../assets/images/care.png';

// where-section images
import one from '../../assets/images/1.png';
import two from '../../assets/images/2.png';
import three from '../../assets/images/3.png';
import four from '../../assets/images/4.png';
import five from '../../assets/images/5.png';

// trusted-section images
import darkwood from '../../assets/images/image-darkwood.png';
// import daddys from "../../assets/images/image-daddys.png";
// import durbar from "../../assets/images/image-concept.png";
// import maharaja from "../../assets/images/image-mahaaraja.png";
// import kkfc from "../../assets/images/image-kkfc.png";
import pauwa from '../../assets/images/image-pauwa.png';
import concept from '../../assets/images/image-ovenfresh.png';
import Fourseasons from '../../assets/images/fourseasons.png';
import Diamond from '../../assets/images/diamond.png';
import Vastukri from '../../assets/images/vastukri.png';
import NinetyFour from '../../assets/images/NinetyFour.png';
import Garden from '../../assets/images/Garden.jpg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const register = () => {
    document.getElementById('one').style.display = 'none';
    document.getElementById('two').style.display = 'block';
  };

  const closeForm = () => {
    document.getElementById('two').style.display = 'none';
    document.getElementById('one').style.display = 'block';
  };

  return (
    <>
      <section className='home' id='home'>
        {/* navbar */}
        <NavBar />

        {/* hero section */}
        <section className='hero'>
          <Container>
            <Row>
              <Col lg={7}>
                <div className='hero__content'>
                  <Slide left>
                    <div className='hero__content--heading'>
                      <h1>
                        {/* <img
                        src={acb}
                        alt="hero__bg-image"
                        className="img-fluid imgg"
                      /> */}
                        <div className='bg'>
                          <span className='text-white'> Scan </span>
                          QR Code, View Menu
                          <span className='text-white'> and </span>
                          Place Order
                          <span className='text-white'>
                            {' '}
                            From Your Mobile.{' '}
                          </span>
                        </div>
                      </h1>
                    </div>
                    <div className='hero__content--para'>
                      <img
                        src={line}
                        alt='hero__bg-image'
                        className='img-fluid line'
                      />
                      <p>
                        Setup your menu, View your sales stats, and grow your
                        business with our touchless QR based food ordering
                        solution SAJHA MENU.
                      </p>
                    </div>

                    <div className='hero__content--buttons'>
                      {/* <button
                        className='hero__content--buttons-register'
                        onClick={handleShow}
                      >
                        Register Now
                      </button> */}
                      <button
                        className='bton bton--primary bton--md'
                        onClick={handleShow}
                      >
                        Register Now
                      </button>
                      <a href='#watch-video'>
                        <button className='bton bton--ghost bton--md ms-1 ms-sm-2  mt-sm-0 mt-2 '>
                          Watch Video
                        </button>
                        {/* <button className='hero__content--buttons-watch'>
                          Watch Video
                        </button> */}
                      </a>
                    </div>
                  </Slide>
                </div>
              </Col>
              <Col lg={5}></Col>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className='register-form'>
                    <div className='d-flex justify-content-between'>
                      <h2>Register To Get QR Code Menu.</h2>
                      <ImCross onClick={handleClose} className='icon' />
                    </div>
                    <p>
                      Fill out the form to register and our team will contact
                      you.
                    </p>
                    <Form>
                      <div className='mx-20'>
                        <InputForm
                          label='Name'
                          type='text'
                          placeholder='Enter Your Full Name'
                          name='name'
                          asteric='*'
                          required
                        />
                      </div>
                      <div className='mx-20'>
                        <InputForm
                          label='Email'
                          type='email'
                          placeholder='Enter Your Email Address(Optional)'
                          name='email'
                        />
                      </div>

                      {/* business type */}
                      <div className=' d-lg-flex justify-content-between'>
                        <div
                          style={{ width: '48%' }}
                          className='select-small mx-20'
                        >
                          <Form.Label>Business Type</Form.Label>
                          <div className='custom-select'>
                            <select>
                              <option selected>Select Business </option>
                              <option value='1'>Restaurant</option>
                              <option value='2'>Bakery</option>
                              <option value='3'>Hotel</option>
                              <option value='4'>Cafe</option>
                            </select>
                          </div>
                        </div>
                        <div
                          style={{ width: '50%' }}
                          className='select-small mx-20'
                        >
                          <InputForm
                            label='Phone Number'
                            type='text'
                            placeholder='Enter Your Phone Number'
                            name='mobilenumber'
                            asteric='*'
                            required
                          />
                        </div>
                      </div>

                      <div className='mx-20'>
                        <InputForm
                          label='Company Name'
                          type='text'
                          placeholder='Enter Your Company Name'
                          name='company'
                          asteric='*'
                          required
                        />
                      </div>

                      {/* <div className="mx-20">
                    <InputForm
                      label="Phone Number"
                      type="number"
                      placeholder="Enter Your Phone Number"
                      name="mobilenumber"
                      asteric="*"
                      required
                    />
                  </div> */}

                      <button className='submit'>Submit</button>
                    </Form>
                  </div>
                </Modal.Body>
              </Modal>
            </Row>
            <Slide right>
              <div className='hero__illustration' id='one'>
                <img
                  src={Illustration}
                  alt='illustration'
                  className='img-fluid illustration'
                />
              </div>
            </Slide>

            {/* register-form */}
          </Container>
        </section>

        {/*how-it-works section*/}
        <section className='how-it-works' id='watch-video'>
          <div className='how-it-works__heading '>
            <h2>How Does Sajha Menu Work ?</h2>
            <p>
              {/* Its simple as 1-2-3. The client comes, scans his mobile to see
              your menu and the staff takes the order. No POS or Payment
              gateways integration required.  */}
              Sajha Menu Working Principle is as simple as 1-2-3.
              <ol className='how_sajamenu_works '>
                <li>
                  When a client arrives to your restaurants, he/she scan the QR
                  menu displayed on table.
                </li>
                <li>
                  Restaurant menu will be displayed on his/her mobiles & start
                  to order Food.
                </li>
                <li>
                  Restaurant staff will confirm the order & in a while your
                  order will be on your table.
                </li>
              </ol>
            </p>
          </div>

          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className='how-it-works__procedure'>
                <Row>
                  <Col lg={6}>
                    <div className='how-it-works__procedure-box p-52'>
                      <div className='qr-code'>
                        {/* <Link to="/download"> */}
                        <div className='title'>Try Sajha Menu</div>
                        <div className='image'>
                          <img
                            src={qrcode}
                            alt='qr-code'
                            className='img-fluid'
                          />
                        </div>
                        {/* </Link> */}
                      </div>
                      <div className='content pt-24'>
                        Scan QR code from your phone to see a <br />
                        demo of our Sajha Menu.
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className='how-it-works__procedure-box box-2 p-52 p-52-small'>
                      <div className='qr-code demos'>
                        <div className='title'>
                          <div className='user'>User Phone</div>
                          <div className='waiter'>Waiter Phone</div>
                        </div>
                        <div className='image'>
                          <div className='user-demo'>
                            {/* <img
                              src={demo}
                              alt="user-demo"
                              className="img-fluid"
                            /> */}
                            <video
                              src={CustomerVideo}
                              width='110'
                              height='240'
                              autoPlay={true}
                              controls={false}
                              muted
                            >
                              <source src={CustomerVideo} type='video/mp4' />
                            </video>
                          </div>
                          <div className='waiter-demo'>
                            {/* <img
                              src={demo}
                              alt="waiter-demo"
                              className="img-fluid"
                            /> */}
                            <video
                              src={WaiterVideo}
                              width='110'
                              height='240'
                              autoPlay={true}
                              controls={false}
                              muted
                            >
                              <source src={CustomerVideo} type='video/mp4' />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className='content pt-24'>
                        Sample video demonstration. <br />
                        How Sajha Menu works for your business.
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </section>

        {/* why-choose section */}
        <section className='why-choose'>
          <div className='why-choose__heading'>
            <h2>Why Choose Sajha Menu ?</h2>
            <p>
              Our customers must have the best ordering experience in our
              restaurants. Sometimes Customers may get annoyed as they don't get
              enough time to explore the menu by the waiter. What if they scan a
              QR to explore the menu and Order at the same time. Yes! Sajha Menu
              is a QR ordering solution for restaurants, cafes, bars, hotels,
              and bakeries. View your sales stats and make strategies for your
              Business Growth
            </p>
          </div>

          <Row className='why-choose__images'>
            <Col lg={2}></Col>
            <Col lg={8}>
              <Row className='gx-5'>
                {/* <Fade left> */}
                <Col lg={8}>
                  <Row className='gy-5'>
                    <Col md={4} className='mr-3'>
                      <WhyCard
                        imageSource={contactless}
                        content='Contactless Ordering'
                      />
                    </Col>

                    <Col md={4} className='mr-3'>
                      <WhyCard imageSource={noapp} content='No App Required' />
                    </Col>

                    <Col md={4} className='mr-3'>
                      <WhyCard
                        imageSource={fast}
                        content='Faster Table Turnover'
                      />
                    </Col>

                    <Col md={4} className='mr-3 mt-3'>
                      <WhyCard
                        imageSource={order}
                        content='Better Order Accuracy'
                      />
                    </Col>
                    <Col md={4} className='mr-3 mt-3'>
                      <WhyCard
                        imageSource={productivity}
                        content='Boost Staff Productivity'
                      />
                    </Col>
                    <Col md={4} className='mr-3 mt-3'>
                      <WhyCard
                        imageSource={care}
                        content='Keeps Customer Safe'
                      />
                    </Col>
                  </Row>
                </Col>
                {/* </Fade> */}

                <Col lg={4} className='why-image'>
                  <img
                    src={sajha}
                    style={{ height: '283px', maxWidth: '315px' }}
                    alt='why-choose-sajha-menu'
                    className='img-fluid'
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </section>

        {/* three sections - where, trusted-by, faqs */}
        <div className='common'>
          {/* where */}

          <section className='where'>
            <div className='where__heading'>
              <h2>Where Sajha Menu Can Be Applied ?</h2>
              <p>
                Contactless QR code menus are in high demand in the Hotel,
                Restaurant, Café, and Bar industry. Our QR code ordering
                Solution Sajha Menu is going to be beneficial for these fields.
              </p>
            </div>

            <div className='container'>
              <div className='where__images where--image--large'>
                {/* <Fade left> */}
                <div className='image__wrapper'>
                  <img src={one} alt='one' className='img-fluid where-img' />
                  <div className='overlap'> Hotel</div>
                </div>
                <div className='image__wrapper'>
                  <img src={two} alt='one' className='img-fluid where-img' />
                  <div className='overlap'>Cafe</div>
                </div>
                {/* </Fade> */}
                <div className='image__wrapper'>
                  <img src={three} alt='one' className='img-fluid where-img' />
                  <div className='overlap'>Restaurant</div>
                </div>
                {/* <Fade right> */}
                <div className='image__wrapper'>
                  <img
                    src={four}
                    alt='one'
                    className='img-fluid where-img'
                    // style={{ height: "509px" }}
                  />
                  {/* <img src={one} alt="one" className="img-fluid where-img" /> */}
                  <div className='overlap'>Lounge</div>
                </div>
                <div className='image__wrapper'>
                  <img src={five} alt='one' className='img-fluid where-img' />
                  <div className='overlap'>Bar</div>
                </div>
                {/* </Fade> */}
              </div>
            </div>

            <div className='where--image--small'>
              <Slider {...settings}>
                <div className='image__wrapper where-img-small-wrapper'>
                  <img
                    src={one}
                    alt='one'
                    className='img-fluid  where-img-small'
                  />
                  <div className=' where-img-small-overlay'> Hotel</div>
                </div>
                <div className='image__wrapper where-img-small-wrapper '>
                  <img
                    src={two}
                    alt='one'
                    className='img-fluid  where-img-small'
                  />
                  <div className=' where-img-small-overlay'>Cafe</div>
                </div>

                <div className='image__wrapper where-img-small-wrapper'>
                  <img
                    src={three}
                    alt='one'
                    className='img-fluid where-img where-img-small'
                  />
                  <div className=' where-img-small-overlay'>Restaurant</div>
                </div>

                <div className='image__wrapper where-img-small-wrapper'>
                  <img
                    src={four}
                    alt='one'
                    className='img-fluid where-img where-img-small'
                  />
                  {/* <img src={one} alt="one" className="img-fluid where-img" /> */}
                  <div className=' where-img-small-overlay'>Lounge</div>
                </div>
                <div className='image__wrapper where-img-small-wrapper'>
                  <img
                    src={five}
                    alt='one'
                    className='img-fluid where-img where-img-small'
                  />
                  <div className=' where-img-small-overlay'>Bar</div>
                </div>
              </Slider>
            </div>
          </section>

          {/* trusted-by */}
          {/* <section className="trusted-by">
            <div className="container">
              <div className="trusted-by__heading">
                <h2>Trusted by </h2>
              </div>

              <div className="trusted-by__images">
               
                <Row className="justify-content-center align-items-center">
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={Garden}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={NinetyFour}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={pauwa}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={Vastukri}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                </Row>
               
                <Row className="justify-content-center align-items-center">
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={Diamond}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={Fourseasons}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={concept}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                  <Col lg={3} xs={6} className="mb-4 p-0">
                    <img
                      src={darkwood}
                      alt="one"
                      className="img-fluid trusted-img"
                    />
                  </Col>
                </Row>
               
              </div>
            </div>
          </section> */}

          {/* faq */}
          <div className='container'>
            <section className='faq'>
              <div className='faq__heading'>
                <h2>Frequently Asked Questions</h2>
              </div>

              <div className='faq__qna'>
                <Slide bottom>
                  <AccordinComp
                    header='1.What is the Sajha menu?'
                    body='Sajha Menu is a quick  QR Code based food Ordering System that can be managed by a restaurant owner by generating a scannable QR code  menu on the tables. This allows their customers to scan the QR code, browse the restaurant’s menu and order their desired items from their smartphones.'
                  />
                </Slide>

                <Slide bottom>
                  <AccordinComp
                    header='2. How to create a QR code menu?'
                    body='An Admin Application is provided to a restaurant owner where they can create QR code menus for their restaurant.'
                  />
                </Slide>

                <Slide bottom>
                  <AccordinComp
                    header='3.How Sajha Menu works ?'
                    body='A customer scans the QR code placed on the table, after which they browse the menu and place an order for the desired items. A waiter receives and confirms the orders in Waiter’s application and finally prints the order in the kitchen printer. Lastly, the delicious food is served on the table based on the same print from the waiter. '
                  />
                </Slide>

                <Slide bottom>
                  <AccordinComp
                    header='4.How to  setup QR code menu?'
                    body='	The manager is given an app namely  “ manager application “ with which all items on the menu can be set up and managed in a real-time manner. Furthermore after setting up the menu QR code is generated for all the tables from the same application.'
                  />
                </Slide>

                <Slide bottom>
                  <AccordinComp
                    header='5.What are the device requirements to use Sajha Menu?'
                    body='All  smart phones can be used for scanning a QR code by the customers. However, two mobile applications are provided by the company, one is manager application and another is waiter application for  managing menu and orders. '
                  />
                </Slide>
                <Slide bottom>
                  <AccordinComp
                    header='5.Why is a digital menu better than a paper menu?'
                    body='First thing first, this menu is paperless and turns out to be an economical solution for a long term usage. A digital menu is always updateable and scalable. It also radiates the modern vibes and makes a restaurant technology friendly. Also, customers  are given enough freedom and time to explore the menu and place their orders.'
                  />
                </Slide>
                <Slide bottom>
                  <AccordinComp
                    header='6.How a customer orders from Sajha Menu?'
                    body='The customer visits the restaurant, scans the QR code from his phone, explores the menu & places an order. '
                  />
                </Slide>
              </div>
            </section>
          </div>
        </div>

        {/*  newsletter-section*/}
        <section className='newsletter' id='newsletter'>
          <div className='container'>
            <div className='newsletter__wrapper'>
              <Row className='newsletter__wrapper-both'>
                <Col
                  lg={6}
                  md={{ order: 'last' }}
                  sm={{ order: 'last' }}
                  xs={{ order: 'last' }}
                  className='newsletter__wrapper-left'
                >
                  <div className='newsletter__wrapper-box'>
                    <div className='newsletter__wrapper-box-inner'>
                      <img
                        src={demo}
                        style={{ height: '284px' }}
                        alt='user-demo'
                        className='img-fluid demo'
                      />
                    </div>
                  </div>
                </Col>

                <Col
                  lg={6}
                  md={{ order: 'first' }}
                  sm={{ order: 'first' }}
                  xs={{ order: 'first' }}
                  className='newsletter__wrapper-right'
                >
                  <div className='newsletter__wrapper-form'>
                    <h2>Contact Us</h2>
                    <p>Fill out the form and our team will contact you.</p>
                    <Form>
                      <div className='mx-20'>
                        <InputForm
                          label='Name'
                          type='text'
                          placeholder='Full Name'
                          name='name'
                          asteric='*'
                          required
                        />
                      </div>
                      <div className='mx-20'>
                        <InputForm
                          label='Phone Number'
                          type='number'
                          placeholder=' Phone Number'
                          name='mobilenumber'
                          asteric='*'
                          required
                        />
                      </div>
                      <div className='mx-20'>
                        <InputForm
                          label='Email Address'
                          type='email'
                          placeholder='Email Address (Optional)'
                          name='email'
                        />
                      </div>
                      <div className='mx-20'>
                        {/* <InputForm
                          label="Message"
                          type="textarea"
                          placeholder="Your Message Here"
                          name="msg"
                          row={3}
                          asteric="*"
                          required
                        /> */}
                        <Form.Group
                          className='mb-3'
                          controlId='exampleForm.ControlTextarea1'
                        >
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder='Message'
                          />
                        </Form.Group>
                      </div>
                      <button className='submit'>Submit</button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* footer section */}
        <Footer />
      </section>
    </>
  );
};

export default Home;
