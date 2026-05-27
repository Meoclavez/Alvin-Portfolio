import React, { useState } from 'react';
import TiltedCard from '../components/TiltedCard';
import { Award, Shield, Cpu, Code, ExternalLink, Calendar, CheckCircle2, Bookmark, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certId: string;
  grade?: string;
  fileUrl: string;
  color: string;
  tagColor: string;
  details: string[];
}

export const SkillsCertificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const skills = {
    cyber: [
      { name: 'Threat Hunting & Analysis', level: 90 },
      { name: 'Website Hacking & Penetration Testing', level: 85 },
      { name: 'Network Protocol Defences', level: 80 },
      { name: 'OWASP Top 10 Remediation', level: 85 },
    ],
    iot: [
      { name: 'Microcontroller (ESP32/Arduino) Integration', level: 95 },
      { name: 'Sensors Mesh & Protocol Networking', level: 85 },
      { name: 'Embedded Programming (C/C++)', level: 80 },
      { name: 'Smart System Automatons', level: 90 },
    ],
    web: [
      { name: 'React JS & Next.js 15 App Routers', level: 80 },
      { name: 'tRPC Network APIs', level: 75 },
      { name: 'Prisma ORM & PostgreSQL Grids', level: 75 },
      { name: 'Tailwind CSS Custom Styling', level: 85 },
    ]
  };

  const certificates: Certificate[] = [
    {
      id: 'nasscom',
      title: 'Digital 101 – 30 Hours',
      issuer: 'NASSCOM IT-ITeS Sector Skills Council',
      date: '27/05/2025',
      certId: 'FSP/2025/5/10223851',
      grade: 'GOLD (80.00% Score)',
      fileUrl: '/Alvin+Jomon_146428244.pdf.pdf',
      color: 'var(--color-primary)',
      tagColor: 'tag-cyber',
      details: [
        'Aligned to Competency Standards developed by NASSCOM, approved by Government of India.',
        'Module NOS M001: 87.50% Marks Obtained (NSQF Level 5)',
        'Module NOS M002: 81.25% Marks Obtained (NSQF Level 5)',
        'Module NOS M003: 65.00% Marks Obtained (NSQF Level 5)'
      ]
    },
    {
      id: 'ieee',
      title: 'Intro to Cybersecurity Workshop',
      issuer: 'IEEE Computer Society Kerala Chapter',
      date: '13/06/2025',
      certId: 'Informatyka 5.0 Travancore Hub',
      fileUrl: '/Alvin Jomon\u00a0.pdf',
      color: 'var(--color-secondary)',
      tagColor: 'tag-cyber tag-green',
      details: [
        'Organized in collaboration with IEEE Young Professionals Kerala Section.',
        'Intensive hands-on workshop covering penetration vectors and basic network security standards.',
        'Conducted at Travancore Hub as part of the regional Informatyka 5.0 event.'
      ]
    },
    {
      id: 'hacking',
      title: 'Website Hacking & Defence',
      issuer: 'Website Security Council Research',
      date: '28/12/2025',
      certId: 'CEP/WHD/2025/12',
      fileUrl: '/ALVIN JOMON (2).pdf',
      color: 'var(--color-accent)',
      tagColor: 'tag-cyber tag-purple',
      details: [
        'Advanced penetrative workshop focusing on OWASP vulnerabilities (SQLi, XSS, SSRF).',
        'Validated hands-on modules in securing server environments and defending input fields.',
        'Practical assessment completed with a scoring grade in final security sandbox audits.'
      ]
    },
    {
      id: 'kdisc',
      title: 'Voice of Stakeholder (VOS) Training',
      issuer: 'Kerala Development & Innovation Strategic Council',
      date: '09/10/2024',
      certId: 'K-DISC/YIP7/VOS',
      fileUrl: '/certificate.pdf',
      color: '#ff9900',
      tagColor: 'tag-cyber',
      details: [
        'Completed under the prestigious Young Innovators Program 7.0 (YIP 7.0).',
        'Covers stakeholder requirements gathering, qualitative feedback structuring, and innovative project scoping.',
        'Authorized by K-DISC Member Secretary Dr. P.V. Unnikrishnan.'
      ]
    }
  ];

  const handleCardClick = (cert: Certificate) => {
    setSelectedCert(cert);
    
    // Premium Interactive Confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#00ff66', '#8b5cf6']
    });
  };

  return (
    <div className="container-cyber">
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="tag-cyber tag-purple" style={{ marginBottom: '16px' }}>[ COMPLIANCE_AND_SKILLS ]</div>
        <h1 style={{ color: 'var(--text-bright)', fontSize: '3rem', fontWeight: 600, letterSpacing: '-1px' }}>
          Skills & <span className="text-glow-purple">Credentials</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '15px auto 0', fontSize: '16px', lineHeight: 1.6 }}>
          Review technical competency rankings, verified government-backed certificates, and specialized academic achievements.
        </p>
      </div>

      {/* Skills Layout */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px', 
          marginBottom: '50px' 
        }}
      >
        {/* Cybersecurity Column */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h2 style={{ color: 'var(--text-bright)', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Shield size={20} style={{ color: 'var(--color-primary)' }} />
            Cyber Security
          </h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skills.cyber.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-bright)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>{s.level}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* IoT Embedded Column */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h2 style={{ color: 'var(--text-bright)', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Cpu size={20} style={{ color: 'var(--color-secondary)' }} />
            IoT & Embedded
          </h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skills.iot.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-bright)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)' }}>{s.level}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: 'var(--color-secondary)', boxShadow: '0 0 10px var(--color-secondary)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Column */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h2 style={{ color: 'var(--text-bright)', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Code size={20} style={{ color: 'var(--color-accent)' }} />
            Web Architectures
          </h2>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skills.web.map((s, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-bright)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>{s.level}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: 'var(--color-accent)', boxShadow: '0 0 10px var(--color-accent)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Certificates Header */}
      <h2 style={{ color: 'var(--text-bright)', fontSize: '26px', textAlign: 'center', margin: '40px 0 20px', letterSpacing: '-1px' }}>
        Verified Certification Modules
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-main)', fontSize: '14px', marginBottom: '30px' }}>
        Click on any credential card to verify detail arrays, score percentages, and download complete archives.
      </p>

      {/* Certificates Grid */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
          gap: '24px' 
        }}
      >
        {certificates.map((cert) => (
          <TiltedCard 
            key={cert.id} 
            maxRotate={12} 
            onClick={() => handleCardClick(cert)}
          >
            <div 
              className="glass-panel"
              style={{
                padding: '24px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `4px solid ${cert.color}`,
                background: 'linear-gradient(to bottom right, rgba(13, 20, 30, 0.4) 0%, rgba(5, 7, 10, 0.6) 100%)',
                minHeight: '220px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Award size={18} style={{ color: cert.color }} />
                  <span className={cert.tagColor} style={{ fontSize: '9px' }}>VERIFIED</span>
                </div>
                
                <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginTop: '16px', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '6px' }}>
                  {cert.issuer}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} />
                  {cert.date}
                </span>
                <span style={{ fontSize: '12px', color: cert.color, fontWeight: 600 }}>Verify ↗</span>
              </div>
            </div>
          </TiltedCard>
        ))}
      </div>

      {/* Interactive Modal Overlays */}
      {selectedCert && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(3, 5, 8, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div 
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '550px',
              padding: '30px',
              border: `1px solid ${selectedCert.color}`,
              boxShadow: `0 0 40px ${selectedCert.color}20`,
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCert(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Contents */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Bookmark size={20} style={{ color: selectedCert.color }} />
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: selectedCert.color, letterSpacing: '1px' }}>
                [CREDENTIAL_RECORD]
              </div>
            </div>

            <h3 style={{ color: 'var(--text-bright)', fontSize: '24px', lineHeight: 1.3, marginBottom: '8px' }}>
              {selectedCert.title}
            </h3>
            
            <div style={{ fontSize: '14px', color: 'var(--text-bright)', marginBottom: '20px' }}>
              {selectedCert.issuer}
            </div>

            {/* Tech Details Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--bg-main)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
              <div className="modal-row-cyber" style={{ fontSize: '13px' }}>
                <span style={{ color: 'var(--text-muted)' }}>CREDENTIAL ID:</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: selectedCert.color, fontWeight: 600 }}>{selectedCert.certId}</span>
              </div>
              <div className="modal-row-cyber" style={{ fontSize: '13px' }}>
                <span style={{ color: 'var(--text-muted)' }}>ISSUE DATE:</span>
                <span style={{ color: 'var(--text-bright)' }}>{selectedCert.date}</span>
              </div>
              {selectedCert.grade && (
                <div className="modal-row-cyber" style={{ fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>ASSESSMENT GRADE:</span>
                  <span style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>{selectedCert.grade}</span>
                </div>
              )}
            </div>

            <h4 style={{ color: 'var(--text-bright)', fontSize: '14px', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
              SYLLABUS & VERIFIED COMPETENCIES:
            </h4>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', marginBottom: '30px' }}>
              {selectedCert.details.map((det, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} style={{ color: selectedCert.color, marginTop: '2px', flexShrink: 0 }} />
                  <span>{det}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href={selectedCert.fileUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-cyber" 
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Open Official PDF <ExternalLink size={14} />
              </a>
              <button 
                onClick={() => setSelectedCert(null)}
                className="btn-cyber btn-green"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillsCertificates;
