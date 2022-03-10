import { Col, Row, Container, Form } from "react-bootstrap";
import { ImCross } from "react-icons/im";
// import Modal from "react-bootstrap/Modal";
import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import AccordinComp from "../../components/AccordinComp";
import InputForm from "../../components/InputForm";
import WhyCard from "../../components/WhyCard";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import Illustration from "../../assets/images/illustration.png";
import sajha from "../../assets/images/sajha-menu.png";
import qrcode from "../../assets/images/qrcode.png";
import line from "../../assets/images/line.png";
import demo from "../../assets/images/demo.gif";

// why-section images
import productivity from "../../assets/images/Productivity.png";
import contactless from "../../assets/images/contactless.png";
import order from "../../assets/images/order.png";
import noapp from "../../assets/images/noapp.png";
import fast from "../../assets/images/fast.png";
import care from "../../assets/images/care.png";

// where-section images
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";

// trusted-section images
import darkwood from "../../assets/images/image-darkwood.png";
import daddys from "../../assets/images/image-daddys.png";
import durbar from "../../assets/images/image-concept.png";
import maharaja from "../../assets/images/image-mahaaraja.png";
import kkfc from "../../assets/images/image-kkfc.png";
import pauwa from "../../assets/images/image-pauwa.png";
import concept from "../../assets/images/image-ovenfresh.png";
import ovenfresh from "../../assets/images/image-lavish.png";
import { Link } from "react-router-dom";

