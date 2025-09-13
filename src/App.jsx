// ...existing code...
import React, { useState, useEffect, useRef } from 'react';
import { poems as allPoems } from './data/Poems';
import Navigation from './components/Navigation';
import Header from './components/Header';
import PoemCard from './components/PoemCard';
// PoemView, About, Contact, Footer do not exist as components
import './App.css';
import './components/ComponentStyles.css';


// MAIN APP
function App() {
  const [selectedPoem, setSelectedPoem] = useState(null);
  const [blurred, setBlurred] = useState(false);
  const mainContentRef = useRef(null);

  const handleSelectPoem = (poem) => {
    setSelectedPoem(poem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedPoem(null);
  };

  // Blur on screenshot/screenrecord (best-effort: visibilitychange and window blur/focus events)
  useEffect(() => {
    const handleVisibility = () => {
      setBlurred(document.visibilityState === 'hidden');
    };
    const handleWindowBlur = () => {
      setBlurred(true);
    };
    const handleWindowFocus = () => {
      setBlurred(false);
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

// Replace copied text with emoji
useEffect(() => {
  const handleCopy = (e) => {
    e.preventDefault();
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', '📝');
    } else if (window.clipboardData) {
      window.clipboardData.setData('Text', '📝');
    }
  };
  document.addEventListener('copy', handleCopy);
  return () => document.removeEventListener('copy', handleCopy);
}, []);

  return (
    <div className="app-container">
      <Navigation onLogoClick={handleBack} />
      <main
        className="main-content"
        ref={mainContentRef}
        style={blurred ? { filter: 'blur(8px)', transition: 'filter 0.3s' } : { transition: 'filter 0.3s' }}
      >
        {selectedPoem ? (
          <div className="poem-view-container fade-in">
            <button onClick={handleBack} className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to All Poems
            </button>
            <article className="poem-full-article">
              <h1 className="poem-full-title">{selectedPoem.title}</h1>
              <div className="poem-full-content">{selectedPoem.content}</div>
            </article>
          </div>
        ) : (
          <>
            <Header />
            <section id="poems" className="section">
              <h2 className="section-title">My Poems</h2>
              <div className="poems-grid">
                {allPoems.map(poem => (
                  <PoemCard key={poem.id} poem={poem} onSelect={handleSelectPoem} />
                ))}
              </div>
            </section>
            {/* About + Contact Section */}
            <section id="about" className="about-section section">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <img 
                  src="/WhatsApp%20Image%202025-09-13%20at%2021.30.37_9ca8e339.jpg" 
                  alt="Portrait of Your Name" 
                  className="about-image"
                  style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                />
                <div>
                  <p className="about-text">
                    Hello! I'm Parth, a writer and dreamer based in Mumbai. Poetry, for me, is a way to capture the world in its rawest form.
                    <br /><br />
                    This little corner of the internet is where I share my work. Thank you for stopping by and reading my words. I hope they resonate with you in some small way.
                  </p>
                  <div className="contact-section" style={{ marginTop: '24px' }}>
                    <h3 className="contact-title">Connect With Me</h3>
                    <p className="contact-text">You can find more of my work and daily musings on Instagram.</p>
                    <a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="insta-button">
                      Follow me on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      

    </div>
  );
}

export default App;

