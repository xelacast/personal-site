import styles from "../styles/MoreProjects.module.css";
import { moreProjects } from "../assets/content/moreProjects";

const MoreProjects = () => {
  return (
    <section id={styles.moreProjects}>
      <div>
        <div>
          <h2 className={styles.heading}>More of My Works</h2>
          <span className={styles.heading2}><a href="https://github.com/alexjohn7516?tab=repositories">
              <p>
                Check them out
              </p>
            </a></span>
        </div>
        <div className={styles.projectBk}>
          <ul className={styles.container}>
            {moreProjects.map((project) => {
              return (
                <li className={styles.projectBody}>
                  <a
                    href={project.url}
                    className={styles.projectLink}>
                    <div className={styles.linkBody}>
                      <h3>{project.title}</h3>
                      <hr></hr>
                      <p>{project.description}</p>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MoreProjects;