import { ReactElement, FC, useRef } from "react";
import emailjs from "@emailjs/browser";

const Home: FC = (): ReactElement => {
  return (
    <div className="row justify-content-center text-center p-4 text-white">
      <h1 className="mb-5 display-4">Contact</h1>
      <div className="col-12 col-4 col-lg-4">
        <h2>Send a message</h2>
        <form action="https://formspree.io/f/xbjvrvdb" method="POST" className="mb-3 d-flex flex-column gap-3">
          <div className="form-group">
            <input className="form-control form-control-lg" type="text" required placeholder="Name" name="Name" />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="email" required placeholder="Email" name="Email" />
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <textarea
              className="form-control form-control-lg"
              placeholder="Message"
              name="Message"
              required
              rows={4}
            ></textarea>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="text-white col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center">
        <h2 className="mb-5">Book a phone call</h2>
        <a href="https://calendly.com/garrettjohnlaw/30min" target="_blank">
          <button className="btn btn-lg btn-primary btn-block">Book Now</button>
        </a>
      </div>
    </div>
  );
};
export default Home;
