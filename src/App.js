import React, { useState, useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import translations from './i18n';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="App">
      <div className="controls">
        <div className="lang-selector">
          <button
            className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
            onClick={() => setLang('es')}
            aria-label="Español"
          >
            ES
          </button>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
            aria-label="English"
          >
            EN
          </button>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark/light mode"
          title={darkMode ? t.themeLight : t.themeDark}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <header>
        <h1>{t.greeting} <span className="name-highlight">Alan.</span></h1>
        <p className="tagline">{t.tagline}</p>
        <div className="header-divider" />
      </header>

      <main>
        <AboutMe t={t} />
        <Projects t={t} />
      </main>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;