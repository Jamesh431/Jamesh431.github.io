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

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <div className="contact-form-wrapper">
          <div className="contact-field email"></div>

          <div className="contact-field subject"></div>

          <div className="contact-field name"></div>

          <div className="contact-field content"></div>
        </div>

        <div className="contact-submit">
          <div>submit button</div>
        </div>
      </div>

      <div className="contact-information-container">
        <div className="title-wrapper">
          <p>Software Developer</p>
        </div>

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
