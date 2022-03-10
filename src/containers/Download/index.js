import { Container, Row, Col } from "react-bootstrap";

const Download = () => {
  return (
    <>
      <Container>
        <Row style={{ margin: "200px 0", textAlign: "center" }}>
          <Col md={2}></Col>
          <Col md={4}>
            <a
              style={{
                textDecoration: "none",
                padding: "10px 15px",
                backgroundColor: "green",
                borderRadius: "5px",
                color: "white",
                fontSize: "20px",
              }}
              href="/sharesignal.apk"
            >
              Download Sajha Menu
            </a>
          </Col>

          <Col md={4}>
            <a
              style={{
                textDecoration: "none",
                padding: "10px 15px",
                backgroundColor: "green",
                borderRadius: "5px",
                color: "white",
                fontSize: "20px",
              }}
              href="/sharesignal.apk"
            >
              Download Waiter Menu
            </a>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Download;