const Home = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const register = () => {
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "block";
  };

  const closeForm = () => {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "block";
  };

  return (
    <>
      <section className="home">
        {/* navbar */}
        <NavBar />

        {/* hero section */}
        <section className="hero">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="hero__content">
                  <Slide left>
                    <div className="hero__content--heading">
                      <h1>
                        {/* <img
                        src={acb}
                        alt="hero__bg-image"
                        className="img-fluid imgg"
                      /> */}
                        <div className="bg">
                          <span className="text-white"> Scan </span>
                          QR Code, View Menu
                          <span className="text-white"> and </span>
                          Place Order
                          <span className="text-white">
                            {" "}
                            From Your Mobile.{" "}
                          </span>
                        </div>
                      </h1>
                    </div>
                    <div className="hero__content--para">
                      <img
                        src={line}
                        alt="hero__bg-image"
                        className="img-fluid line"
                      />
                      <p>
                        Grow Your Restaurant Business Using Our Sajha Menu that{" "}
                        <br />
                        connects your customers Touchless and keeps everyone{" "}
                        <br />
                        safe in this pandemic situation.
                      </p>
                    </div>

                    <div className="hero__content--buttons">
                      <button
                        className="hero__content--buttons-register"
                        onClick={register}
                      >
                        Register Now
                      </button>
                      <a href="#watch-video">
                        <button className="hero__content--buttons-watch">
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
              <div className="hero__illustration" id="one">
                <img
                  src={Illustration}
                  alt="illustration"
                  className="img-fluid"
                />
              </div>
            </Slide>

            {/* register-form */}
            <Fade right>
              <div
                className="register-form"
                id="two"
                style={{ display: "none" }}
              >
                <div className="d-flex justify-content-between">
                  <h2>Register To Get QR Code Menu.</h2>
                  <ImCross onClick={closeForm} className="icon" />
                </div>
                <p>
                  Fill out the form to register and our team will contact you.
                </p>
                <Form>
                  <div className="mx-20">
                    <InputForm
                      label="Name"
                      type="text"
                      placeholder="Enter Your Full Name"
                      name="name"
                      asteric="*"
                      required
                    />
                  </div>
                  <div className="mx-20">
                    <InputForm
                      label="Email"
                      type="email"
                      placeholder="Enter Your Email Address(Optional)"
                      name="email"
                    />
                  </div>

                  {/* business type */}
                  <div className="mx-20 d-flex justify-content-between">
                    <div style={{ width: "48%" }}>
                      <Form.Label>Business Type</Form.Label>
                      <div className="custom-select">
                        <select>
                          <option value="0">Select </option>
                          <option value="1">Audi</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ width: "50%" }}>
                      <InputForm
                        label="Phone Number"
                        type="number"
                        placeholder="Enter Your Phone Number"
                        name="mobilenumber"
                        asteric="*"
                        required
                      />
                    </div>
                  </div>

                  <div className="mx-20">
                    <InputForm
                      label="Company Name"
                      type="text"
                      placeholder="Enter Your Company Name"
                      name="company"
                      asteric="*"
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

                  <button className="submit">Submit</button>
                </Form>
              </div>
            </Fade>
          </Container>
        </section>

        {/*how-it-works section*/}
        <section className="how-it-works" id="watch-video">
          <div className="how-it-works__heading">
            <h2>How Does Sajha Menu Work ?</h2>
            <p>
              Its simple as 1-2-3. The client comes, scans his mobile to see
              your menu and the <br /> staff takes the order. No POS or Payment
              gateways integration required.
            </p>
          </div>

          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="how-it-works__procedure">
                <Row>
                  <Col lg={6}>
                    <div className="how-it-works__procedure-box p-52">
                      <div className="qr-code">
                        <Link to="/download">
                          <div className="title">Try Sajha Menu</div>
                          <div className="image">
                            <img
                              src={qrcode}
                              alt="qr-code"
                              className="img-fluid"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="content pt-24">
                        Scan QR code from your phone to see a <br />
                        demo of our Sajha Menu.
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div className="how-it-works__procedure-box box-2 p-52">
                      <div className="qr-code demos">
                        <div className="title">
                          <div className="user">User Phone</div>
                          <div className="waiter">Waiter Phone</div>
                        </div>
                        <div className="image">
                          <div className="user-demo">
                            <img
                              src={demo}
                              alt="user-demo"
                              className="img-fluid"
                            />
                          </div>
                          <div className="waiter-demo">
                            <img
                              src={demo}
                              alt="waiter-demo"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="content pt-24">
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
        <section className="why-choose">
          <div className="why-choose__heading">
            <h2>Why Choose Sajha Menu ?</h2>
            <p>
              The pandemic has shaped and accelerated the contactless menu for
              ordering. Sajha Menu is a simplistic <br /> tool for restaurants,
              cafes, bars, hotels and shops that creates digital contactless
              menus. It avoids social <br /> distance and provides your guests
              with a safe food ordering experience.
            </p>
          </div>

          <Row className="why-choose__images">
            <Col lg={2}></Col>
            <Col lg={8}>
              <Row className="gx-5">
                {/* <Fade left> */}
                <Col lg={8}>
                  <Row>
                    <Col md={4} className="mr-3">
                      <WhyCard
                        imageSource={contactless}
                        content="Contactless Ordering"
                      />
                    </Col>

                    <Col md={4} className="mr-3">
                      <WhyCard imageSource={noapp} content="No App Required" />
                    </Col>

                    <Col md={4} className="mr-3">
                      <WhyCard
                        imageSource={fast}
                        content="Faster Table Turnover"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={4} className="mr-2">
                      <WhyCard
                        imageSource={order}
                        content="Better Order Accuracy"
                      />
                    </Col>
                    <Col md={4} className="mr-3">
                      <WhyCard
                        imageSource={productivity}
                        content="Boost Staff Productivity"
                      />
                    </Col>
                    <Col md={4} className="mr-3">
                      <WhyCard
                        imageSource={care}
                        content="Keeps Customer Safe"
                      />
                    </Col>
                  </Row>
                </Col>
                {/* </Fade> */}

                <Col lg={4} className="why-image">
                  <img
                    src={sajha}
                    style={{ height: "283px", maxWidth: "315px" }}
                    alt="why-choose-sajha-menu"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </section>

        {/* three sections - where, trusted-by, faqs */}
        <div className="common">
          {/* where */}

          <section className="where">
            <div className="where__heading">
              <h2>Where Sajha Menu Can Be Applied ?</h2>
              <p>
                Contactless QR code menus are in high demand in the Hotel,
                Restaurant, Cafe and Bar industry. Here <br /> applying our
                Sajha QR Code Menu application is going to be beneficial for
                these field.
              </p>
            </div>

            <div className="where__images">
              <Fade left>
                <div className="image__wrapper">
                  <img src={one} alt="one" className="img-fluid where-img" />
                  <div className="overlap"> Hotel</div>
                </div>
                <div className="image__wrapper">
                  <img src={two} alt="one" className="img-fluid where-img" />
                  <div className="overlap">Cafe</div>
                </div>
              </Fade>
              <div className="image__wrapper">
                <img src={three} alt="one" className="img-fluid where-img" />
                <div className="overlap">Restaurant</div>
              </div>
              <Fade right>
                <div className="image__wrapper">
                  <img src={four} alt="one" className="img-fluid where-img" />
                  {/* <img src={one} alt="one" className="img-fluid where-img" /> */}
                  <div className="overlap">Longue</div>
                </div>
                <div className="image__wrapper">
                  <img src={five} alt="one" className="img-fluid where-img" />
                  <div className="overlap">Bar</div>
                </div>
              </Fade>
            </div>
          </section>

          {/* trusted-by */}

          <section className="trusted-by">
            <div className="trusted-by__heading">
              <h2>Trusted by </h2>
            </div>

            <div className="trusted-by__images">
              {/* <Slide left> */}
              <Row className="justify-content-center align-items-center">
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={ovenfresh}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={maharaja}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={pauwa}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={daddys}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
              </Row>
              {/* </Slide> */}

              {/* <Slide right> */}
              <Row className="justify-content-center align-items-center">
                <Col lg={3} className="mb-4 p-0">
                  <img src={kkfc} alt="one" className="img-fluid trusted-img" />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={durbar}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={concept}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
                <Col lg={3} className="mb-4 p-0">
                  <img
                    src={darkwood}
                    alt="one"
                    className="img-fluid trusted-img"
                  />
                </Col>
              </Row>
              {/* </Slide> */}
            </div>
          </section>

          {/* faq */}
          <section className="faq">
            <div className="faq__heading">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq__qna">
              <Slide bottom>
                <AccordinComp
                  header="1. How to create a QR code menu?"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header="2. How to create a QR code menu?"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header="3.  How can I check orders from my clients?"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header="4. How will I receive orders?"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
                />
              </Slide>

              <Slide bottom>
                <AccordinComp
                  header="5. How will I receive orders?"
                  body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum."
                />
              </Slide>
            </div>
          </section>
        </div>

        {/*  newsletter-section*/}
        <section className="newsletter" id="newsletter">
          <div className="newsletter__wrapper">
            <Row className="newsletter__wrapper-both">
              <Col lg={6} className="newsletter__wrapper-left">
                <div className="newsletter__wrapper-box">
                  <div className="newsletter__wrapper-box-inner">
                    <img
                      src={demo}
                      style={{ height: "284px" }}
                      alt="user-demo"
                      className="img-fluid demo"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} className="newsletter__wrapper-right">
                <div className="newsletter__wrapper-form">
                  <h2>Register To Get QR Code Menu.</h2>
                  <p>
                    Fill out the form to register and our team will contact you.
                  </p>
                  <Form>
                    <div className="mx-20">
                      <InputForm
                        label="Name"
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="name"
                        asteric="*"
                        required
                      />
                    </div>
                    <div className="mx-20">
                      <InputForm
                        label="Phone Number"
                        type="number"
                        placeholder="Enter Your Phone Number"
                        name="mobilenumber"
                        asteric="*"
                        required
                      />
                    </div>
                    <div className="mx-20">
                      <InputForm
                        label="Email Address"
                        type="email"
                        placeholder="Enter Your Email Address (Optional)"
                        name="email"
                      />
                    </div>
                    <div className="mx-20">
                      <InputForm
                        label="Message"
                        type="textarea"
                        placeholder="Your Message Here"
                        name="msg"
                        asteric="*"
                        required
                      />
                    </div>
                    <button className="submit">Submit</button>
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
