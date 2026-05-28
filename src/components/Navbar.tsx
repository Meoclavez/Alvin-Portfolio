import React from 'react';
import { Home, Award, Cpu, Shield, Sliders, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'pmvikas', label: 'PM VIKAS', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Shield },
    { id: 'skills', label: 'Credentials', icon: Award },
    { id: 'setup', label: 'Setup', icon: Sliders },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: '20px',
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <nav 
        className="glass-panel"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '8px 16px',
          borderRadius: '30px',
          background: 'var(--bg-card)',
          boxShadow: 'var(--shadow-navbar)',
        }}
      >
        {/* Glowing Logo */}
        <div 
          className="nav-logo"
          onClick={() => setActiveTab('home')}
          style={{
            fontWeight: 700,
            fontSize: '16px',
            color: 'var(--color-primary)',
            cursor: 'pointer',
            paddingRight: '12px',
            borderRight: '1px solid var(--border-color)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ animation: 'pulseGlow 2s infinite' }}>●</span>
          AJ_SEC
        </div>

        {/* Tab Items */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className="nav-tab-btn"
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: 'none',
                  background: isActive ? 'var(--bg-active-tab)' : 'transparent',
                  color: isActive ? 'var(--color-primary)' : 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-bright)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <Icon size={16} />
                <span className="nav-label" style={{ display: 'inline' }}>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Theme Toggle Button */}
        <button
          className="nav-theme-toggle"
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.2s ease',
            borderLeft: '1px solid var(--border-color)',
            marginLeft: '8px',
            paddingLeft: '16px',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-bright)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-main)'}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Embedded Mobile CSS */}
      <style>{`
        .nav-logo {
          transition: all 0.2s ease;
        }
        .nav-tab-btn {
          transition: all 0.2s ease;
        }
        .nav-theme-toggle {
          transition: all 0.2s ease;
        }
        
        @media (max-width: 768px) {
          .nav-tab-btn {
            padding: 8px 12px !important;
            gap: 6px !important;
          }
        }

        @media (max-width: 600px) {
          .nav-label {
            display: none !important;
          }
          nav {
            padding: 6px 12px !important;
            gap: 8px !important;
          }
          .nav-logo {
            font-size: 14px !important;
            padding-right: 8px !important;
          }
          .nav-tab-btn {
            padding: 6px 10px !important;
            gap: 0px !important;
          }
          .nav-theme-toggle {
            padding: 6px !important;
            margin-left: 4px !important;
            padding-left: 12px !important;
          }
        }

        @media (max-width: 400px) {
          nav {
            padding: 4px 8px !important;
            gap: 4px !important;
          }
          .nav-logo {
            font-size: 12px !important;
            padding-right: 6px !important;
            letter-spacing: 0.5px !important;
          }
          .nav-logo span {
            font-size: 10px !important;
          }
          .nav-tab-btn {
            padding: 4px 6px !important;
          }
          .nav-tab-btn svg, .nav-theme-toggle svg {
            width: 14px !important;
            height: 14px !important;
          }
          .nav-theme-toggle {
            padding: 4px !important;
            margin-left: 2px !important;
            padding-left: 8px !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
