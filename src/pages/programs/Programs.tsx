import {
  Accordion, Anchor
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
  const urlParams = useParams();
  const program = urlParams.program;
  console.log(location, urlParams)
  return (
    <>
      <Menu />
      <ul>
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
      {
        PROGRAMS[path].map((program: any) => {
          const {
            title, content
          } = program;
          return (
            <>
              <h3>
                <Anchor id={encode(title)}>
                  {title}
                </Anchor>
              </h3>
              <p>
                {content}
              </p>
            </>
          )
        })
      }
    </>
  )
}

const encode = (url: string) => url.split(" ").join("+");