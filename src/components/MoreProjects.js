import styles from "../styles/MoreProjects.module.css";
import { moreProjects } from "../assets/content/moreProjects";

const MoreProjects = () => {
  return (
    <section id="more-projects">
      <div>
        <h3 className={styles.heading}>More of My Works</h3>
        <span className={styles.heading2}><a href="https://github.com/alexjohn7516?tab=repositories">
            <p>
              Check them out
            </p>
          </a></span>
      </div>
      <div className={styles.projectBk}>
        <ul className={styles.container}>
          {moreProjects.map((project, i) => {
            return (
              <li className={styles.projectBody} key={i}>
                <a
                  href={project.url}
                  className={styles.projectLink}>
                  <div className={styles.linkBody}>
                    <h4>{project.title}</h4>
                    <hr></hr>
                    <p>{project.description}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default MoreProjects;