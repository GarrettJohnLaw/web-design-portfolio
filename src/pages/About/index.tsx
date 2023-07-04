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
            <h3 className="text-secondary">Expression Meets Technology</h3>
            <p>
              I'm Garrett, a former classical musician turned web designer and software engineer based in Los Angeles.
              With a passion for both artistry and technology, I bring a unique perspective to the world of web design.
              I not only have the technical skills to bring your website to life, I capture your essence and infuse it
              into the design. I strive to create websites that feel personal, engaging, and true to your brand.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">My Craft</h3>
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
              <h3 className="text-secondary">Inspired by Clarity</h3>
              <p>
                What sets me apart from other web designers in Los Angeles is my unique blend of artistry and
                technology. With a background in branding and marketing, I not only have the technical skills to bring
                your website to life, but also the ability to capture your essence and infuse it into the design. I
                strive to create websites that feel personal, engaging, and true to your brand.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="text-secondary">See My Work</h3>
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
              <h3 className="text-warning">I Use Modern Technology</h3>
              <p>
                I use Squarespace for static websites and I build interactive sites with React, Vercel, Payload CMS, and
                Amazon Web Services. This allows me to create custom themes and layouts that are both visually
                captivating and highly functional. Your website will look great on a variety of screen sizes including
                mobile, tablet, and desktop devices.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <h3 className="text-warning">Client Satisfaction is my Priority</h3>
              <p>
                My commitment to client satisfaction is unwavering. I hope you are excited to get your own custom
                website. Your happiness is my ultimate goal, and I am dedicated to providing you with an exceptional web
                design experience. I use Squarespace so that you have the best experience possible.
              </p>
            </div>
          </div>
          <a href="https://squarespace.com/website-design" className="btn col-md-4 btn-lg btn-warning" target="_blank">
            See My Services
          </a>
        </div>
        <div className="p-1 text-white d-flex flex-column align-items-center">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h3 className="text-danger">Beyond Web Design</h3>
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
              <h3 className="text-danger">Let's Create Something Extraordinary</h3>
              <p>
                If you're ready to take your online presence to new heights, let's collaborate. Together, we'll bring
                your vision to life and create a website that leaves a lasting impression. Let's get your website
                started today!
              </p>
            </div>
          </div>
          <a href="https://garrettjohnlawdesign.com/contact" className="btn col-md-4 btn-lg btn-danger" target="_blank">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
