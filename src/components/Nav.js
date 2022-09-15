import styles from "../styles/Nav.module.css"
import burgerIcon from '../assets/icons/align-right.svg';
import droplet from '../assets/icons/droplet.svg';
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {

  const [menu, setMenu] = useState("hidden");
  const [burger, setBurger] = useState("closed");

  const toggleBurger = () => {
    console.log(menu)
    if (menu === "hidden") {
      setMenu("visible");
    } else {
      setMenu("hidden");
    }

    if (burger === "closed") {
      setBurger("opened");
    } else {
      setBurger("closed");
    }
  }

  return (
    <nav id="nav" className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#hero">
            <ion-icon src={droplet}></ion-icon>
          </a>
        </div>
        <div className={styles.menu}>
          <div>
            <button
              onClick={toggleBurger}
              className={`${styles.burger} ${burger}`}>
                <ion-icon src={burgerIcon}></ion-icon>
            </button>
          </div>
          <div className={`${menu} ${styles.linkContainer}`}>
            <ul className={styles.links}>
              <li className={styles.link}>
                <NavLink to="#about">
                  <span className={styles.roman}>I.</span> About
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink to="#projects">
                  <span className={styles.roman}>II.</span> Projects
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink to="#contact">
                  <span className={styles.roman}>III.</span> Contact
                </NavLink>
              </li>
              <li className={styles.link}>
                <NavLink
                  to="resume.pdf"
                  target="_blank"
                  className={`${styles.resume} ${styles.button}`}
                  >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;