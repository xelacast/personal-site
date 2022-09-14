import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import MoreProjects from './components/MoreProjects';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Nav />
      </header>
      <div id="body">
        <Hero />
        <AboutMe />
        <Projects />
        <MoreProjects />
      </div>
    </div>
  );
}

export default App;
