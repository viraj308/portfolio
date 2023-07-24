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
              <a href="#" target="_blank">
                resume
              </a>
            </div>
          </div>
          <div className="col-2">
            <p className="col-2-heading">contact</p>
            <div className="link-wrap">
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
