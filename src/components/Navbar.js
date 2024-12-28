import React from "react";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${props.mode}`}
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li> */}
          </ul>

          {/* Pagination */}
          <div className="mt-3 me-3">
            <ul className="pagination">
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={()=>props.onBackgroundChange('red')}
                >
                  red
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={()=>props.onBackgroundChange('blue')}
                >
                  blue
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  onClick={()=>props.onBackgroundChange('green')}
                >
                  green
                </button>
              </li>
            </ul>
          </div>

          {/* ************************* */}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch ms-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.defaultProps={
//     title:'set title here',
//     aboutText:'set about text here'
// };

export default Navbar;
