import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./Navbar";
import reducer from "./Reducer";
import Sidebar from "./Sidebar";
import MyContext from "./MyContext";
import Modal from "./Modal";

function App() {
  const initialState = {
    isModalOpen: false,
    isSidebarOpen: false,
    mobileView: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar></Navbar>
        <div className="container relative">
          <div className="row ms-h-full">
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn ms-modal-btn rounded-pill text-uppercase px-4 shadow fw-semibold"
                onClick={handleClick}
              >
                Apri Modal
              </button>
            </div>
          </div>
          <Modal></Modal>
        </div>
        <Sidebar></Sidebar>
      </div>
    </MyContext.Provider>
  );
}

export default App;
