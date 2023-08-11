import "./cards2.css";
import img1 from "../images/aniwatch-website.png";
import img2 from "../images/calculator.png";

export default function Cards2() {
  return (
    <div className="Cards2">
      <div className="container">
        <h2 className="Cards2-heading">My projects</h2>
        <div className="Cards2-flex">
          <div className="card-1">
            <div className="card-1-image-wrapper">
              <a
                href="https://github.com/viraj308/aniwatch-landing-page.git"
                target="_blank"
                className="card-1-link"
              >
                <img className="card-1-image" src={img1} />
              </a>
            </div>
            <div className="card-1-text">
              <p className="card-1-para">
                A landing page for an anime streaming site
              </p>
            </div>
          </div>
          <div className="card-1">
            <div className="card-1-image-wrapper">
              <a
                href="https://github.com/viraj308/react-calculator.git"
                target="_blank"
                className="card-1-link"
              >
                <img className="card-1-image" src={img2} />
              </a>
            </div>
            <div className="card-1-text">
              <p className="card-1-para">A Complex calculator using React.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
