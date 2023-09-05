import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Github() {
  return (
    <div className="github-page">
      <div className="eyes">
        <h1>👀</h1>
      </div>

      <div className="notice-title">
        <h1>I have two githubs!</h1>
      </div>

      <div className="githubs-container">
        <div className="github-wrapper personal">
          <div className="github-button">
            <a
              id="github-link personal"
              href="https://github.com/Jamesh431"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
            </a>
          </div>

          <div className="github-title">
            <h2>Personal</h2>
          </div>

          <div className="github-about">
            <h4>
              Personally created, eloquently handcrafted, artisanal
              masterpieces!
            </h4>
          </div>
        </div>

        <div className="github-wrapper devpipeline">
          <div className="github-button">
            <a
              id="github-link personal"
              href="https://github.com/James-Devpipline"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" size="2xl" />
            </a>
          </div>

          <div className="github-title">
            <h2>Devpipeline</h2>
          </div>

          <div className="github-about">
            <h4>Devpipeline created this one for my work with devpipeline</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
