import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import MyContext from "./MyContext";

const Modal = () => {
  const { state, dispatch } = useContext(MyContext);
  const handleClick = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <div
          className="bg-light shadow-lg rounded-3 p-3"
          id="modal"
        >
          <div className="d-flex justify-content-end align-items-center py-3">
            <button
              type="button"
              className="btn btn-danger rounded-3"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </button>
          </div>
          <h5>Lorem ipsum dolor</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aut in nemo, voluptatem asperiores natus nam minus recusandae
            architecto voluptate ratione doloribus, consectetur non? Doloremque
            qui animi accusamus veniam consequatur!
          </p>
        </div>
      )}
    </>
  );
};

export default Modal;
