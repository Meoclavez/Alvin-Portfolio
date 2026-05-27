import React from 'react';
import DecryptedText from '../components/DecryptedText';
import { Shield, Cpu, Award, ArrowUpRight, Terminal, Globe, MapPin, Mail } from 'lucide-react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  return (
    <div className="container-cyber" style={{ animation: 'floatAnimation 10s ease-in-out infinite' }}>
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
        <div 
          className="glass-panel" 
          style={{ 
            gridColumn: 'span 7', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            minHeight: '260px',
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
        </div>

        {/* Card 2: PM VIKAS Selected (Right Upper) */}
        <div 
          className="glass-panel" 
          style={{ 
            gridColumn: 'span 5', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            borderLeft: '4px solid var(--color-secondary)',
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
            onClick={() => setActiveTab('pmvikas')}
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
        </div>

        {/* Card 3: Main Project - CyberSim (Left Lower) */}
        <div 
          className="glass-panel" 
          style={{ 
            gridColumn: 'span 5', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            borderLeft: '4px solid var(--color-primary)',
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
            onClick={() => setActiveTab('projects')}
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
        </div>

        {/* Card 4: Verified Credentials Summary (Right Lower Large) */}
        <div 
          className="glass-panel" 
          style={{ 
            gridColumn: 'span 7', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
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
            onClick={() => setActiveTab('skills')}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
