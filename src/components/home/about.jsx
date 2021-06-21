import aboutImg from "./../../assets/images/about-photo-2.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <article className="about-content customContainer">
        <h1>About the software development track</h1>
        <div className="about-top">
          <img alt="" src={aboutImg} className="custom-card-box" />
          <div>
            <p>
              This was the second largest track during the 2021 weomen techsters
              fellowship. Every fellow was exicited to be part of this track
              with great goals.
              <br />
              The Curriculum for the sotfware development track covered HTML,
              CSS, JavaScript, React and .Net framework. The program traning was
              for a duration of 3 months.Fellow carried out weekly tasks, mini
              projects and personal projects during this phase.
              <br/>
              <Link to="/signup">
                <button className="btn btn-lg btn-info text-white mb-4 mt-3">
                  Start here to view
                </button>
              </Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
