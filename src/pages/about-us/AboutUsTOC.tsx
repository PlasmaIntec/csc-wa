import {
  Link
} from "react-router-dom"
import { LanguageContext } from "../../App"
import {
  ABOUT_US_LINKS
} from "../constants"

export const AboutUsTOC = () => (
  <LanguageContext.Consumer>
    {({ language, setLanguage }) => (                                      
      <div className="card contents-card">
        <ul className="contents no-bullet">
          {
            ABOUT_US_LINKS(language).map(([
              name,
              link
            ]) => {
              return (
                <li>
                  <Link to={link}>
                    {name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )}
  </LanguageContext.Consumer>
)