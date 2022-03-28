import {
  useState
} from "react";
import {
  Accordion, Col, Container, Row, Tab, Tabs
} from "react-bootstrap"
import {
  Menu
} from "../Menu"
import "./style.css";

export const AboutUs = () => {
  const [
    key,
    setKey
  ] = useState('integrity');
  return (
    <>
      <Menu />
      <Container className="about-us-container">
        <Row className="about-us-row">
          <Col className="about-us-header" xs={4}>
                Our Mission
          </Col>
          <Col xs={6}>
            <br/>
            Enable Chinese immigrants to succeed in school, at work and in life by providing holistic and outstanding services of information, referral, advocacy, social and language
          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span" xs={4}>
                Our Vision
          </Col>
          <Col xs={6}>
                Enable and empower Chinese immigrants to achieve thriving lives! 
          </Col>
        </Row>
        <Row className="about-us-row">
          <Col className="about-us-span" xs={4}>
                Our Values
          </Col>
          <Col xs={6}>          
            <Tabs
              activeKey={key}
              onSelect={(k: any) => setKey(k)}
              className="mb-3 about-us-tabs"
            >
              <Tab eventKey="integrity" title="Integrity">
                <b>Integrity:</b> CSC upholds the honesty and righterousness in all the practices we do. 
              </Tab>
              <Tab eventKey="hospitality" title="Hospitality">
                <b>Hospitality:</b> CSC promotes holistic attitude and approach to serve the immigrants as we are families
              </Tab>
              <Tab eventKey="equity" title="Equity">
                <b>Equity:</b> CSC upholds and advocates the equity and social justice for all stakeholders
              </Tab>
              <Tab eventKey="blessed" title="Blessed">
                <b>Blessed:</b> CSC values the opportunities to serve the immigrants and their families with the blessings and guidance of God
              </Tab>
            </Tabs>

          </Col>
        </Row>
      </Container>
    </>
  )
}