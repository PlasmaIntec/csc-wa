import { Accordion } from "react-bootstrap"
import { Menu } from "../Menu"

export const ProgramContacts = () => {
  return (
    <>    
      <Menu />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Executive Director</Accordion.Header>
          <Accordion.Body>
            John Doe
            johndoe@cisc-wa.org
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Operations Director</Accordion.Header>
          <Accordion.Body>
            Jane Doe
            janedoe@cisc-wa.org
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}