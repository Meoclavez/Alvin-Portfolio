import React from 'react';
import DecryptedText from '../components/DecryptedText';
import { TiltedCard } from '../components/TiltedCard';
import { Shield, Cpu, Award, ArrowUpRight, Terminal, Globe, MapPin, Mail, Phone, Sliders } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  scrolled: boolean;
  isDesktop: boolean;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, scrolled, isDesktop }) => {
  return (
    <>
      <div 
        className="container-cyber" 
        style={{ 
          animation: 'floatAnimation 10s ease-in-out infinite',
          transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px'
        }}
      >
      {/* Terminal Title Header */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        {/* Profile Image with Cyber Pulsing Glow */}
        <div 
          className="profile-glow"
          style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid var(--color-primary)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-card)',
            // SCROLL TRANSITION FOR DESKTOP
            transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            transform: (isDesktop && scrolled) 
              ? 'translate(calc(-50vw - 116px), -60px) scale(0.46)' 
              : 'translate(0, 0) scale(1)',
            opacity: (isDesktop && scrolled) ? 0 : 1,
            pointerEvents: (isDesktop && scrolled) ? 'none' : 'auto',
          }}
        >
          <img 
            src="/profile.jpeg" 
            alt="Alvin Jomon" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <div 
          className="glass-panel"
          style={{
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-primary)',
            marginBottom: '20px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Terminal size={14} />
          <span>CLEARANCE LEVEL: OPERATIVE // SEC_ACTIVE</span>
        </div>

        <h1 style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, margin: '10px 0', letterSpacing: '-2px' }}>
          <span style={{ color: 'var(--text-bright)' }}>I am </span>
          <DecryptedText 
            text="Alvin Jomon" 
            speed={50} 
            className="text-glow-cyan" 
            triggerOnHover={true}
          />
        </h1>
        
        <p 
          style={{
            fontSize: '18px',
            maxWidth: '650px',
            color: 'var(--text-main)',
            marginTop: '15px',
            lineHeight: 1.6,
          }}
        >
          Cybersecurity Researcher & IoT Engineer specializing in hardware security integrations, network threat modeling, and smart systems automation.
        </p>

        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <button 
            className="btn-cyber" 
            onClick={() => setActiveTab('projects')}
          >
            <Shield size={16} />
            Explore Projects
          </button>
          <button 
            className="btn-cyber btn-purple" 
            onClick={() => setActiveTab('skills')}
          >
            <Award size={16} />
            View Credentials
          </button>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Card 1: Operative Dossier (Large Left) */}
        <TiltedCard 
          className="glass-panel" 
          style={{ 
            gridColumn: 'span 8', 
            padding: 'clamp(16px, 4vw, 30px)', 
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '12px', letterSpacing: '1px' }}>
                [OPERATIVE_DOSSIER]
              </div>
              <div className="tag-cyber">STATUS: TRAINEE</div>
            </div>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '28px', marginTop: '16px' }}>Personnel Credentials</h2>
            
            <div className="grid-cyber-sub" style={{ marginTop: '20px', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--color-primary)' }} />
                <span style={{ fontSize: '15px' }}>Kottayam, Kerala, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Globe size={18} style={{ color: 'var(--color-secondary)' }} />
                <span style={{ fontSize: '15px' }}>CEP (IHRD) Student</span>
              </div>
              <div className="dossier-email" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--color-accent)' }} />
                <a href="mailto:alvinthadathil1@gmail.com" style={{ fontSize: '15px', color: 'var(--text-bright)', textDecoration: 'none' }}>
                  alvinthadathil1@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '20px', fontSize: '14px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            // "Security is not a product, but a process." — Bruce Schneier
          </div>
        </TiltedCard>

        {/* Card 2: PM VIKAS Selected (Right Upper) */}
        <TiltedCard 
          className="glass-panel" 
          onClick={() => setActiveTab('pmvikas')}
          style={{ 
            gridColumn: 'span 4', 
            padding: 'clamp(16px, 4vw, 30px)', 
            borderLeft: '4px solid var(--color-secondary)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Cpu size={24} style={{ color: 'var(--color-secondary)' }} />
              <div className="tag-cyber tag-green">ACTIVE</div>
            </div>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '22px', marginTop: '16px' }}>PM VIKAS IoT Trainee</h2>
            <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text-main)' }}>
              Selected for the prestigious national **Pradhan Mantri Virasat Ka Samvardhan** IoT Assistant program at **IIIT Kottayam**.
            </p>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('pmvikas');
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--color-secondary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Explore Scheme Details <ArrowUpRight size={16} />
          </button>
        </TiltedCard>

        {/* Card 3: Main Project - CyberSim (Left Lower) */}
        <TiltedCard 
          className="glass-panel" 
          onClick={() => setActiveTab('projects')}
          style={{ 
            gridColumn: 'span 4', 
            padding: 'clamp(16px, 4vw, 30px)', 
            borderLeft: '4px solid var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Shield size={24} style={{ color: 'var(--color-primary)' }} />
              <div className="tag-cyber">NODE.JS / NEXT.JS</div>
            </div>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '22px', marginTop: '16px' }}>CyberSim Mainframe</h2>
            <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text-main)' }}>
              Co-developing an interactive cybersecurity training portal with brute-force simulations, Dialog Trees, and real-time Socket.io dashboards.
            </p>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('projects');
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Review Architecture <ArrowUpRight size={16} />
          </button>
        </TiltedCard>

        {/* Card 4: Verified Credentials Summary (Right Lower Large) */}
        <TiltedCard 
          className="glass-panel" 
          onClick={() => setActiveTab('skills')}
          style={{ 
            gridColumn: 'span 4', 
            padding: 'clamp(16px, 4vw, 30px)', 
            borderLeft: '4px solid var(--color-accent)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Award size={24} style={{ color: 'var(--color-accent)' }} />
              <div className="tag-cyber tag-purple">4 VERIFIED</div>
            </div>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '24px', marginTop: '16px' }}>Academic & Professional Milestones</h2>
            
            <ul style={{ marginTop: '14px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> **NASSCOM Digital 101** (Gold Certified, 80.00% Score)
              </li>
              <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> **IEEE Intro to Cybersecurity Certificate** (Informatyka 5.0)
              </li>
              <li style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--color-accent)' }}>✓</span> **Website Hacking & Defence Certificate** (Completed 2025)
              </li>
            </ul>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('skills');
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--color-accent)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Launch Credentials Vault <ArrowUpRight size={16} />
          </button>
        </TiltedCard>

        {/* Card 5: Custom Rig & OS */}
        <TiltedCard 
          className="glass-panel" 
          onClick={() => setActiveTab('setup')}
          style={{ 
            gridColumn: 'span 4', 
            padding: 'clamp(16px, 4vw, 30px)', 
            borderLeft: '4px solid #ff9900',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Sliders size={24} style={{ color: '#ff9900' }} />
              <div className="tag-cyber" style={{ background: 'rgba(255, 153, 0, 0.08)', borderColor: 'rgba(255, 153, 0, 0.2)', color: '#ff9900' }}>ARCH / HYPR</div>
            </div>
            <h2 style={{ color: 'var(--text-bright)', fontSize: '22px', marginTop: '16px' }}>Custom Rig & OS</h2>
            <p style={{ fontSize: '14px', marginTop: '8px', color: 'var(--text-main)' }}>
              Deep dive into my personal workspace setup, operating system customization, and hardware development rig specs.
            </p>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab('setup');
            }}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#ff9900', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '14px', 
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            Inspect Configuration <ArrowUpRight size={16} />
          </button>
        </TiltedCard>
      </div>
    </div>

    {/* Locked Fixed Contact/Navigation Side Panel on Desktop */}
      {isDesktop && (
        <div 
          className="glass-panel"
          style={{
            position: 'fixed',
            top: '0px',
            left: scrolled ? '0px' : '-320px',
            width: '320px',
            height: '100vh',
            maxHeight: '100vh',
            background: 'var(--bg-card-gradient)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: 'none',
            borderRight: '1px solid var(--border-color)',
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '24px',
            borderBottomRightRadius: '24px',
            boxShadow: scrolled ? 'var(--shadow-navbar)' : 'none',
            zIndex: 95,
            padding: '30px 24px',
            opacity: scrolled ? 1 : 0,
            pointerEvents: scrolled ? 'auto' : 'none',
            transition: 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px',
            overflow: 'hidden'
          }}
        >
          {/* Header section with smaller profile image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
            <div 
              className="profile-glow"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <img 
                src="/profile.jpeg" 
                alt="Alvin Jomon" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', fontWeight: 600, margin: 0 }}>Alvin Jomon</h3>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>SECURE_DOSSIER_SYS</span>
            </div>
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Contact Information
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={16} style={{ color: 'var(--color-primary)' }} />
              <a href="mailto:alvinthadathil1@gmail.com" style={{ fontSize: '13px', color: 'var(--text-bright)', textDecoration: 'none', wordBreak: 'break-all' }}>
                alvinthadathil1@gmail.com
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={16} style={{ color: 'var(--color-secondary)' }} />
              <a href="tel:9656819732" style={{ fontSize: '13px', color: 'var(--text-bright)', textDecoration: 'none' }}>
                9656819732
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
              <span style={{ fontSize: '13px', color: 'var(--text-main)' }}>Kottayam, Kerala, India</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#e1306c" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <a href="https://instagram.com/alvinthadathil" target="_blank" rel="noreferrer" style={{ fontSize: '13px', color: 'var(--text-bright)', textDecoration: 'none' }}>
                @alvinthadathil
              </a>
            </div>
          </div>

          {/* Page Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
              Navigate to File Vaults
            </div>
            {[
              { id: 'pmvikas', label: 'PM VIKAS IoT Trainee', color: 'var(--color-secondary)' },
              { id: 'projects', label: 'Technical Showcase', color: 'var(--color-primary)' },
              { id: 'skills', label: 'Credentials Vault', color: 'var(--color-accent)' },
              { id: 'setup', label: 'Custom Rig & OS', color: '#ff9900' }
            ].map((link) => (
              <div 
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--text-bright)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = link.color;
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = link.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.color = 'var(--text-bright)';
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>[OPEN]</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
