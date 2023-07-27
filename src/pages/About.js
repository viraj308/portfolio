import "./about.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="container">
          <h1 className="about-heading">About Me</h1>
          <p className="about-para">
            Highly motivated beginner front-end developer. Started learning
            web-dev a couple months back from a book. Driven and permanently
            curious, inspired by the numerous intuitive web designs over the
            internet. A third year university student. A big fan of Anime, manga
            and a beginner japanese language student.
          </p>
          <hr className="line" />
          <div className="social-icons">
            <a href="#">
              <AiFillTwitterCircle size={40} color="white" />
            </a>
            <a href="#">
              <AiFillInstagram size={40} color="white" />
            </a>
            <a href="#">
              <AiFillLinkedin size={40} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
