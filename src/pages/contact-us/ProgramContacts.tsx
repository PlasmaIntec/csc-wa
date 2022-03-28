import {
  Accordion
} from "react-bootstrap"
import {
  Menu
} from "../Menu"

export const ProgramContacts = () => {
  return (
    <>
      <Menu />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Executive Director</Accordion.Header>
          <Accordion.Body>
            Robert Ha<br/>
            robert.ha@csc-wa.org<br/>
            (206)227-7698
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}