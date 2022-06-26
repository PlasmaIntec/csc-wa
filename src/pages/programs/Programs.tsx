import {
  Accordion, Anchor, Col, Container, Row
} from "react-bootstrap"
import {
  useLocation, useParams
} from "react-router-dom";
import {
  Menu
} from "../Menu";
import {
  PROGRAMS
} from "../constants";
import {
  HashLink as Link
} from 'react-router-hash-link';
import "./style.css";
import { LanguageContext } from "../../App";

export const Programs = () => {
  const location = useLocation();
  const path = location.pathname;

  const TableOfContents = (path: string, language: string) => (
    <div className="card contents-card">
      <ul className="contents no-bullet">
        {
          PROGRAMS[path].map((program: any) => {
            const {
              title
            } = program;
            return (
              <li>
                <Link to={`#${encode(title[language])}`}>
                  {title[language]}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

  const ContactInfo = (path: string) => (
    <div className="card contact-card">
      <div className="card-section card-intro">FOR FURTHER INFORMATION, PLEASE CONTACT:</div>
      <div className="card-section">
        <b>Communicator</b>
        <p>Cell: xxx-xxx-xxxx</p>
      </div>
    </div>
  )

  const Contents = (path: string, language: string) => (
    PROGRAMS[path].map((program: any) => {
      const {
        title, content
      } = program;
      return content.map((contentFragment: any) => (
        <div className="contents">
          <h3>
            <Anchor id={encode(title[language])} className="toc-header">
              {title[language]}
            </Anchor>
          </h3>
          <p>
            {contentFragment[language]}
          </p>
        </div>
      ))
    })
  )

  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (    
        <>
          <Menu />
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                {TableOfContents(path, language)}
                {ContactInfo(path)}
              </Col>
              <Col>
                {Contents(path, language)}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </LanguageContext.Consumer>
  )
}

const encode = (url: string) => url.split(" ").join("+");