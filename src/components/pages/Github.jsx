import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Github() {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showDevpipeline, setShowDevpipeline] = useState(false);

  return (
    <div className="github-page">
      <div className="eyes">
        <h1>👀</h1>
      </div>

      <div className="notice-title">
        <h1>I have two github accounts! </h1>
      </div>

      <div className="githubs-container">
        <div className="github-wrapper personal">
          <a
            id="github-link personal"
            href="https://github.com/Jamesh431"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setShowPersonal(true)}
            onMouseLeave={() => setShowPersonal(false)}
          >
            <div className="github-button">
              <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
            </div>

            <div className="github-title">
              <h2>Personal</h2>
            </div>
          </a>

          <div className="github-about">
            <p
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: showPersonal ? 1 : 0,
              }}
            >
              Personally created, eloquently handcrafted, artisanal
              masterpieces!
            </p>
          </div>
        </div>

        <div className="github-wrapper devpipeline">
          <a
            id="github-link personal"
            href="https://github.com/James-Devpipline"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setShowDevpipeline(true)}
            onMouseLeave={() => setShowDevpipeline(false)}
          >
            <div className="github-button">
              <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
            </div>

            <div className="github-title">
              <h2>Devpipeline</h2>
            </div>
          </a>

          <div className="github-about">
            <p
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: showDevpipeline ? 1 : 0,
              }}
            >
              Devpipeline created this one for my work with devpipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
