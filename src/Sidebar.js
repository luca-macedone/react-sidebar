import { useContext } from "react";
import MyContext from "./MyContext";
import Links from "./Links";
import Socials from "./Socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { state, dispatch } = useContext(MyContext);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      {state.isSidebarOpen && (
        <aside
          // style={status.isSidebarOpen ? { translate: 100 } : null}
          className=" min-vh-100 min-vw-100 bg-light"
          id="sidebar"
        >
          <div className="container py-3 d-flex flex-column gap-5">
            <div className="w-100 d-flex align-items-center justify-content-end">
              <button
                type="button"
                className="btn btn-danger rounded-3"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
              </button>
            </div>
            <Links></Links>
            <Socials></Socials>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
