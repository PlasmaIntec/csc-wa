import { useState } from "react";
import {
  Carousel,
  Col, Container, Row
} from "react-bootstrap";
import {
  Link
} from "react-router-dom";
import {
  CAREERS, CAREERS_LINK, CIVIC_ENGAGEMENT, CIVIC_ENGAGEMENT_LINK, CONTACT_US, COPYRIGHT, DONATE, DONATION, EARLY_CHILDHOOD_EDUCATION, EARLY_CHILDHOOD_EDUCATION_LINK, EMAIL, FAMILY_SUPPORT, FAMILY_SUPPORT_LINK, FAQS, FAQS_LINK, HEALTHCARE_ACCESS, HEALTHCARE_ACCESS_LINK, HOURS, IN_KIND_DONATION, IN_KIND_DONATION_LINK, PHONE, PROGRAM_CONTACTS, PROGRAM_CONTACTS_LINK, PROGRAM_TO_ICON, SENIOR_AND_DISABLED_ADULT_SERVICES, SENIOR_AND_DISABLED_ADULT_SERVICES_LINK, SERVICE_SCOPE, SITE_DIR, SITE_DIR_PROGRAMS, SITE_LOCATIONS, SITE_LOCATIONS_LINK, SOCIAL_MEDIA, STAY_IN_TOUCH, TAKE_ACTION, VOLUNTEER, VOLUNTEER_LINK, YOUTH_DEVELOPMENT, YOUTH_DEVELOPMENT_LINK
} from "../constants";
import {
  Menu
} from "../Menu"
import { Language, LanguageContext } from "../../App";
import SVG from 'react-inlinesvg';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as _ from "lodash";
import "./style.css";

export const Home = () => {
  
  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => {
        
        const chunks = _.chunk(Object.entries(SITE_DIR(language)[SITE_DIR_PROGRAMS[language]]), 5);

        return (          
          <div>
            <Menu />
            <Row className="home-gallery-row">
              <Gallery />
            </Row>
            <IconLinks chunks={chunks} />
            <Footer />
          </div>
        )
      }}      
    </LanguageContext.Consumer>
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
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/assets/gallery-2.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
  </Carousel>
)

const IconLinks = ({
  chunks
}: { chunks: any }) => (
  <LanguageContext.Consumer>
    {({ language, setLanguage }) => (
      <>	
        <div className="fullblock">
          <h1>{SERVICE_SCOPE[language]}</h1>
          <Container>
            {
              chunks.map((chunk: any) => (
                <Row>
                  {
                    chunk.map((program: string[]) => {
                      const [
                        programName,
                        programLink
                      ] = program;
                      return (
                        <Col>
                          <Link to={programLink} >
                            <SVG src={PROGRAM_TO_ICON(language)[programName]}></SVG>
                            <p>{programName}</p>
                          </Link>
                        </Col>
                      )}
                    )
                  }
                </Row>
              ))
            }
          </Container>
        </div>
        {/* TODO: refactor Take Action and Stay In Touch sections using PROGRAM_TO_ICON */}
        <div className="inspire fullblock">
          <h1>{TAKE_ACTION[language]}</h1>
          <Container>
            <Row>
              <Col>
                <Link to={VOLUNTEER_LINK} >
                  <SVG src="assets/icons/medal-icon.svg"></SVG>
                  <p>{VOLUNTEER[language]}</p>
                </Link>
              </Col>
              <Col>
                <Link to={"/"} >
                  <SVG src="assets/icons/piggy-bank-icon.svg"></SVG>
                  <p>{DONATION[language]}</p>
                </Link>
              </Col>
              <Col>
                <Link to={IN_KIND_DONATION_LINK} >
                  <SVG src="assets/icons/shopping-icon.svg"></SVG>
                  <p>{IN_KIND_DONATION[language]}</p>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="fullblock">
          <h1>{STAY_IN_TOUCH[language]}</h1>
          <Container>
            <Row>
              <Col>
                <Link to={PROGRAM_CONTACTS_LINK} >
                  <SVG src="assets/icons/head-icon.svg"></SVG>
                  <p>{PROGRAM_CONTACTS[language]}</p>
                </Link>
              </Col>
              <Col>
                <Link to={SITE_LOCATIONS_LINK} >
                  <SVG src="assets/icons/apartments-icon.svg"></SVG>
                  <p>{SITE_LOCATIONS[language]}</p>
                </Link>
              </Col>
              <Col>
                <Link to={FAQS_LINK} >
                  <SVG src="assets/icons/lightbulb-icon.svg"></SVG>
                  <p>{FAQS[language]}</p>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )}
  </LanguageContext.Consumer>
)

const Footer = () => (
  <LanguageContext.Consumer>
    {({ language, setLanguage }) => (
      <Container className="footer">
        <Row>
          <Col>
            <img className="logo" src="/assets/csc-logo-white.png"></img>
          </Col>
          <Col>
            {PHONE[language]}: <br/>(206)227-7698<br/>
            {EMAIL[language]}: <br/><a>info@csc-wa.org</a>
          </Col>
          <Col>
            <a>{FAQS[language]}</a><br/>
            <a>{CONTACT_US[language]}</a>
          </Col>
          <Col>
            <p>
              {SOCIAL_MEDIA[language]}
            </p>
            <img className="wechat-logo" src="/assets/wechat-icon.png"></img>
          </Col>
          <Col>
            {DONATE[language]}
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
          {HOURS[language]}:<br/>
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
          {COPYRIGHT[language]}
        </div>
      </Container>
    )}
  </LanguageContext.Consumer>
)