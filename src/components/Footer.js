import React from "react";
import "./footer.css";

import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <p className="col-1-heading">Elsewhere</p>
            <div className="link-wrap">
              <a href="#">github</a>
              <a href="#">figma</a>
              <a href="#">twitter</a>
              <a href="#">instagram</a>
              <a href="#">linkedIn</a>
              <a href="#">resume</a>
            </div>
          </div>
          <div className="col-2">
            <p className="col-2-heading">contact</p>
            <div className="link-wrap">
              <p className="ph-number">+91862508976</p>
            </div>
          </div>
          <div className="col-3">
            <p className="col-3-text">
              <AiOutlineCopyright className="copyright" />
              2023 viraj chavan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
