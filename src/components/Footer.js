import React from "react";
import "./footer.css";

import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer-text">
          <div className="footer-logo">VIRU</div>
          <p className="footer-para">
            Do not hesitate to contact me to discuss a possible project or learn
            more about my work.
          </p>
        </div>
        <div className="row">
          <div className="col-1">
            <p className="col-1-heading">Elsewhere</p>
            <div className="link-wrap">
              <a href="https://github.com/viraj308" target="_blank">
                github
              </a>
              <a href="https://www.figma.com/@viraj308" target="_blank">
                figma
              </a>
              <a
                href="https://twitter.com/VirajCh88003550?s=20"
                target="_blank"
              >
                twitter
              </a>
              <a
                href="https://www.instagram.com/virajchavan308/"
                target="_blank"
              >
                instagram
              </a>
              <a
                href="https://www.linkedin.com/in/viraj-chavan-84572a206/"
                target="_blank"
              >
                linkedIn
              </a>
              <a href="https://viraj308.github.io/Resume/" target="_blank">
                resume
              </a>
            </div>
          </div>
          <div className="col-2">
            <p className="col-2-heading">contact</p>
            <div className="link-wrap">
              <p className="email">virajchavan308@gmail.com</p>
              <p className="ph-number">+918625069841</p>
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
