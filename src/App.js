import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Nav />
      </header>
      <div id="body">
        <Hero />

      </div>
    </div>
  );
}

export default App;
