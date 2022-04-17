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
  Menu
} from "../Menu"
import {
  AboutUsTOC
} from "./AboutUsTOC";
import "./style.css";

export const AnnualReports = () => {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>                    
            {AboutUsTOC()}
          </Col>
          <Col>
            <h2>Annual Reports</h2>
            <h2>Newsletters</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}