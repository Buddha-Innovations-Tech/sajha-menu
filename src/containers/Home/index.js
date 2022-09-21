import { Col, Row, Container, Form } from 'react-bootstrap';
import { ImCross } from 'react-icons/im';
// import Modal from "react-bootstrap/Modal";
import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import AccordinComp from '../../components/AccordinComp';
import InputForm from '../../components/InputForm';
import WhyCard from '../../components/WhyCard';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import Illustration from '../../assets/images/illustration.png';
import sajha from '../../assets/images/sajha-menu.png';
import qrcode from '../../assets/images/qrcode.png';
import line from '../../assets/images/line.png';
import demo from '../../assets/images/demo.gif';

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
import daddys from '../../assets/images/image-daddys.png';
import durbar from '../../assets/images/image-concept.png';
import maharaja from '../../assets/images/image-mahaaraja.png';
import kkfc from '../../assets/images/image-kkfc.png';
import pauwa from '../../assets/images/image-pauwa.png';
import concept from '../../assets/images/image-ovenfresh.png';
import ovenfresh from '../../assets/images/image-lavish.png';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
      <section className='home'>
        {/* navbar */}
        <NavBar />

        {/* hero section */}
        <section className='hero'>
          <Container>
            <Row>
              <Col lg={6}>
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
                        Grow Your Restaurant Business Using Our Sajha Menu that{' '}
                        <br />
                        connects your customers Touchless and keeps everyone{' '}
                        <br />
                        safe in this pandemic situation.
                      </p>
                    </div>

                    <div className='hero__content--buttons'>
                      <button
                        className='hero__content--buttons-register'
                        onClick={register}
                      >
                        Register Now
                      </button>
                      <a href='#watch-video'>
                        <button className='hero__content--buttons-watch'>
                          Watch Video
                        </button>
                      </a>
                    </div>
                  </Slide>
                </div>
              </Col>
              <Col lg={6}></Col>
            </Row>
            <Slide right>
              <div className='hero__illustration' id='one'>
                <img
                  src={Illustration}
                  alt='illustration'
                  className='img-fluid'
                />
              </div>
            </Slide>

            {/* register-form */}
            <Fade right>
              <div
                className='register-form'
                id='two'
                style={{ display: 'none' }}
              >
                <div className='d-flex justify-content-between'>
                  <h2>Register To Get QR Code Menu.</h2>
                  <ImCross onClick={closeForm} className='icon' />
                </div>
                <p>
                  Fill out the form to register and our team will contact you.
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

                  <div className='mx-20  '>
                    <Row>
                      <Col md={6} sm={12}>
                        <div>
                          <Form.Label>Business Type</Form.Label>
                          <div className='custom-select'>
                            <select>
                              <option value='0'>Select </option>
                              <option value='1'>Restaurant</option>
                              <option value='2'>cafe</option>
                              <option value='3'>Hotel</option>
                              <option value='4'>Bakery</option>
                            </select>
                          </div>
                        </div>
                      </Col>
                      <Col md={6} sm={12}>
                        <div>
                          <InputForm
                            label='Phone Number'
                            type='text'
                            placeholder='Enter Your Phone Number'
                            name='mobilenumber'
                            asteric='*'
                            required
                          />
                        </div>
                      </Col>
                    </Row>
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
            </Fade>
          </Container>
        </section>

        {/*how-it-works section*/}
        <section className='how-it-works' id='watch-video'>
          <div className='how-it-works__heading'>
            <h2>How Does Sajha Menu Work ?</h2>
            <p className='howpara'>
              QR codes on the restaurant tables are scanned by a customer. After
              that the restaurant’s menu can be browsed is customers phone from
              where they can order any food item they like. The waiter gets the
              notification on his/her tab and confirms the order. Finally the
              order is printerd in the kitchen and served to the customer. Quick
              and Easy !!
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
                        <Link to='/download'>
                          <div className='title'>Try Sajha Menu</div>
                          <div className='image'>
                            <img
                              src={qrcode}
                              alt='qr-code'
                              className='img-fluid'
                            />
                          </div>
                        </Link>
                      </div>
                      <div className='content pt-24'>
                        Scan QR code from your phone to see a <br />
                        demo of our Sajha Menu.
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className='how-it-works__procedure-box box-2 p-52'>
                      <div className='qr-code demos'>
                        <div className='title'>
                          <div className='user'>Customer's Phone</div>
                          <div className='waiter'>Waiter Phone</div>
                        </div>
                        <div className='image'>
                          <div className='user-demo'>
                            <img
                              src={demo}
                              alt='user-demo'
                              className='img-fluid'
                            />
                          </div>
                          <div className='waiter-demo'>
                            <img
                              src={demo}
                              alt='waiter-demo'
                              className='img-fluid'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='content pt-24'>
                        Sample video demonstrating, How it <br />
                        works for business.
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
          <Container>
            <div className='why-choose__heading'>
              <h2>Why Choose Sajha Menu ?</h2>
              <p className='howpara'>
                Sajhamenu is a quick QR Code based food Ordering System that can
                be managed by a restaurant owner by generating a QR code
                scannable menu on the tables. This allows their customers to
                scan the QR code, browse the restaurant’s menu and order their
                desired items from their smartphones.
              </p>
            </div>

            <Row className='why-choose__images'>
              <Col md={12} lg={8}>
                <Row>
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

                  <Col md={4} className='mr-2'>
                    <WhyCard
                      imageSource={order}
                      content='Better Order Accuracy'
                    />
                  </Col>
                  <Col md={4} className='mr-3'>
                    <WhyCard
                      imageSource={productivity}
                      content='Boost Staff Productivity'
                    />
                  </Col>
                  <Col md={4} className='mr-3'>
                    <WhyCard imageSource={care} content='Keeps Customer Safe' />
                  </Col>
                </Row>

                {/* </Fade> */}
              </Col>
              <Col lg={4} md={12} className='why-image'>
                <img
                  src={sajha}
                  style={{ width: '100%' }}
                  alt='why-choose-sajha-menu'
                  className='img-fluid'
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* three sections - where, trusted-by, faqs */}
        <div className='common'>
          {/* where */}

          <section className='where'>
            <div className='where__heading'>
              <h2>Where Sajha Menu Can Be Applied ?</h2>
              <p>
                Contactless QR code menus are in high demand in the Hotel,
                Restaurant, Cafe and Bar industry. Here <br /> applying our
                Sajha QR Code Menu application is going to be beneficial for
                these field.
              </p>
            </div>

            <div className='where__images'>
              <Fade left>
                <div className='image__wrapper'>
                  <img src={one} alt='one' className='img-fluid where-img' />
                  <div className='overlap'> Hotel</div>
                </div>
                <div className='image__wrapper'>
                  <img src={two} alt='one' className='img-fluid where-img' />
                  <div className='overlap'>Cafe</div>
                </div>
              </Fade>
              <div className='image__wrapper'>
                <img src={three} alt='one' className='img-fluid where-img' />
                <div className='overlap'>Restaurant</div>
              </div>
              <Fade right>
                <div className='image__wrapper'>
                  <img src={four} alt='one' className='img-fluid where-img' />
                  {/* <img src={one} alt="one" className="img-fluid where-img" /> */}
                  <div className='overlap'>Longue</div>
                </div>
                <div className='image__wrapper'>
                  <img src={five} alt='one' className='img-fluid where-img' />
                  <div className='overlap'>Bar</div>
                </div>
              </Fade>
            </div>
          </section>

          {/* trusted-by */}

          {/* <section className='trusted-by'>
            <div className='trusted-by__heading'>
              <h2>Trusted by </h2>
            </div>

            <div className='trusted-by__images'>
              {/* <Slide left> */}
          {/* <Row className='justify-content-center align-items-center'>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={ovenfresh}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={maharaja}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={pauwa}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={daddys}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
              </Row> */}
          {/* </Slide> */}

          {/* <Slide right> */}
          {/* <Row className='justify-content-center align-items-center'>
                <Col lg={3} className='mb-4 p-0'>
                  <img src={kkfc} alt='one' className='img-fluid trusted-img' />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={durbar}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={concept}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
                <Col lg={3} className='mb-4 p-0'>
                  <img
                    src={darkwood}
                    alt='one'
                    className='img-fluid trusted-img'
                  />
                </Col>
              </Row> */}
          {/* </Slide> */}
          {/* </div>
          </section> */}

          {/* faq */}
          <section className='faq'>
            <div className='faq__heading'>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className='faq__qna'>
              <Slide bottom>
                <AccordinComp
                  header=' What is the Sajha menu?'
                  body=' Sajhamenu is a quick  QR Code based food Ordering System that can be managed by a restaurant owner by generating a QR code scannable menu on the tables. This allows their customers to scan the QR code, browse the restaurant’s menu and order their desired items from their smartphones.'
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header='How to create a QR code menu ?'
                  body='It is a digital menu that can be scanned by customers to view the menu. It is created using our Manager Application and can be placed on the table for scanning.'
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header='How Sajhamenu works ?'
                  body='A customer scans the QR code placed on the table, after which they browse the menu and place an order for the desired items. A waiter receives and confirms the orders in Waiter’s application and finally prints the order in the kitchen printer. Lastly, the delicious food is served on the table based on the same print from the waiter. '
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header='How to  setup QR code menu?'
                  body='The manager is given an app namely  “ manager application “ with which all items on the menu can be set up and managed in a real-time manner. Furthermore after setting up the menu QR code is generated for all the tables from the same application.'
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header='What are the device requirements to use Sajha Menu?'
                  body='All  smart phones can be used for scanning a QR code by the customers. However, two mobile applications are provided by the company, one is manager application and another is waiter application for  managing menu and orders. '
                />
              </Slide>
              <Slide bottom>
                <AccordinComp
                  header='Why is a digital menu better than a paper menu?'
                  body='First thing first, this menu is paperless and turns out to be an economical solution for a long term usage. A digital menu is always updateable and scalable. It also radiates the modern vibes and makes a restaurant technology friendly. Also, customers  are given enough freedom and time to explore the menu and place their orders.'
                />
              </Slide>
              <Slide bottom>
                <AccordinComp
                  header='Can customers make an order using the Sajha menu?'
                  body="Yes that's the main catch !"
                />
              </Slide>
            </div>
          </section>
        </div>

        {/*  newsletter-section*/}
        <section className='newsletter' id='newsletter'>
          <div className='newsletter__wrapper'>
            <Row className='newsletter__wrapper-both'>
              <Col lg={6} className='newsletter__wrapper-left'>
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

              <Col lg={6} className='newsletter__wrapper-right'>
                <div className='newsletter__wrapper-form'>
                  <h2>Register To Get QR Code Menu.</h2>
                  <p>
                    Fill out the form to register and our team will contact you.
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
                        label='Phone Number'
                        type='number'
                        placeholder='Enter Your Phone Number'
                        name='mobilenumber'
                        asteric='*'
                        required
                      />
                    </div>
                    <div className='mx-20'>
                      <InputForm
                        label='Email Address'
                        type='email'
                        placeholder='Enter Your Email Address (Optional)'
                        name='email'
                      />
                    </div>
                    <div className='mx-20'>
                      <InputForm
                        label='Message'
                        type='textarea'
                        placeholder='Your Message Here'
                        name='msg'
                        asteric='*'
                        required
                      />
                    </div>
                    <button className='submit'>Submit</button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* footer section */}
        <Footer />
      </section>
    </>
  );
};

export default Home;
