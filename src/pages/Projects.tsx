import React from 'react';
import { Shield, Key, Terminal, Code, Server, ExternalLink, GitBranch } from 'lucide-react';
import TiltedCard from '../components/TiltedCard';

export const Projects: React.FC = () => {
  const modules = [
    { 
      icon: Shield, 
      color: 'var(--color-primary)', 
      title: 'Phishing Vectors', 
      desc: 'Deep header analysis, payload structure inspection, and interactive social engineering classification.' 
    },
    { 
      icon: Key, 
      color: 'var(--color-secondary)', 
      title: 'Brute Force Simulations', 
      desc: 'Simulated dictionary brute force attacks running in real-time. Illustrates secure rate-limiting and encryption.' 
    },
    { 
      icon: Code, 
      color: 'var(--color-accent)', 
      title: 'XSS Attack & Defence', 
      desc: 'Exploiting structural DOM weaknesses via scripting injections and active remediation using sanitization tools (DOMPurify).' 
    },
    { 
      icon: Terminal, 
      color: '#ff9900', 
      title: 'Social Engineering Dialogue', 
      desc: 'Dynamic dialogue trees simulating interactions with corporate threat actors to test human-vector vulnerabilities.' 
    },
  ];

  return (
    <div className="container-cyber">
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="tag-cyber" style={{ marginBottom: '16px' }}>[ CODEBASE_ARCHIVES ]</div>
        <h1 style={{ color: 'var(--text-bright)', fontSize: '3rem', fontWeight: 600, letterSpacing: '-1px' }}>
          Technical <span className="text-glow-cyan">Showcase</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '15px auto 0', fontSize: '16px', lineHeight: 1.6 }}>
          Explore featured technical implementations, hybrid systems architecture, and core coding contributions.
        </p>
      </div>

      {/* Main Project: CyberSim */}
      <div className="grid-cyber-split">
        {/* Large CyberSim Description */}
        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '12px'
                }}
              >
                <Shield size={16} />
                [FEATURED_FLAGSHIP_PROJECT]
              </div>
              <div className="tag-cyber">v1.2.0-STABLE</div>
            </div>

            <h2 style={{ color: 'var(--text-bright)', fontSize: '32px', marginTop: '16px', letterSpacing: '-1px' }}>
              CyberSim mainframes
            </h2>
            <p style={{ fontSize: '15px', marginTop: '12px', lineHeight: 1.7 }}>
              **CyberSim** is an immersive, gamified cybersecurity training platform designed to teach hands-on threat identification and structural remediation. It combines sleek cyber-punk aesthetics with fully-functional sandbox modules.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              <span className="tag-cyber">Next.js 15 (App Router)</span>
              <span className="tag-cyber tag-purple">TypeScript</span>
              <span className="tag-cyber tag-green">Socket.io (WebSockets)</span>
              <span className="tag-cyber">tRPC / React Query</span>
              <span className="tag-cyber tag-purple">Prisma / PostgreSQL</span>
              <span className="tag-cyber tag-green">Tailwind CSS v4</span>
            </div>

            {/* Architecture Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '25px', borderLeft: '2px solid rgba(0, 240, 255, 0.2)', paddingLeft: '20px' }}>
              <div style={{ fontSize: '14px' }}>
                <strong style={{ color: 'var(--text-bright)' }}>Interactive Security Dossiers:</strong> Secure operative dashboard showing clearance status, solved modules, and global XP rankings over the custom-built tRPC network.
              </div>
              <div style={{ fontSize: '14px' }}>
                <strong style={{ color: 'var(--text-bright)' }}>Hybrid WebSockets Integration:</strong> Attaches socket.io to the Next.js process via a custom hybrid node server, facilitating streaming real-time brute force dictionary execution direct to client interfaces.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
            <a 
              href="https://github.com/Meoclavez/CyberSim" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-cyber"
            >
              <GitBranch size={16} />
              GitHub Archive <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* CyberSim Visual / 3D tilt Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TiltedCard maxRotate={10}>
            <div 
              className="glass-panel" 
              style={{ 
                height: '100%', 
                padding: '30px', 
                background: 'var(--bg-card-gradient)',
                border: '1px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '340px'
              }}
            >
              <Shield size={64} style={{ color: 'var(--color-primary)', margin: '0 auto 20px', animation: 'floatAnimation 6s ease-in-out infinite' }} />
              <h3 style={{ color: 'var(--text-bright)', fontSize: '20px', fontFamily: 'var(--font-mono)' }}>SECURE_MAINFRAME_ACCESS</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '10px', lineHeight: 1.6 }}>
                The training environment is locked behind custom Auth.js (v5 Beta) layers, with credentials managed over encrypted hash databases.
              </p>
              
              <div 
                style={{ 
                  marginTop: '25px', 
                  fontSize: '12px', 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Server size={14} />
                <span>SERVER: RAILWAY // DATABASE: NEON_POSTGRES</span>
              </div>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* CyberSim Interactive Modules */}
      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <h2 style={{ color: 'var(--text-bright)', fontSize: '24px', textAlign: 'center', marginBottom: '30px' }}>
          Immersive CyberSim Training Modules
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <div 
                key={index}
                style={{ 
                  background: 'var(--bg-card-sub)', 
                  border: '1px solid rgba(0, 240, 255, 0.1)', 
                  padding: '24px', 
                  borderRadius: '12px' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = mod.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${mod.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '8px', 
                    background: `${mod.color}10`,
                    color: mod.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <Icon size={20} />
                </div>
                <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '8px' }}>{mod.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.5 }}>{mod.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600, marginBottom: '20px' }}>
          <Code size={16} />
          [ACADEMIC_&_PRACTICAL_ARCHIVES]
        </div>

        <h2 style={{ color: 'var(--text-bright)', fontSize: '24px', marginBottom: '24px' }}>
          Coursework & Application Implementations
        </h2>

        <div className="grid-cyber-split" style={{ margin: '0', gap: '20px' }}>
          {/* Project 1: Banking-App */}
          <div style={{ background: 'var(--bg-card-sub)', border: '1px solid rgba(0, 240, 255, 0.1)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0, 240, 255, 0.05)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={20} />
                </div>
                <span className="tag-cyber">Java & SQL</span>
              </div>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '10px' }}>Secure Banking Application</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                A model of a simple, robust banking application written in <strong>Java</strong> with direct <strong>SQL integrations</strong>. Implements secure transactional schemas, user account validation layers, balance query operations, and structured credential checks via safe relational tables.
              </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <a 
                href="https://github.com/Meoclavez/Banking-App" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-cyber"
                style={{ fontSize: '12px', padding: '6px 12px' }}
              >
                <GitBranch size={14} /> Repository <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Project 2: Attendance Register */}
          <div style={{ background: 'var(--bg-card-sub)', border: '1px solid rgba(0, 240, 255, 0.1)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(5, 206, 145, 0.05)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code size={20} />
                </div>
                <span className="tag-cyber tag-green">Java OOP</span>
              </div>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '10px' }}>Academic Attendance Register</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                A structured coursework project managing student presence, batch registration profiles, and database indices. Built strictly adhering to Object-Oriented Programming (OOP) architectures in <strong>Java</strong> to handle dynamic entry lists and tracking reports.
              </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <a 
                href="https://github.com/Meoclavez/attendence-register" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-cyber"
                style={{ fontSize: '12px', padding: '6px 12px' }}
              >
                <GitBranch size={14} /> Repository <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
