import { ReactElement, FC } from "react";
import "./index.css";

const About: FC = (): ReactElement => {
  return (
    <div className="about-container text-white">
      <h1 className="text-center display-4 pt-4">About Me</h1>
      <div className="image-overlay-content"></div>

      <div className="container p-4">
        {/* Professional Background */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-secondary">
            <i className="bi bi-code-slash"></i> Professional Background
          </h3>
          <p>
            I'm a mid-level full stack engineer with 3 years of experience, currently working at Re:Build Manufacturing
            in Los Angeles. My expertise spans backend and frontend development, cloud infrastructure, and scalable
            system design.
          </p>
          <p>
            I specialize in .NET, TypeScript, React, GraphQL, AWS, and CI/CD pipelines, with a growing focus on
            Infrastructure as Code (IaC) and Terraform.
          </p>
        </section>

        {/* Journey */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-secondary">
            <i className="bi bi-briefcase"></i> My Journey
          </h3>
          <p>
            I built my first website in 2014, and that curiosity grew into a passion for software engineering and
            digital strategy. Over the years, I've developed high-quality applications for both startups and established
            businesses, focusing on performance, scalability, and maintainability.
          </p>
          <p>
            I strive to deliver reliable, scalable, and user-centric software, whether it's enterprise applications,
            cloud infrastructure, or innovative digital solutions.
          </p>
        </section>

        {/* My Approach */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-secondary">
            <i className="bi bi-lightbulb"></i> My Approach
          </h3>
          <p>
            My work is driven by problem-solving, efficiency, and user experience. I take a product-focused approach,
            ensuring technology meets real-world business needs. Clean architecture, scalability, and maintainability
            are key principles in my engineering philosophy.
          </p>
          <p>I believe in building software that is robust, intuitive, and future-proof.</p>
        </section>

        {/* Portfolio & Work */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-secondary">
            <i className="bi bi-window"></i> Portfolio & Work
          </h3>
          <p>
            I’ve worked with clients across real estate, manufacturing, and digital strategy, building custom solutions
            that streamline business operations. My experience includes full-stack web applications and cloud-native
            backend services.
          </p>
          <p className="mb-3">Explore my latest work here:</p>
          <a href="/portfolio" className="btn btn-lg btn-secondary">
            View Portfolio
          </a>
        </section>

        {/* Beyond Engineering */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-warning">
            <i className="bi bi-cpu"></i> Beyond Engineering
          </h3>
          <p>
            Outside of coding, I have a background in music and still work as a church musician. I also enjoy real
            estate investment and automation, combining technology with business strategy.
          </p>
          <p>
            When I’m not at my desk, you’ll likely find me hiking, playing the pipe organ, or experimenting with cloud
            infrastructure.
          </p>
        </section>

        {/* Let's Connect */}
        <section className="about-section text-center text-md-start">
          <h3 className="text-warning">
            <i className="bi bi-chat-dots"></i> Let's Connect
          </h3>
          <p>
            Whether you're a recruiter looking for a skilled full-stack engineer or a business needing digital
            solutions, I’d love to chat. I bring a blend of technical expertise and strategic thinking to every project.
          </p>
          <p className="mb-3">Feel free to reach out—let’s build something great together!</p>
          <a href="mailto:garrett@garrettjohnlaw.com" className="btn btn-lg btn-warning">
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
