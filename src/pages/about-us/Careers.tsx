import {
  useState
} from "react";
import {
  Accordion, Col, Container, Row, Tab, Tabs
} from "react-bootstrap"
import {
  Link
} from "react-router-dom";
import {
  ABOUT_US_LINKS, FAQ
} from "../constants";
import {
  Menu
} from "../Menu"
import {
  AboutUsTOC
} from "./AboutUsTOC";
import "./style.css";
  
export const Careers = () => {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>                    
            {AboutUsTOC()}
          </Col>
          <Col>
            <p>Careers</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}