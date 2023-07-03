import { ReactElement, FC, useRef } from "react";
import emailjs from "@emailjs/browser";

const Home: FC = (): ReactElement => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm("service_zi63tah", "template_idsh4nn", e.currentTarget, "rnl3MlgwYTI4HErkf").then(
      (result) => {
        console.log(result);
        // show the user a success message
      },
      (error) => {
        console.error(error);
        // show the user an error
      }
    );
  };

  return (
    <div className="row justify-content-center text-center py-5 text-white">
      <h1 className="mb-5">Contact</h1>
      <div className="col-12 col-md-6 col-lg-4">
        <h2>Send a message</h2>
        <form ref={form} onSubmit={() => sendEmail} className="mb-3 d-flex flex-column gap-3">
          <div className="form-group">
            <input className="form-control form-control-lg" type="text" required placeholder="Name" />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg" type="email" required placeholder="Email" />
          </div>
          <div className="form-group"></div>
          <div className="form-group">
            <textarea className="form-control form-control-lg" placeholder="Message" required rows={4}></textarea>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Send
          </button>
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
