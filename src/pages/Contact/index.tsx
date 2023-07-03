import { ReactElement, FC } from "react";

const Home: FC = (): ReactElement => {
  return (
    <div className="m-5 d-flex flex-column align-items-center justify-content-center">
      <div className="w-50 text-white">
        <h2 className="text-secondary">Contact</h2>
        <label>Name</label>
        <input
          className="form-control form-control-lg"
          type="texr"
          placeholder="name"
          aria-label=".form-control-lg example"
        />
        <label>Email</label>
        <input
          className="form-control form-control-lg"
          type="email"
          placeholder="email"
          aria-label=".form-control-lg example"
        />
        <label>Message</label>
        <textarea
          className="form-control form-control-lg"
          placeholder="message"
          aria-label=".form-control-lg example"
        />
      </div>
    </div>
  );
};
export default Home;
