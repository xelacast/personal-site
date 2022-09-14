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
    url: ""
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
          {projects.map((project) => {
            return (
              <div className={styles.type}>
                <h4><span>Featured Project</span></h4>
                <h3>{project.title}</h3>
                <div>
                  <p>{project.description}</p>
                </div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects;