import { useContext, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./Links";
import Socials from "./Socials";
import MyContext from "./MyContext";

const Navbar = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    const checkSize = () => {
      // console.log(window.innerWidth);
      if (window.innerWidth <= 1025) {
        dispatch({ type: "MOBILE_VIEW_ON" });
      } else {
        dispatch({ type: "MOBILE_VIEW_OFF" });
      }
    };

    window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [dispatch]);

  return (
    <>
      <div className="shadow py-3">
        <nav
          className="container d-flex align-items-center justify-content-between flex-wrap"
          id="navbar"
        >
          <div className="d-inline-flex align-items-center gap-2 fs-5 fw-semibold">
            <img
              src="https://navbar-tutorial.netlify.app/static/media/logo.7d6aa1c2.svg"
              alt="DevBar Logo"
              height="28"
              className="ratio-1x1"
            />
            DevBar
          </div>

          {!state.mobileView && (
            <>
              <Links></Links>

              <Socials></Socials>
            </>
          )}
          {state.mobileView && (
            <>
              <div>
                <button
                  type="button"
                  className="btn py-1 px-3 d-inline-flex align-items-center border-0"
                  onClick={handleClick}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-dark"
                    size="xl"
                  />
                </button>
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
