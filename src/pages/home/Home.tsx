import {
  Carousel,
  Col, Container, Row
} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import {
  CAREERS, CAREERS_LINK, CIVIC_ENGAGEMENT, CIVIC_ENGAGEMENT_LINK, DONATION, EARLY_CHILDHOOD_EDUCATION, EARLY_CHILDHOOD_EDUCATION_LINK, FAMILY_SUPPORT, FAMILY_SUPPORT_LINK, FAQS, FAQS_LINK, HEALTHCARE_ACCESS, HEALTHCARE_ACCESS_LINK, IN_KIND_DONATION, IN_KIND_DONATION_LINK, PROGRAM_CONTACTS, PROGRAM_CONTACTS_LINK, SENIOR_AND_DISABLED_ADULT_SERVICES, SENIOR_AND_DISABLED_ADULT_SERVICES_LINK, SITE_LOCATIONS, SITE_LOCATIONS_LINK, VOLUNTEER, VOLUNTEER_LINK, YOUTH_DEVELOPMENT, YOUTH_DEVELOPMENT_LINK
} from "../constants";
import {
  Menu
} from "../Menu"
import SVG from 'react-inlinesvg';
import "./style.css";

export const Home = () => {
  return (
	  <div>
		  <Menu />
      <Row className="home-gallery-row">
		    <Gallery />
      </Row>
		  <Banner />
		  <IconLinks />
		  <Footer />
	  </div>
  )
}

const Gallery = () => (
  <Carousel interval={null}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/assets/gallery-1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/assets/gallery-2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

const Banner = () => (
  <>
    <hr/>
    <h5>
      <em>CISC helps immigrants throughout King County achieve success in their new community<br/>
			by providing information, referral, advocacy, social, and support services.
      </em>
    </h5>
    <hr/>
  </>
)

const IconLinks = () => (
  <>	
    <div className="fullblock">
      <h1>Service Scope</h1>
      <Container>
        <Row>
          <Col>
            <Link to={CIVIC_ENGAGEMENT_LINK} >
              <SVG src="assets/panel-icon.svg"></SVG>
              <p>{CIVIC_ENGAGEMENT}</p>
            </Link>
          </Col>
          <Col>
            <Link to={EARLY_CHILDHOOD_EDUCATION_LINK} >
              <SVG src="assets/child-icon.svg"></SVG>
              <p>{EARLY_CHILDHOOD_EDUCATION}</p>
            </Link>
          </Col>
          <Col>
            <Link to={YOUTH_DEVELOPMENT_LINK} >
              <SVG src="assets/network-icon.svg"></SVG>
              <p>{YOUTH_DEVELOPMENT}</p>
            </Link>
          </Col>
          <Col>
            <Link to={FAMILY_SUPPORT_LINK} >
              <SVG src="assets/house-icon.svg"></SVG>
              <p>{FAMILY_SUPPORT}</p>
            </Link>
          </Col>
          <Col>
            <Link to={SENIOR_AND_DISABLED_ADULT_SERVICES_LINK} >
              <SVG src="assets/elderly-icon.svg"></SVG>
              <p>{SENIOR_AND_DISABLED_ADULT_SERVICES}</p>
            </Link>
          </Col>
          <Col>
            <Link to={HEALTHCARE_ACCESS_LINK} >
              <SVG src="assets/heart-icon.svg"></SVG>
              <p>{HEALTHCARE_ACCESS}</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="inspire fullblock">
      <h1>Take Action</h1>
      <Container>
        <Row>
          <Col>
            <Link to={VOLUNTEER_LINK} >
              <SVG src="assets/medal-icon.svg"></SVG>
              <p>{VOLUNTEER}</p>
            </Link>
          </Col>
          <Col>
            <Link to={"/"} >
              <SVG src="assets/piggy-bank-icon.svg"></SVG>
              <p>{DONATION}</p>
            </Link>
          </Col>
          <Col>
            <Link to={IN_KIND_DONATION_LINK} >
              <SVG src="assets/shopping-icon.svg"></SVG>
              <p>{IN_KIND_DONATION}</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="fullblock">
      <h1>Stay In Touch</h1>
      <Container>
        <Row>
          <Col>
            <Link to={PROGRAM_CONTACTS_LINK} >
              <SVG src="assets/head-icon.svg"></SVG>
              <p>{PROGRAM_CONTACTS}</p>
            </Link>
          </Col>
          <Col>
            <Link to={SITE_LOCATIONS_LINK} >
              <SVG src="assets/apartments-icon.svg"></SVG>
              <p>{SITE_LOCATIONS}</p>
            </Link>
          </Col>
          <Col>
            <Link to={FAQS_LINK} >
              <SVG src="assets/lightbulb-icon.svg"></SVG>
              <p>{FAQS}</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

const Footer = () => (
  <Container className="footer">
    <Row>
      <Col>
      <img className="logo" src="/assets/csc-logo-white.png"></img>
      </Col>
      <Col>
			Phone: <br/>(206)227-7698<br/>
			Email: <br/><a>info@csc-wa.org</a>
      </Col>
      <Col>
        <a>FAQs</a><br/>
        <a>Contact Us</a>
      </Col>
      <Col>
			Social Media
      </Col>
      <Col>
			Donate
      </Col>
    </Row>
    <Row>
      <Col>
			CISC Main Office<br/>
			22727 Hwy 99,<br/>
      Suite 201A<br/>
			Edmonds, WA 98026
      </Col>
      <Col>
			Hours:<br/>
			Monday through Friday<br/>
			10:00 am - 5:00 pm
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
    </Row>
    <div id="copyright">
			Copyright 2022. All rights reserved. Supported by United Way of King County.
    </div>
  </Container>
)