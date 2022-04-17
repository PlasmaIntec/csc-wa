import { useContext } from "react";
import {
  Button,
  Nav, NavDropdown
} from "react-bootstrap";
import { LanguageContext } from "../App";
import {
  SITE_DIR
} from "./constants";
import "./style.css";

export const Menu = () => {
  return (
    <LanguageContext.Consumer>
      {({ language, setLanguage }) => (  
        <Nav variant="pills" id="site-navigation" className="main-navigation top-bar row">
          <div className="top-bar-left">
            <ul id="menu-desktop-main-menu" className="dropdown menu desktop-menu">
              {
                Object.entries(SITE_DIR(language)).map((entry: any) => {
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

            </ul>

          </div>
          <div className="top-bar-right">
            <Button onClick={() => setLanguage("chinese_sc")}>
              chinese
            </Button>
            <Button onClick={() => setLanguage("english")}>
              english
            </Button>
          </div>
        </Nav>
      )}
    </LanguageContext.Consumer>
  );
}