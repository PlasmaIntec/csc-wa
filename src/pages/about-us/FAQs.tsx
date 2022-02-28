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
  
export const FAQs = () => {
  return (
    <>
      <Menu />
      <Container>
        <Row>
          <Col>                    
            {AboutUsTOC()}
          </Col>
          <Col>
            <Accordion>
              {
                FAQ.map((entry: { question: string; answer: string; }, index: number) => {
                  const {
                    question, answer
                  } = entry;
                  return (
                    <Accordion.Item eventKey={`${index}`}>
                      <Accordion.Header>{question}</Accordion.Header>
                      <Accordion.Body>{answer}</Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}