import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Github() {
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
          >
            <div className="github-border-wrapper">
              <div className="github-logo">
                <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
              </div>

              <div className="github-title">
                <h2>Personal</h2>
              </div>
            </div>

            <div className="github-about">
              <p>
                Personally created, eloquently handcrafted, artisanal
                masterpieces!
              </p>
            </div>
          </a>
        </div>

        <div className="github-wrapper devpipeline">
          <a
            id="github-link personal"
            href="https://github.com/James-Devpipline"
            target="_blank"
            rel="noreferrer"
          >
            <div className="github-border-wrapper">
              <div className="github-logo">
                <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
              </div>

              <div className="github-title">
                <h2>Devpipeline</h2>
              </div>
            </div>

            <div className="github-about">
              <p>Devpipeline created this one for my work with devpipeline</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
