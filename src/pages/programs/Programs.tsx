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

export const Programs = () => {
  const location = useLocation();
  const path = location.pathname;

  const TableOfContents = (path: string) => (
    <div className="card contents-card">
      <ul className="contents no-bullet">
        {
          PROGRAMS[path].map((program: any) => {
            const {
              title
            } = program;
            return (
              <li>
                <Link to={`#${encode(title)}`}>
                  {title}
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

  const Contents = (path: string) => (
    PROGRAMS[path].map((program: any) => {
      const {
        title, content
      } = program;
      return (
        <div className="contents">
          <h3>
            <Anchor id={encode(title)} className="toc-header">
              {title}
            </Anchor>
          </h3>
          <p>
            {content}
          </p>
        </div>
      )
    })
  )

  return (
    <>
      <Menu />
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            {TableOfContents(path)}
            {ContactInfo(path)}
          </Col>
          <Col>
            {Contents(path)}
          </Col>
        </Row>
      </Container>
    </>
  )
}

const encode = (url: string) => url.split(" ").join("+");