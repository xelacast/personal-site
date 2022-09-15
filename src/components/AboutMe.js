import styles from "../styles/AboutMe.module.css";
import arrow from "../assets/icons/arrow.svg";
import self from "../assets/images/self-portrait-min.jpg";

const AboutMe = () => {


  const technologies =
    [
      "JavaScript (ES6+)",
      "Python",
      "React",
      "Node.js",
      "Django",
      "SQL"
  ];

  return (
    <section id={styles.aboutme}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3><span>I.</span> About Me </h3>
          {/* <Line /> */}
        </div>
        <div className={styles.body}>
          <div className={styles.description}>
            <div className={styles.text}>
              <p>I am a self-taught software enthusiast creating frontend, full-stack data driven products. My enjoyment for web development started when I took an online python EDx course to get ahead in school, I was hooked after that.</p>
              <p>My main focus is to learn professional workflows and build user interactable and data driven projects. I currently have <span>experience</span> working with a team in an <span>NFT startup</span>.</p>
              <p>My goal is to secure a career as a front end software developer, and further learn a backend development to satisfy my desire to learn.</p>
              <p>These are a few technologies I have been working with recently.</p>
            </div>
            <div>
              <ul className={styles.technologies}>
                {technologies.map((tech) => {
                  return (
                    <li>
                      <div>
                        <span className={styles.arrow}>
                          <img src={arrow} alt="arrow poiting right" />
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