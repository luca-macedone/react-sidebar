import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavSocials = () => {
  return (
    <>
      <ul className="list-unstyled d-flex gap-5 align-items-center mb-0">
        <li>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </li>
      </ul>
    </>
  );
};

export default NavSocials;
