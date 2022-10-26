import styles from '../styles/Experience.module.css';

const experience = [
  {
    start: "September 2022",
    end: "Current",
    company: "Hubplex",
    position: "Freelance Fullstack JavaScript Developer",
  },
  {
    start: "Jan 2022",
    end: "May 2022",
    company: "Cute Fruit",
    position: "Freelance Fullstack Blockchain Developer",

  }
]

const Experience = () => {

  return (
    <section id="experience">
      <h3><span>III.</span> My Experience</h3>
      <ul class={styles.container}>
        {experience.map((work) => {
          return (
            <li className={styles.gridSystem}>
              <p className={styles.work}>{work.company}</p>
              <span className={styles.bar}>|</span>
              <p className={styles.work}>{work.position}</p>
              <span className={styles.bar}>|</span>
              <p className={styles.work}>{work.start}</p>
              <span className={styles.bar}>|</span>
              <p className={styles.work}>{work.end}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Experience;