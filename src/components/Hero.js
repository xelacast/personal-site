const content = require('../content.json');

const Hero = () => {
  return (
    <section id="hero">
      <div className="heroContainer">
        <p class="heroIntro">{content.intro}</p>
        <h1 class="hero top">{content.name}</h1>
        <h1 class="hero bottom">{content.statement}</h1>
        <p class="heroText">{content.heroText}</p>
        <a
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