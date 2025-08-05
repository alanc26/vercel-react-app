import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header>
        <h1>👋 Hola, soy Alan.</h1>
        <p>Full-stack Developer • React Enthusiast • Tech Explorer</p>
      </header>
      <main>
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <p>© 2025 Alan</p>
      </footer>
    </div>
  );
}

export default App;