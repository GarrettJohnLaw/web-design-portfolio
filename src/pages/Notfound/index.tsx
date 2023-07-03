import { Link } from "react-router-dom";

function PagesError404(): JSX.Element {
  return (
    <div className="container">
      <section className="section min-vh-100 d-flex flex-column align-items-center">
        <code className="display-1 pt-5 code enormous-text ">
          <span className="text-primary opacity-25">404</span>
        </code>
        <p className="lead">Like the noble unicorn, the page you are looking for doesn&apos;t exist.</p>
        <div data-bs-theme="light">
          <Link to="/">
            <button type="button" className="btn btn-outline-primary">
              Back home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default PagesError404;
