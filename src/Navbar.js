import { useEffect, useReducer } from "react";
import NavLinks from "./NavLinks";
import NavSocials from "./NavSocials";
import reducer from "./Reducer";

const appInitialState = {
  mobileView: false,
  isSidebarActive: false,
  isModalOpern: false,
};

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, appInitialState);

  const changeView = () => {
    // console.log(dispatch);
    if (window.innerWidth <= 1200) {
      dispatch({ type: "CHANGE_VIEW_MOBILE" });
    } else {
      dispatch({ type: "CHANGE_VIEW_DESKTOP" });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeView);
    changeView();
    return window.removeEventListener("resize", changeView);
  }, []);

  return (
    <>
      <header className="shadow">
        <div className="container d-flex align-content-center justify-content-between  py-3">
          <div className="fs-4 fw-semibold">Navbar</div>
          <NavLinks state={state}></NavLinks>
          <NavSocials state={state}></NavSocials>
        </div>
      </header>
    </>
  );
};

export default Navbar;
