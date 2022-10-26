import styles from "../styles/AboutMe.module.css";
import arrow from "../assets/icons/arrow-right.svg";
import self from "../assets/images/self-portrait-min.jpg";

const AboutMe = () => {


  const technologies =
    [
      "TypeScript",
      "Python",
      "React",
      "NEXT.js",
      "Node.js",
      "Express",
      "AWS",
      "Azure",
      "MangoDB"
  ];

  return (
    <section id="about">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3><span>I.</span> About Me </h3>
        </div>
        <div className={styles.body}>
          <div className={styles.description}>
            <div className={styles.text}>
              <p>I am a self-taught software enthusiast creating frontend and
                full-stack products.
              </p>
              <p>
                My main focus is to learn industry standards and project workflows
                to build career worthy skills. I have <span>experience</span> in
                creating <span>full stack applications</span> from the ground up
                in the Blockchain and currently SASS space through freelance work.</p>
              <p>My goal is to secure a career as a fullstack software developer
                with an innovative company and build a personal brand in the process.
              </p>
              <p>These are a few technologies I have been working with recently.</p>
            </div>
            <div>
              <ul className={styles.technologies}>
                {technologies.map((tech) => {
                  return (
                    <li key={tech}>
                      <div className={styles.iconContainer}>
                        <span className={styles.arrow}>
                          <ion-icon src={arrow} alt="arrow poiting right"></ion-icon>
                        </span>
                        <p>{tech}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={`${styles.image} ${styles.portrait}`}>
            <img src={self} alt="Professional head shot of my self" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;