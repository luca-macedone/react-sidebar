import { useContext } from "react";
import MyContext from "./MyContext";

const Links = () => {
  const { state } = useContext(MyContext);

  return (
    <>
      <ul className="list-unstyled align-items-start align-items-lg-center gap-0 gap-lg-4 mb-0 d-flex flex-column flex-lg-row pt-2 pt-lg-0">
        <li className={state.mobileView ? "w-100" : ""}>
          <button
            type="button"
            className={
              state.mobileView
                ? "btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 py-1 text-nowrap ms-fs-7 text-center"
                : "btn ms-link-btn text-decoration-none text-muted fw-semibold rounded-pill py-1 text-nowrap"
            }
          >
            Home
          </button>
        </li>
        <li className={state.mobileView ? "w-100" : ""}>
          <button
            type="button"
            className={
              state.mobileView
                ? "btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 py-1 text-nowrap ms-fs-7 text-center"
                : "btn ms-link-btn text-decoration-none text-muted fw-semibold rounded-pill py-1 text-nowrap"
            }
          >
            Chi siamo
          </button>
        </li>
        <li className={state.mobileView ? "w-100" : ""}>
          <button
            type="button"
            className={
              state.mobileView
                ? "btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 py-1 text-nowrap ms-fs-7 text-center"
                : "btn ms-link-btn text-decoration-none text-muted fw-semibold rounded-pill py-1 text-nowrap"
            }
          >
            Progetti
          </button>
        </li>
        <li className={state.mobileView ? "w-100" : ""}>
          <button
            type="button"
            className={
              state.mobileView
                ? "btn ms-link-btn text-decoration-none text-muted fw-semibold w-100 py-1 text-nowrap ms-fs-7 text-center"
                : "btn ms-link-btn text-decoration-none text-muted fw-semibold rounded-pill py-1 text-nowrap"
            }
          >
            Contatti
          </button>
        </li>
      </ul>
    </>
  );
};

export default Links;
