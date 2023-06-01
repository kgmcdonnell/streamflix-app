export function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "rgba(22,22,22", paddingBottom: "50px", paddingLeft: "50px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            Streamflix
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "white" }}>
                  <small>Home</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  <small>TV Shows</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  <small>Movies</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  <small>New & Popular</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  <small>My List</small>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }}>
                  <small>Browse by Languages</small>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                <small> Search</small>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
