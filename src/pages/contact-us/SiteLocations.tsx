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
            Office Number:
            Fax Number:
            Hours of Operation:
            Embedded Map
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bothell Office</Accordion.Header>
          <Accordion.Body>
            Office Number:
            Fax Number:
            Hours of Operation:
            Embedded Map
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}