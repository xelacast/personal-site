import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContainer}>
        <p className={styles.intro}>Hi, My Name is...</p>
        <h1 className={styles.heading}>Alexander Castillo</h1>
        <h2 className={styles.heading2}>I create software for the web.</h2>
        <p className={styles.heroText}>Who specializes in building <em><span>full stack</span></em> web applications and for small businesses. I am currenlty focused on integrating <em><span>TypeScript</span></em> and project management with Jira services into my workflows.</p>
        <a
        className={`${styles.projects}  ${styles.button}`}
        href="https://www.github.com/alexjohn7516"
        target="_blank"
        rel="noreferrer">
          Check Out My Projects
        </a>
      </div>
    </section>
  )
}

export default Hero;