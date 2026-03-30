import { Accordion } from "react-bootstrap";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar header-nav navbar-expand-lg one-page-nav">
        <div className="container">
          <a className="navbar-brand" href="#">
           <img
              src="assets/img/logo.png"
              alt="logo"
              style={{
                width: "150px",
                height: "auto",
                marginTop: "-20px",    // move logo up
                marginBottom: "-20px", // move logo down
              }}
            />
          </a>
          <Accordion>
            <Accordion.Toggle
              eventKey={"toggle"}
              as={"button"}
              className="navbar-toggler"
            >
              <span />
              <span />
              <span />
            </Accordion.Toggle>
            <Accordion.Collapse
              eventKey={"toggle"}
              className="navbar-collapse justify-content-end"
            >
              <ul className="navbar-nav mx-auto">
                <li>
                  <a className="nav-link active" href="#home">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#services">
                    <span>Services</span>
                  </a>
                </li>
              
                <li>
                  <a className="nav-link" href="#process">
                    <span>Process</span>
                  </a>
                </li>
                  <li>
                  <a className="nav-link" href="#skills">
                    <span>Skills</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work">
                    <span>Portfolio</span>
                  </a>
                </li>
                
                <li>
                  <a className="nav-link" href="#contactus">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
          </Accordion>
          <div className="ms-auto d-none d-lg-block">
            <a className="px-btn px-btn-theme2" href="#contactus">
              Contact Now
            </a>
          </div>
        </div>
      </nav>{" "}
    </header>
  );
};
export default Header;
