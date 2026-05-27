import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { InteractiveBackground } from './components/InteractiveBackground';
import Home from './pages/Home';
import PmVikas from './pages/PmVikas';
import Projects from './pages/Projects';
import SkillsCertificates from './pages/SkillsCertificates';
import DesktopSetup from './pages/DesktopSetup';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('app-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'pmvikas':
        return <PmVikas />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <SkillsCertificates />;
      case 'setup':
        return <DesktopSetup />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      {/* Dynamic Animated background */}
      <InteractiveBackground />

      {/* Floating Responsive Navigation menu */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Panel views */}
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        {renderContent()}
      </main>

      <footer 
        style={{
          textAlign: 'center',
          padding: '24px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-card)',
        }}
      >
        <div>
          AJ_SEC DOSSIER SYSTEM v1.2.0 // © {new Date().getFullYear()} ALVIN JOMON. ALL RIGHTS RESERVED.
        </div>
        <div style={{ marginTop: '6px', color: 'var(--color-primary)', opacity: 0.5 }}>
          LATENCY: MINIMAL // NODE_STATUS: SECURE // HANDSHAKE: COMPLETE
        </div>
      </footer>
    </>
  );
}

export default App;
