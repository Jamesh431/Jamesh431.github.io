export default function Header() {
  return (
    <div className="header">
      <div className="home-container">
        <div className="nav-link-wrapper home">
          {/* home button here */}
          home
        </div>
      </div>

      <div className="links-container">
        <div className="nav-link-wrapper linkedin">
          {/* linkedin logo button here */}
          linkedin
        </div>

        <div className="nav-link-wrapper github">
          {/* github pages button here */}
          github
        </div>

        <div className="nav-link-wrapper coverletter">
          {/* add dark mode and light mode versions on click option */}
          cover letter
        </div>
      </div>
    </div>
  );
}
