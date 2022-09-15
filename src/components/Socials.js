import styles from '../styles/Socials.module.css';
import github from '../assets/icons/logo-github.svg';
import linkedIn from '../assets/icons/linkedin-square.svg';

const Socials = () => {
  return (
    <section id={styles.socials}>
      <div className={styles.socials}>
        <div className={styles.line}></div>
        <a href="https://github.com/alexjohn7516">
          <ion-icon src={github}></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/alexander-castillo1/">
          <ion-icon src={linkedIn}></ion-icon>
        </a>
      </div>
      {/* <div className={styles.email}>
        <div className={styles.line}></div>
        <a href="mailto: alex.jc7516@gmail.com">alex.jc7516@gmail.com</a>
      </div> */}
    </section>
  )
}

export default Socials;