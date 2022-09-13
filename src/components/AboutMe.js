import styles from "../styles/AboutMe.module.css";


const AboutMe = () => {
  return (
    <section id="aboutme">
      <div>
        <div className={styles.heading}>
          <h2><span>I.</span>About Me</h2>
          {/* <Line /> */}
        </div>
        <div className={styles.body}>
          <div className={styles.description}>
            <div className={styles.text}>

            </div>
            <div>
              <ul classHanem={styles.technologies}>
                <li><span className={styles.arrow}><image src="../assets/icons/arrow.svg" alt="arrow" /></span>JavaScript (ES6+)</li>
                <li>Python</li>
                <li>Django</li>
                <li>SQL</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className={styles.image}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;