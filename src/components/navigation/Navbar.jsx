import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import EasyModal from "../modals/EasyModal";
import ResumesModal from "../modals/ResumesModal";

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
            Home
          </NavLink>
        </div>

        <div className="links-container">
          <div className="header-option-wrapper github">
            <NavLink
              className="nav-link-wrapper github"
              to="/github"
              onClick={() => setCurrentPosition("Github")}
            >
              Github
            </NavLink>
          </div>

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

          <div className="header-option-wrapper resumes">
            <a
              id="show-resumes-button"
              onClick={() => setShowDownloadOptions(true)}
            >
              Resumes(s)
            </a>
          </div>

          <div className="header-option-wrapper about">
            <NavLink className="nav-link-wrapper" to="/about">
              About & Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div className="header-title">
        {currentPosition === "Home" || currentPosition === "Github" ? null : (
          <h1>{currentPosition}</h1>
        )}
      </div>

      <EasyModal
        isOpen={showDownloadOptions}
        onRequestClose={() => setShowDownloadOptions(!showDownloadOptions)}
        content={{ width: "55%", height: "30%" }}
      >
        <ResumesModal setIsOpen={setShowDownloadOptions} />
      </EasyModal>
    </div>
  );
}
