import stock from "../assets/images/computer-stock-min.jpg";
import styles from "../styles/Projects.module.css";
import github from "../assets/icons/logo-github.svg"
import externalLink from "../assets/icons/externallink.svg"

const projects = [
  {
    title: "Cutiee Fruitee NFT",
    description: "A product to spread culteral awareness through technology built with React, Soldity, and Etheruem. ",
    image: stock,
    technologies: ["React", "Solidity", "Ethereuem", "Hardhat"],
    github: "https://github.com/alexjohn7516/personal-site",
    url: "",
    type: ""
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2><span>II.</span> Projects</h2>
        </div>
        <div>
          <ul className={styles.liContainer}>
            {projects.map((project) => {
              return (
                <li className={`${styles[project.type]} ${styles.projectContainer}`}>
                  <div className={styles.projectContent}>
                    <h4><span>Featured Project</span></h4>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className={styles.tech}>
                      {project.technologies.map((tech) => {
                        return (
                          <li>{tech}</li>
                        )
                      })}
                    </ul>
                    <div>
                      <a href={project.github}>
                        <ion-icon src={github}></ion-icon>
                      </a>
                      <a href={project.url}>
                        <ion-icon src={externalLink}></ion-icon>
                      </a>
                    </div>
                  </div>
                  <div className={styles.projectImage}>
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