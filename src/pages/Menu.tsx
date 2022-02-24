import {
  Nav, NavDropdown
} from "react-bootstrap";
import {
  SITE_DIR
} from "./constants";

export const Menu = () => {
  return (
    <Nav variant="pills">
      {
        Object.entries(SITE_DIR).map((entry: any) => {
          const [
            topEntryKey,
            topEntryValue
          ] = entry;
          if (typeof topEntryValue === "string") {
            return (
              <Nav.Item>
                <Nav.Link href={topEntryValue}>
                  {topEntryKey}
                </Nav.Link>
              </Nav.Item>
            )
          } else if (typeof topEntryValue === "object") {
            return (
              <NavDropdown title={topEntryKey} id="nav-dropdown">
                {
                  Object.entries(topEntryValue).map((secondEntry: any) => {
                    const [
                      secondEntryKey,
                      secondEntryValue
                    ] = secondEntry;
                    return (
                      <Nav.Item>
                        <Nav.Link href={secondEntryValue}>
                          {secondEntryKey}
                        </Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </NavDropdown>
            )
          }
        })
      }
    </Nav>
  );
}