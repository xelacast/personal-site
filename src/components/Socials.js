import styles from '../styles/Socials.module.css';
import github from '../assets/icons/logo-github.svg';
import linkedIn from '../assets/icons/linkedin-square.svg';

const Socials = () => {
  return (
    <section id={styles.socials}>
      <div className={styles.linkContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="https://github.com/alexjohn7516">
              <ion-icon src={github}></ion-icon>
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/alexander-castillo1/">
            <ion-icon src={linkedIn}></ion-icon>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.emailContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a
            href="mailto: alex.jc7516@gmail.com"
            className={styles.email}>
              alex.jc7516@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Socials;