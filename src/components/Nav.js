import styles from "../styles/Nav.module.css"
import burgerIcon from '../assets/icons/align-right.svg';
import droplet from '../assets/icons/droplet.svg';
import { useState } from "react";
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
          <a href="#hero" title="logo">
            <ion-icon src={droplet}></ion-icon>
          </a>
        </div>
        <div className={styles.menu}>
          <div>
            <button
              type="button"
              name="burger"
              onClick={toggleBurger}
              className={`${styles.burger} ${burger}`}>
                <ion-icon src={burgerIcon}></ion-icon>
            </button>
          </div>
          <div
            className={`${menu} ${styles.linkContainer}`}
            title="menu">
            <ul className={styles.links}>
              <li className={styles.link}>
                <a href="#about">
                  <span className={styles.roman}>I.</span> About
                </a>
              </li>
              <li className={styles.link}>
                <a href="#projects">
                  <span className={styles.roman}>II.</span> Projects
                </a>
              </li>
              <li className={styles.link}>
                <a href="#experience">
                  <span className={styles.roman}>III.</span> Experience
                </a>
              </li>
              <li className={styles.link}>
                <a href="#contact">
                  <span className={styles.roman}>IV.</span> Contact
                </a>
              </li>
              <li className={styles.link}>
                <a
                  href="https://docs.google.com/document/d/1jhV9Vr__4OCrTAGWowVwsyMJVtNL1JjC1gUr_p0m6No/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.resume} ${styles.button}`}
                  >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;