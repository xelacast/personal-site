import styles from "../styles/Projects.module.css";
import github from "../assets/icons/logo-github.svg"
import externalLink from "../assets/icons/externallink.svg"
import { projects } from "../assets/content/projects";

import parse from 'html-react-parser';

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3><span>II.</span> Projects</h3>
        </div>
        <div>
          <ul className={styles.liContainer}>
            {projects.map((project) => {
              return (
                <li className={styles.projectContainer} key={project.title}>
                  <div className={`${styles[project.type]} ${styles.projectContent}`}>
                    <div>
                      <h5><span>Featured Project</span></h5>
                      <h4>{project.title}</h4>
                      <p>{parse(project.description)}</p>
                      <ul className={styles.tech}>
                        {project.technologies.map((tech) => {
                          return (
                            <li key={tech}>{tech}</li>
                          )
                        })}
                      </ul>
                      <div className={styles.links}>
                        <a href={project.github}>
                          <ion-icon src={github}></ion-icon>
                        </a>
                        <a href={project.url}>
                          <ion-icon src={externalLink}></ion-icon>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.projectImage} ${styles[project.type]}`}>
                    <a href={project.url}>
                      <div className={styles.imageWrapper}>
                        <figure>
                          <img src={project.image} alt={project.title} />
                        </figure>
                      </div>
                    </a>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects;