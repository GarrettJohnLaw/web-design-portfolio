function Footer() {
  return (
    <>
      <div className="row align-items-center py-4">
        <div className="col-12 col-lg-8 navbar-expand text-center weight-500 w-100">
          <div className="navbar-nav d-block d-lg-flex justify-content-center">
            <div className="nav-item">
              <a className="nav-link text-white" href="/contact">
                Contact
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-white" href="/portfolio">
                Portfolio
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-white" href="/services">
                Services
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-white" href="/">
                Home
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 d-lg-none text-center p-0">
          <a className="transparent-invert-link mx-1" href="https://instagram.com/garrettjohnlaw_">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-link"></i>
          </a>
          <a className="transparent-invert-link mx-1" href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      {/* <div className="row pb-3">
        <div className="col-12 text-center small">
          <span className="text-muted mr-1">&copy; 2023 Garrett John Law. All right reserved.</span>
          <a className="d-block d-lg-inline text-muted mx-1" href="privacy-policy">
            <span>Privacy Policy</span>
          </a>
          <a className="d-block d-lg-inline text-muted mx-1" href="">
            <span>Terms of Service</span>
          </a>
        </div>
      </div> */}
    </>
  );
}
export default Footer;
