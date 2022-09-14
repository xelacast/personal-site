import styles from '../styles/Contact.module.css';
import github from '../assets/icons/logo-github.svg';
import linkedIn from '../assets/icons/linkedin.svg';
const Contact = () => {
  return (
    <section id={styles.contact}>
      <div className={styles.container}>
        <div className={styles.description}>
          <span>III. What's Next?</span>
          <h2>Get In Touch</h2>
          <p>Feel free to send me a message if you have any
            questions tugging at your mind or if you want to
            have a friendly chat. I am open for work at this
            moment in time.</p>
          <a
            href="mailto:alex.jc7516@mgial.com"
            className={`${styles.hello} ${styles.button}`}>
            Say Hello
          </a>
        </div>

        <div className={styles.copywright}>
          <a href="https://brittanychiang.com/">Design Inspiration: Brittany Chiang</a>
          <p>Built by Alexander Castillo</p>
          <a href="https://github.com/alexjohn7516/personal-site">Github Repository</a>
        </div>
        <div className={styles.socials}>
          <a href="https://github.com/alexjohn7516">
            <ion-icon src={github}></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/alexander-castillo1/">
            <ion-icon src={linkedIn}></ion-icon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;