/*
contact
- web form?
  - email
  - name
  - subject
  - content
  - submit button

- contact information
*/

export default function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="name-and-title-wrapper">
          <h1>James Hales | Software Developer</h1>
        </div>

        <div className="about-me">
          <h2>About me</h2>
          <p>
            I am a fullstack software developer. I have experience in
            JavaScript, Python, React, PSQL, SQLAlchemy, Marshmallow, HTML, CSS,
            and SCSS I enjoy working with logical issues and finding fixes for
            them. I have experience building out components for pagination,
            automated data collection and sorting, carousels, etc. I am a fast
            learner and enjoy learning new technologies as well. If you're
            interested, reach out to me using my contact information below, or
            reach out to me through my LinkedIn, listed in the header above.
          </p>
        </div>
      </div>

      <div className="contact-info-container">
        <div className="email-wrapper">
          <p>james.devprojects@gmail.com</p>
        </div>

        <div className="location-wrapper">
          <p>Spanish Fork, Utah 84660</p>
        </div>
      </div>
    </div>
  );
}
