import {
  Link
} from "react-router-dom"
import {
  ABOUT_US_LINKS
} from "../constants"

export const AboutUsTOC = () => (                                   
  <div className="card contents-card">
    <ul className="contents no-bullet">
      {
        ABOUT_US_LINKS.map(([
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
)