import { useContext } from "react";
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyContext from "./MyContext";

const Socials = () => {
  const { state } = useContext(MyContext);
  return (
    <>
      <ul
        className={
          state.mobileView
            ? "list-unstyled d-flex align-items-center justify-content-center gap-5 mb-0 w-100 py-2"
            : "list-unstyled d-flex align-items-center gap-5 mb-0"
        }
      >
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://twitter.com"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://facebook.com"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            className="text-decoration-none ms-text-primary"
            href="https://linkedin.com"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="lg"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Socials;
