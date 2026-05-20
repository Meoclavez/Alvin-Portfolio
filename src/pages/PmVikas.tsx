import React from 'react';
import { Cpu, Calendar, BookOpen, Download, ExternalLink } from 'lucide-react';

export const PmVikas: React.FC = () => {
  const syllabusItems = [
    { title: 'IoT Hardware Architectures', desc: 'Working with ESP32, Arduino microcontrollers, and microprocessors.' },
    { title: 'Sensor Integration & Protocols', desc: 'Deploying analog/digital sensors using I2C, SPI, UART, and GPIO links.' },
    { title: 'Network Frameworks', desc: 'Connecting smart nodes using MQTT, HTTP WebSockets, and LoRaWAN meshes.' },
    { title: 'Edge Computing & Logic', desc: 'Programming local rules, edge analytics, and real-time controller triggers.' },
    { title: 'Industry Applications', desc: 'Deploying smart home grids, automated agriculture, and environmental sensors.' },
  ];

  return (
    <div className="container-cyber">
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="tag-cyber tag-green" style={{ marginBottom: '16px' }}>[ NATIONAL_SCHEME_TRAINING ]</div>
        <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 600, letterSpacing: '-1px' }}>
          PM VIKAS <span className="text-glow-green">IoT Assistant</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '15px auto 0', fontSize: '16px', lineHeight: 1.6 }}>
          Specialized central skilling program by the Ministry of Minority Affairs, implemented at the prestigious Indian Institute of Information Technology (IIIT) Kottayam.
        </p>
      </div>

      {/* Grid Layout: Details & Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '30px', margin: '40px 0' }}>
        {/* Large Details Card */}
        <div className="glass-panel" style={{ padding: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Cpu size={24} style={{ color: 'var(--color-secondary)' }} />
            IIIT Kottayam Project Implementation
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px', lineHeight: 1.7 }}>
            <p>
              In July 2025, the **Indian Institute of Information Technology (IIIT) Kottayam** was selected to implement a specialized training project under the **PM VIKAS (Pradhan Mantri Virasat Ka Samvardhan)** scheme, making it the **first higher education institution in the country** to do so.
            </p>
            <p>
              Fully funded by the Ministry of Minority Affairs, this project aims to empower 450 candidates in high-employment, modern technical sectors. The program is divided into two focused sectors:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '10px' }}>
              <div 
                style={{ 
                  background: 'rgba(0, 255, 102, 0.05)', 
                  border: '1px solid rgba(0, 255, 102, 0.2)', 
                  padding: '20px', 
                  borderRadius: '12px' 
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-secondary)', fontSize: '16px' }}>150 Youth in IoT</div>
                <div style={{ fontSize: '13px', marginTop: '6px', color: 'var(--text-main)' }}>
                  Intensive classroom-based classroom training focusing on emerging hardware networks, IoT nodes, and embedded engineering.
                </div>
              </div>

              <div 
                style={{ 
                  background: 'rgba(139, 92, 246, 0.05)', 
                  border: '1px solid rgba(139, 92, 246, 0.2)', 
                  padding: '20px', 
                  borderRadius: '12px' 
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-accent)', fontSize: '16px' }}>300 Women Entrepreneurs</div>
                <div style={{ fontSize: '13px', marginTop: '6px', color: 'var(--text-main)' }}>
                  Advanced training in Women Entrepreneurship & Leadership to support starting new technical business ventures.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enrollment & Resources Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Status Box */}
          <div className="glass-panel" style={{ padding: '30px', borderLeft: '4px solid var(--color-secondary)' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} style={{ color: 'var(--color-secondary)' }} />
              Registration Profile
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px', fontSize: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>BATCH CODE:</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--color-secondary)' }}>PM VIKAS · NTS · IIITK</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>LEARNER STATUS:</span>
                <span className="tag-cyber tag-green" style={{ fontSize: '10px' }}>INTEREST_REGISTERED</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>PROVIDER:</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>IIIT Kottayam Campus</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>TRAINING MODE:</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>Offline / Classroom</span>
              </div>
            </div>
          </div>

          {/* Resources Download */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} style={{ color: 'var(--color-primary)' }} />
              Learner Resources
            </h3>
            <p style={{ fontSize: '13px', marginTop: '8px', lineHeight: 1.5 }}>
              Refer to the official registration manual detailing steps, portal instructions, and documents needed for verification.
            </p>
            
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href="/SIDH — IoT Assistant Registration Guide.pdf" 
                target="_blank"
                rel="noreferrer"
                className="btn-cyber" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={16} />
                SIDH Guide PDF
              </a>
              <a 
                href="https://www.skillindiadigital.gov.in" 
                target="_blank"
                rel="noreferrer"
                className="btn-cyber btn-purple" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Skill India Hub <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Training Syllabus Showcase */}
      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <h2 style={{ color: '#fff', fontSize: '24px', textAlign: 'center', marginBottom: '30px' }}>
          IoT Assistant Training Core Curriculums
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {syllabusItems.map((item, index) => (
            <div 
              key={index} 
              style={{ 
                background: 'rgba(10, 15, 25, 0.4)', 
                border: '1px solid rgba(0, 240, 255, 0.1)', 
                padding: '24px', 
                borderRadius: '12px' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 102, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    background: 'rgba(0, 255, 102, 0.1)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--color-secondary)',
                    fontWeight: 700,
                    fontSize: '14px',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  0{index + 1}
                </div>
                <h3 style={{ color: '#fff', fontSize: '17px' }}>{item.title}</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Embedded Mobile CSS */}
      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 7fr 5fr"] {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PmVikas;
