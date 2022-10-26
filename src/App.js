import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import MoreProjects from './components/MoreProjects';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <Nav />
      </header>
      <div id="body">
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <MoreProjects />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;
