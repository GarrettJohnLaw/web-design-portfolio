import { ReactElement, FC } from "react";
import "./index.css";

const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="image-overlay-content"></div>
      <h1 className="text-white text-center display-4 pt-4">About Me</h1>
      <div className="p-4 text-white d-flex flex-column align-items-center">
        <div className="row pt-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-secondary">
              <i className="bi bi-music-note-beamed"></i> My expertise
            </h3>

            <p>
              As a full stack engineer, I thrive in both frontend and backend development. I have a keen eye for design
              and enjoy creating engaging user interfaces. On the backend, I'm fluent in multiple technologies and AWS
              cloud services, ensuring robust and scalable solutions.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">
              <i className="bi bi-brush"></i> My Journey
            </h3>
            <p>
              Currently, I'm proud to be part of the team at Re:Build Manufacturing, a startup where I wear many hats
              and tackle various responsibilities. It's here that I've had the opportunity to dive deep into coding,
              using a diverse range of technologies to solve real-world problems.
            </p>
          </div>
        </div>
        <div className=" text-white d-flex flex-column align-items-center">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-secondary">
                <i className="bi bi-eyeglasses"></i> My Approach
              </h3>
              <p>
                When it comes to my work, I approach it from a product standpoint. User experience and value are always
                at the forefront of my mind. I prioritize clean design, maintainability, extensibility, and readability
                in my code, striving for the highest quality in everything I do.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="text-secondary">
                <i className="bi bi-laptop"></i> See My Work
              </h3>
              <p>
                I have had the pleasure of working with amazing clients. Each project has presented unique challenges
                and opportunities for growth, further enhancing my skills as a web designer. To see examples of my
                previous work, please visit my portfolio. I believe the quality of my work speaks for itself, and I am
                confident it will inspire you to envision what we can create together.
              </p>
            </div>
          </div>
        </div>
        <div className="p-1 text-white d-flex flex-column align-items-center">
          <div className="row py-3">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-warning">
                <i className="bi bi-cpu"></i> Beyond Coding
              </h3>
              <p>
                In addition to my work as a software engineer, I'm also a freelance web designer. Outside of the tech
                world, you can find me hiking, playing the pipe organ, and eating sushi. Whether it's exploring new
                hiking trails or unleashing my creativity through freelance projects, I believe in living life to the
                fullest and finding inspiration in everything around me.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-warning">
                <i className="bi bi-person-heart"></i> Let's Connect!
              </h3>
              <p>
                Whether you're looking to collaborate on a project, discuss the latest tech trends, or simply chat about
                life, I'd love to connect! Feel free to reach out, and let's explore how we can work together to create
                something amazing.
              </p>
            </div>
          </div>
          <a href="https://garrettjohnlawdesign.com/portfolio" className="btn col-md-4 btn-lg btn-secondary">
            Visit My Portfolio
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
