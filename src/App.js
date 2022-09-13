import styles from './App.scss';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        < Nav />
      </header>
      <Hero />
    </div>
  );
}

export default App;
