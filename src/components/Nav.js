// import styles from "../styles/Nav.module.scss";
import { BrowserRouter, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <section id="nav">
      <BrowserRouter>
        <div>
          <nav className="navBar">
              <ul className="navLinks">
                <li className="navLink navLogo">
                  <NavLink to="/">
                  <span className="navLogo logo">Logo Here</span>
                  </NavLink>
                </li>
                <li className="navLink">
                  <NavLink
                    to="#about"
                    >
                    <span className="roman">I.</span> About
                  </NavLink>
                </li>
                <li className="navLink">
                  <NavLink to="#projects">
                    <span className="roman">II.</span> Projects
                  </NavLink>
                </li>
                <li className="navLink">
                  <NavLink
                    to="#contact"
                    >
                    <span className="roman">III.</span> Contact
                  </NavLink>
                </li>
                <li className="navLink">
                  <button className="navButton">
                    <NavLink
                      to="resume.pdf"
                      target="_blank"
                      >
                      Resume
                    </NavLink>
                  </button>
                </li>
              </ul>
          </nav>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default Nav;