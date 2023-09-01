import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className="footer">
      <NavLink className="footer-link-wrapper about" to="/about">
        About & Contact
      </NavLink>
    </div>
  );
}
