const NavLinks = (state) => {
  console.log(state.state.mobileView);
  return (
    <>
      {state.state.mobileView && (
        <nav className="w-100">
          <ul className="list-unstyled d-flex flex-column align-items-start gap-4 p-4 mb-0 w-100 ">
            <li className="w-100">
              <button className="btn w-100 ms-nav-btn">Home</button>
            </li>
            <li className="w-100">
              <button className="btn w-100 ms-nav-btn">Chi siamo</button>
            </li>
            <li className="w-100">
              <button className="btn w-100 ms-nav-btn">Progetti</button>
            </li>
            <li className="w-100">
              <button className="btn w-100 ms-nav-btn">Contattaci</button>
            </li>
          </ul>
        </nav>
      )}
      {!state.state.mobileView && (
        <nav>
          <ul className="list-unstyled d-flex align-items-center gap-3 mb-0">
            <li>
              <button className="btn w-100 ms-nav-btn">Home</button>
            </li>
            <li>
              <button className="btn w-100 ms-nav-btn">Chi siamo</button>
            </li>
            <li>
              <button className="btn w-100 ms-nav-btn">Progetti</button>
            </li>
            <li>
              <button className="btn w-100 ms-nav-btn">Contattaci</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavLinks;
