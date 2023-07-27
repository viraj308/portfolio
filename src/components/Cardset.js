import Card from "./Card.js";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.png";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";

import "./cardset.css";

export default function Cardset() {
  return (
    <div className="cards-wrapper">
      <div className="container">
        <div className="cards-content">
          <div className="cardset-title">my work</div>
          <ul className="cards-flex">
            <div className="cards-1">
              <Card
                link="https://github.com/viraj308/Stats-Card-Component"
                src={img1}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />
              <Card
                link="https://github.com/viraj308/Qr-code"
                src={img2}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />
              <Card
                link="https://github.com/viraj308/Profile-Card-Component"
                src={img3}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />
            </div>
            <div className="cards-2">
              <Card
                link="https://github.com/viraj308/NFT-Card-Component"
                src={img4}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />

              <Card
                link="https://github.com/viraj308/3-column-preview-card-component"
                src={img5}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />
              <Card
                link="https://github.com/viraj308/Order-Summary-Component"
                src={img6}
                title="A simple card component project"
                text="A simple responsive card component designed using plain HTML and CSS for a friend"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
