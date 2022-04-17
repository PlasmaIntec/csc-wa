import {
  useContext,
  useState
} from "react";
import {
  Accordion, Col, Container, Row, Tab, Tabs
} from "react-bootstrap"
import {
  Link
} from "react-router-dom";
import { LanguageContext } from "../../App";
import {
  FAQ
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
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (        
        <>
          <Menu />
          <Container>
            <Row>
              <Col>                    
                {AboutUsTOC()}
              </Col>
              <Col xs={9}>
                <Accordion>
                  {
                    FAQ.map((entry: { question: Record<string, string>; answer: Record<string, string>; }, index: number) => {
                      const {
                        question, answer
                      } = entry;
                      return (
                        <Accordion.Item eventKey={`${index}`}>
                          <Accordion.Header>{question[language]}</Accordion.Header>
                          <Accordion.Body>{answer[language]}</Accordion.Body>
                        </Accordion.Item>
                      )
                    })
                  }
                </Accordion>
              </Col>
            </Row>
          </Container>
        </>
      )}      
    </LanguageContext.Consumer>
  )
}