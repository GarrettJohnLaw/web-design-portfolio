import { ReactElement, FC } from "react";

const Home: FC = (): ReactElement => {
  return (
    <div className="p-4">
      <h1 className="huge-font text-white text-center display-4">Services</h1>;
      <div className="row justify-content-between text-center py-md-5 text-white">
        <div className="col-12 col-md-4">
          <div className="py-5 py-md-0">
            <i className="bi bi-star"></i>
            <h3>Portfolio Package</h3>
            <p className="mb-3 text-white">3-5 pages</p>
            <p className="mb-3 text-white">5 custom integrations</p>
            <p className="mb-3 text-white">A refined website experience</p>
            <p className="mb-3 text-white">A responsive and mobile-first design</p>
            <p className="mb-3 text-white">Submit form end email collection</p>
            <p className="mb-3 text-white">Embedded content</p>
            <div className="price-small mb-3">$499+</div>
            <a href="/get-started" className="btn btn-warning text-dark">
              Get Started
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="py-5 py-md-0">
            <i className="bi bi-star-fill"></i>
            <h3>Small Business Package</h3>
            <p className="mb-3">6-8 pages</p>
            <p className="mb-3 text-white">10 custom integrations</p>
            <p className="mb-3">All of Portfolio Package plus:</p>
            <p className="mb-3 text-white">A storefront up to 25 products</p>
            <p className="mb-3 text-white">Schedule appointments and reservations</p>
            <p className="mb-3 text-white">Search Engine Optimization</p>
            <p className="mb-3 text-white">Opportunity for blog package</p>
            <div className="price-small mb-3">$999+</div>
            <a href="/get-started" className="btn btn-light text-dark">
              Get Started
            </a>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="py-5 py-md-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-stars"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
            <h3>Ecommerce Package</h3>
            <p className="mb-3">8-12 Pages</p>
            <p className="mb-3 text-white">A storefront up to 50 products</p>
            <p className="mb-3">All of Nonprofit Package plus:</p>
            <p className="mb-3">DoorDash, Uber Eats, Grubhub integrations</p>
            <p className="mb-3">All of Nonprofit Package plus:</p>
            <p className="mb-3">All of Nonprofit Package plus:</p>
            <div className="price-small mb-3">$1499+</div>
            <a href="/get-started" className="btn btn-secondary text-white">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
