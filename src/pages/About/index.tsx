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
              <i className="bi bi-music-note-beamed"></i> Expression Meets Technology
            </h3>

            <p>
              I'm Garrett, a former classical musician turned web designer and software engineer based in Los Angeles.
              With a passion for both artistry and technology, I bring a unique perspective to the world of web design.
              I not only have the technical skills to bring your website to life, I capture your essence and infuse it
              into the design. I strive to create websites that feel personal, engaging, and true to your brand.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">
              <i className="bi bi-brush"></i> My Craft
            </h3>
            <p>
              I've been building websites with Squarespace since 2014 and I've been a Software Engineer at Re:Build
              Manufacturing since February 2022. I specialize in crafting visually stunning and highly functional
              websites. I have a deep understanding of the needs and challenges faced by creatives and entrenpenuers in
              the digital landscape.
            </p>
          </div>
        </div>
        {/* <a href="https://garrettjohnlaw.com" className="btn btn-secondary col-md-4 btn-lg" target="_blank">
          Learn More About Me
        </a> */}
        <div className=" text-white d-flex flex-column align-items-center">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-secondary">
                <i className="bi bi-eyeglasses"></i> Inspired by Clarity
              </h3>
              <p>
                What sets me apart from other web designers in Los Angeles is my unique blend of artistry and
                technology. With a background in branding and marketing, I not only have the technical skills to bring
                your website to life, but also the ability to capture your essence and infuse it into the design. I
                strive to create websites that feel personal, engaging, and true to your brand.
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
          <a href="https://garrettjohnlawdesign.com/portfolio" className="btn col-md-4 btn-lg btn-secondary">
            Checkout My Portfolio
          </a>
        </div>
        <div className="p-1 text-white d-flex flex-column align-items-center">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-warning">
                <i className="bi bi-cpu"></i> I Use Modern Technology
              </h3>
              <p>
                I use Squarespace for static websites and I build interactive sites with React, Vercel, Payload CMS, and
                Amazon Web Services. This allows me to create custom themes and layouts that are both visually
                captivating and highly functional. Your website will look great on a variety of screen sizes including
                mobile, tablet, and desktop devices.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-warning">
                <i className="bi bi-person-heart"></i> Client Satisfaction is my Priority
              </h3>
              <p>
                My commitment to client satisfaction is unwavering. I hope you are excited to get your own custom
                website. Your happiness is my ultimate goal, and I am dedicated to providing you with an exceptional web
                design experience. I use Squarespace so that you have the best experience possible.
              </p>
            </div>
          </div>
          <a href="/services" className="btn col-md-4 btn-lg btn-warning" target="_blank">
            See My Services
          </a>
        </div>
        <div className="p-1 text-white d-flex flex-column align-items-center">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-danger">
                <i className="bi bi-emoji-sunglasses-fill"></i> Beyond Web Design
              </h3>
              <p>
                In addition to my passion for web design, I am a software engineer at Re:Build Manufacturing, where I'm
                creating solutions to revive manufacturing in the United States. I also enjoy petting my cat Claudia and
                going on sunrise hikes. Recently, I've had the joy of getting engaged to my sweetheart, Danielle
                Dinstman, who is an artist herself. You can explore her art at
                <a href="https://danielledinstman.com" className="text-danger" target="_blank">
                  {" "}
                  danielledinstman.com
                </a>
                .
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-stars"
                >
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                </svg>{" "}
                Let's Create Something Extraordinary
              </h3>
              <p>
                If you're ready to take your online presence to new heights, let's collaborate. Together, we'll bring
                your vision to life and create a website that leaves a lasting impression. Let's get your website
                started today!
              </p>
            </div>
          </div>
          <a
            href="https://garrettjohnlawdesign.com/get-started"
            className="btn col-md-4 btn-lg btn-danger"
            target="_blank"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
