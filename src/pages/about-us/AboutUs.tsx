import {
  useContext,
  useState
} from "react";
import {
  Accordion, Col, Container, Row, Tab, Tabs
} from "react-bootstrap"
import { LanguageContext } from "../../App";
import { AboutUsText } from "../constants";
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
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (
        <>          
          <Menu />
          <Container className="about-us-container">
            <Row className="about-us-row">
              <Col className="about-us-span" xs={4}>
                {AboutUsText.vision[language]}
              </Col>
              <Col xs={6}>
                {AboutUsText.vision_text[language]}
              </Col>
            </Row>
            <Row className="about-us-row">
              <Col className="about-us-span" xs={4}>
                {AboutUsText.mission[language]}
              </Col>
              <Col xs={6}>
                <br/>
                {AboutUsText.mission_text[language]}
              </Col>
            </Row>
            <Row className="about-us-row">
              <Col className="about-us-span" xs={4}>
                {AboutUsText.values[language]}
              </Col>
              <Col xs={6}>          
                <b>{AboutUsText.values_integrity_text[language]}</b> {AboutUsText.values_integrity_description_text[language]} <br/><br/>
                <b>{AboutUsText.values_hospitality_text[language]}</b> {AboutUsText.values_hospitality_description_text[language]} <br/><br/>
                <b>{AboutUsText.values_equity_text[language]}</b> {AboutUsText.values_equity_description_text[language]} <br/><br/>
                <b>{AboutUsText.values_blessed_text[language]}</b> {AboutUsText.values_blessed_description_text[language]} <br/><br/>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </LanguageContext.Consumer>
  )
}