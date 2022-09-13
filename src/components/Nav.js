import styles from "../styles/Nav.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <section id={styles.nav} className={styles.nav}>
      <BrowserRouter>
        <div>
          <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
              <li className={styles.navLink}>
                <NavLink to="/">
                <span
                className={`${styles.navLogo} ${styles.logo}`}
                >Logo Here</span>
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink
                  to="#about"
                  >
                  <span className={styles.roman}>I.</span> About
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink to="#projects">
                  <span className={styles.roman}>II.</span> Projects
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink
                  to="#contact"
                  >
                  <span className={styles.roman}>III.</span> Contact
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink
                  to="resume.pdf"
                  target="_blank"
                  className={`${styles.resume} ${styles.button}`}
                  >
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </BrowserRouter>
    </section>
  )
}

export default Nav;