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
import "./style.css";

export const Home = () => {
  return (
	  <div>
		  <Menu />
		  <Gallery />
		  <Banner />
		  <IconLinks />
		  <Footer />
	  </div>
  )
}

// TODO: fix image resizing while transitioning between slides
const Gallery = () => (
  <Carousel interval={null} fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/thumbs/800x531/142774.jpg"
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
        src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmnSabWD5a0W1Sasnht8NGqrRCDtSzFapGQ&usqp=CAU"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
      <h1>How We Help</h1>
      <Container>
        <Row>
          <Col>
            <Link to={CIVIC_ENGAGEMENT_LINK} >
              {CIVIC_ENGAGEMENT}
            </Link>
          </Col>
          <Col>
            <Link to={EARLY_CHILDHOOD_EDUCATION_LINK} >
              {EARLY_CHILDHOOD_EDUCATION}
            </Link>
          </Col>
          <Col>
            <Link to={YOUTH_DEVELOPMENT_LINK} >
              {YOUTH_DEVELOPMENT}
            </Link>
          </Col>
          <Col>
            <Link to={FAMILY_SUPPORT_LINK} >
              {FAMILY_SUPPORT}
            </Link>
          </Col>
          <Col>
            <Link to={SENIOR_AND_DISABLED_ADULT_SERVICES_LINK} >
              {SENIOR_AND_DISABLED_ADULT_SERVICES}
            </Link>
          </Col>
          <Col>
            <Link to={HEALTHCARE_ACCESS_LINK} >
              {HEALTHCARE_ACCESS}
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
              {VOLUNTEER}
            </Link>
          </Col>
          <Col>
            <Link to={"/"} >
              {DONATION}
            </Link>
          </Col>
          <Col>
            <Link to={IN_KIND_DONATION_LINK} >
              {IN_KIND_DONATION}
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
              {PROGRAM_CONTACTS}
            </Link>
          </Col>
          <Col>
            <Link to={SITE_LOCATIONS_LINK} >
              {SITE_LOCATIONS}
            </Link>
          </Col>
          <Col>
            <Link to={FAQS_LINK} >
              {FAQS}
            </Link>
          </Col>
          <Col>
            <Link to={CAREERS_LINK} >
              {CAREERS}
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
			LOGO
      </Col>
      <Col>
			Phone: xxx xxx xxxx<br/>
			Fax: xxx xxx xxxx<br/>
			Email: <a>info@gmail.com</a>
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
			611 S Lane St<br/>
			Seattle, WA 98104
      </Col>
      <Col>
			Hours:<br/>
			Monday through Friday<br/>
			8:30 am - 5:00 pm
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