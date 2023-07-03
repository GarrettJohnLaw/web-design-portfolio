import { ReactElement, FC } from "react";
import Button from "react-bootstrap/Button";

const Home: FC = (): ReactElement => {
  return (
    <div className="row justify-content-center text-center py-5 text-white">
      <h1 className="mb-5">Contact</h1>
      <div className="col-12 col-md-6 col-lg-4">
        <h2>Send a message</h2>
        <form className="mb-3 d-flex flex-column gap-3">
          <div className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="email" placeholder="Email" />
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <textarea className="form-control form-control-lg" placeholder="Message" rows={4}></textarea>
          </div>
          <button className="btn btn-lg btn-primary btn-block">Send</button>
        </form>
      </div>
      <div className="text-white col-12 col-md-6 col-lg-4">
        <h2>Or book a phone call</h2>
        <a href="https://calendly.com/garrettjohnlaw/30min" target="_blank">
          <button className="btn btn-lg btn-primary btn-block">Book Now</button>
        </a>
      </div>
    </div>
  );
};
export default Home;
