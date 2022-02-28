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
  ABOUT_US_LINKS
} from "../constants";
import {
  Menu
} from "../Menu"
import {
  AboutUsTOC
} from "./AboutUsTOC";
import "./style.css";


  
export const Leadership = () => {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col> 
            {AboutUsTOC()}
          </Col>
          <Col>
            <h2>Management Team</h2>
            <h2>Board of Directors</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}