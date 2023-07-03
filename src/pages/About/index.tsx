import { ReactElement, FC } from "react";
import "./index.css";

const Home: FC = (): ReactElement => {
  return (
    <>
      <div className="image-overlay-content">
        <h1 className="text-white text-center display-4 p-4">About</h1>
      </div>
      <div className="p-4 text-white">
        <div className="row py-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-secondary">Creativity Meets Technology</h3>
            <p>
              I'm Garrett, a former classical musician turned web designer and software engineer based in Los Angeles.
              With a passion for both artistry and technology, I bring a unique perspective to the world of web design.
              What sets me apart from other web designers in Los Angeles is my unique blend of artistry and technology.
              With a background in branding and marketing, I not only have the technical skills to bring your website to
              life, but also the ability to capture your essence and infuse it into the design. I strive to create
              websites that feel personal, engaging, and true to your brand.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">My Craft</h3>
            <p>
              I specialize in crafting visually stunning and highly functional websites. I have a deep understanding of
              the needs and challenges faced by creatives and entrenpenuers in the digital landscape. I am dedicated to
              providing tailored web design solutions that align with your vision and goals.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-secondary">Inspired by Clarity</h3>
            <p>
              What sets me apart from other web designers in Los Angeles is my unique blend of artistry and technology.
              With a background in branding and marketing, I not only have the technical skills to bring your website to
              life, but also the ability to capture your essence and infuse it into the design. I strive to create
              websites that feel personal, engaging, and true to your brand.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">Visit My Portfolio</h3>
            <p>
              I have had the pleasure of working with amazing clients. Each project has presented unique challenges and
              opportunities for growth, further enhancing my skills as a web designer. To see examples of my previous
              work, please visit my portfolio at garrettjohnlawdesign.com/portfolio. I believe the quality of my work
              speaks for itself, and I am confident it will inspire you to envision what we can create together.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-secondary">Using Cutting-Edge Technologies</h3>
            <p>
              To bring your vision to life, I utilize cutting-edge technologies such as React and Bootstrap. These tools
              enable me to create custom themes and layouts that are both visually captivating and highly functional. I
              can incorporate various features, including custom plugins, embeddable content, social posts, and much
              more.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">Client Satisfaction is my Priority</h3>
            <p>
              My commitment to client satisfaction is unwavering. I believe in fostering clear communication, setting
              realistic expectations, and over-delivering on my promises. Your happiness is my ultimate goal, and I am
              dedicated to providing you with an exceptional web design experience.
            </p>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h3 className="text-secondary">Beyond Web Design</h3>
            <p>
              In addition to my passion for web design, I am a full-fledged software engineer at Re:Build Manufacturing,
              where I create scalable solutions to bring manufacturing back to the United States. Outside of work, I
              find joy in my role as an organist and choir director at Holy Trinity Episcopal Church in Covina, CA. I am
              also an avid composer and enjoy spending time with my adorable cat, Claudia. Recently, I've had the joy of
              getting engaged to my sweetheart, Danielle Dinstman, who is an artist herself. You can explore her
              artistic world at danielledinstman.com.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="text-secondary">Let's Create Something Extraordinary</h3>
            <p>
              If you're ready to take your online presence to new heights, let's collaborate! Together, we'll bring your
              vision to life and create a website that leaves a lasting impression. Contact me today to get started on
              your exciting web design journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
