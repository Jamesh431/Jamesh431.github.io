import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import DownloadPopup from "../util/DownloadPopup";
import resumeArray from "../helpers/resumeArray";

export default function Navbar(props) {
  const [currentPosition, setCurrentPosition] = useState("");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  useEffect(() => {
    props.history?.push(`/${currentPosition}`);
  }, [currentPosition]);

  return (
    <div className="header">
      <div className="navigation">
        <div className="home-container">
          <NavLink
            className="nav-link-wrapper home"
            to="/home"
            onClick={() => setCurrentPosition("Home")}
          >
            home
          </NavLink>
        </div>

        <div className="links-container">
          <div className="header-option-wrapper linkedin">
            <a
              id="link-wrapper linkedin"
              href="https://www.linkedin.com/in/james-d-hales"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="header-option-wrapper github">
            <NavLink
              className="nav-link-wrapper github"
              to="/github"
              onClick={() => setCurrentPosition("Github")}
            >
              github
            </NavLink>
          </div>

          <div
            className="header-option-wrapper coverletter"
            onMouseEnter={() => setShowDownloadOptions(true)}
            onMouseLeave={() => setShowDownloadOptions(false)}
          >
            {showDownloadOptions && (
              <DownloadPopup list_of_data={resumeArray} />
            )}
            {!showDownloadOptions ? "Resume(s)" : null}
          </div>
        </div>
      </div>

      <div className="header-title">
        {currentPosition === "Home" || currentPosition === "Github" ? null : (
          <h1>{currentPosition}</h1>
        )}
      </div>
    </div>
  );
}
