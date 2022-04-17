import {
  Accordion
} from "react-bootstrap"
import {
  Menu
} from "../Menu"

export const SiteLocations = () => {
  return (
    <>
      <Menu />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edmonds Office</Accordion.Header>
          <Accordion.Body>
            22727 Hwy 99, Suite 201A, Edmonds WA 98026
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}