import { useState } from "react";
import { NavLink } from "react-router-dom";

import downloadPopup from "src/components/util/downloadPopup.js";
import resumse_array from "src/helpers/resume_array.js";

export default function Navbar() {
  const [currentPosition, setCurrentPosition] = useState("");
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  return (
    <div className="header">
      <div className="navigation">
        <div className="home-container">
          <NavLink className="nav-link-wrapper home" to="/">
            <a onClick={setCurrentPosition("home")}>home</a>
          </NavLink>
        </div>

        <div className="links-container">
          <div className="header-option-wrapper linkedin">
            <a
              className="link-wrapper linkedin"
              href="www.linkedin.com/in/james-d-hales"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="header-option-wrapper github">
            <NavLink className="nav-link-wrapper github" to="/github">
              <a onClick={setCurrentPosition("github")}>github</a>
            </NavLink>
          </div>

          <div
            className="header-option-wrapper coverletter"
            onMouseEnter={setShowDownloadOptions(true)}
            onMouseLeave={setShowDownloadOptions(false)}
          >
            {showDownloadOptions && (
              <downloadPopup list_of_data={resumse_array} />
            )}
            Resume(s)
          </div>
        </div>
      </div>

      <div className="header-title">
        {currentPosition == "Landing" || currentPosition == "Github" ? null : (
          <h1>{currentPosition}</h1>
        )}
      </div>
    </div>
  );
}
