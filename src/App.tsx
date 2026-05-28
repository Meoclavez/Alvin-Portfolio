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

  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 900);
    };
    const handleScroll = () => {
      if (activeTab === 'home' && window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleResize();
    handleScroll();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} scrolled={scrolled} isDesktop={isDesktop} />;
      case 'pmvikas':
        return <PmVikas />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <SkillsCertificates />;
      case 'setup':
        return <DesktopSetup />;
      default:
        return <Home setActiveTab={setActiveTab} scrolled={scrolled} isDesktop={isDesktop} />;
    }
  };

  const isShifted = activeTab === 'home' && isDesktop && scrolled;

  return (
    <>
      {/* Dynamic Animated background */}
      <InteractiveBackground />

      {/* Floating Responsive Navigation menu */}
      <div 
        style={{ 
          transition: 'padding-left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', 
          paddingLeft: isShifted ? '340px' : '0px' 
        }}
      >
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          theme={theme} 
          toggleTheme={toggleTheme} 
        />
      </div>

      {/* Main Panel views */}
      <main 
        style={{ 
          flex: 1, 
          paddingBottom: '60px', 
          transition: 'padding-left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)', 
          paddingLeft: isShifted ? '340px' : '0px' 
        }}
      >
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
          transition: 'padding-left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
          paddingLeft: isShifted ? '364px' : '24px',
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
