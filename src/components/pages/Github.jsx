export default function Github() {
  return (
    <div className="github-page">
      <div className="eyes"></div>

      <div className="notice-title">
        <p>I have two githubs!</p>
      </div>

      <div className="githubs-container">
        <div className="github-wrapper mine">
          <div className="github-button"></div>

          <div className="github-title">
            <p>Personal</p>
          </div>

          <div className="github-about">
            <p>
              Personally created, eloquently handcrafted, artisanal
              masterpieces!
            </p>
          </div>
        </div>

        <div className="github-wrapper devpipeline">
          <div className="github-button"></div>

          <div className="github-title">
            <p>Devpipeline</p>
          </div>

          <div className="github-about">
            <p>Devpipeline created this one for my work with devpipeline</p>
          </div>
        </div>
      </div>
    </div>
  );
}
