import React, { useState } from 'react';
import { Terminal, Cpu, Monitor, Keyboard, Laptop, Code } from 'lucide-react';
import TiltedCard from '../components/TiltedCard';

export const DesktopSetup: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'hypr' | 'sync'>('hypr');

  const specs = [
    { label: 'OPERATING SYSTEM', value: 'Arch Linux x86_64', color: 'var(--color-primary)' },
    { label: 'COMPOSITOR', value: 'Hyprland (Wayland Tiling)', color: 'var(--color-secondary)' },
    { label: 'SHELL SYSTEM', value: 'Caelestia Shell v1.0.0-Beta', color: 'var(--color-accent)' },
    { label: 'WINDOW ENGINE', value: 'Caelestia Resizer (Auto Match)', color: '#ff9900' },
    { label: 'RGB CONTROLLER', value: 'asusctl / Aura Sync Dynamic', color: 'var(--color-green)' },
    { label: 'BACKLIGHT SYNC', value: 'Python DBus Dominant Quantization', color: '#ff3366' },
  ];

  const codeSnippets = {
    hypr: `# Export Wayland variables to Systemd
exec-once = dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE QT_QPA_PLATFORM

# Keyring and auth
exec-once = gnome-keyring-daemon --start --components=secrets
exec-once = /usr/bin/kwalletd6
exec-once = /usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1

# Clipboard history
exec-once = wl-paste --type text --watch cliphist store
exec-once = wl-paste --type image --watch cliphist store

# Resize and move windows based on matches (e.g. pip)
exec-once = caelestia resizer -d

# Start Caelestia Shell with Anime Wallpapers
exec-once = caelestia shell -d`,
    sync: `def get_highlight_color(image_path):
    """Analyze the image and find the brightest dominant color using Pillow."""
    try:
        img = Image.open(image_path).convert('RGB')
        img.thumbnail((150, 150)) # Fast processing
        
        # Calculate scores for brightness and color
        scored_pixels = []
        for r, g, b in pixels:
            h, l, s = colorsys.rgb_to_hls(r/255.0, g/255.0, b/255.0)
            score = l + s * 0.5
            scored_pixels.append((score, r, g, b))
            
        # Sort by score descending and group colors (quantize)
        scored_pixels.sort(key=lambda x: x[0], reverse=True)
        BIN_SIZE = 32
        # Average top colors and return static Aura RGB color...
        return f"{avg_r:02x}{avg_g:02x}{avg_b:02x}"
    except Exception as e:
        return "ffffff"`
  };

  return (
    <div className="container-cyber">
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="tag-cyber" style={{ marginBottom: '16px' }}>[ CYBER_DECK_RICE ]</div>
        <h1 style={{ color: 'var(--text-bright)', fontSize: '3rem', fontWeight: 600, letterSpacing: '-1px' }}>
          Custom <span className="text-glow-cyan">Rig & OS</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '15px auto 0', fontSize: '16px', lineHeight: 1.6 }}>
          A showcase of custom operating systems, bespoke tiling compositor setups, automated shells, and ambient peripheral synchronizations.
        </p>
      </div>

      {/* Grid: Tilted Card Setup Mockup + Technical Specs */}
      <div className="grid-cyber-split">
        {/* Left Side: System Specifications */}
        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '12px', fontWeight: 600 }}>
              <Laptop size={16} />
              [RIG_SPECIFICATION_MATRIX]
            </div>
            
            <h2 style={{ color: 'var(--text-bright)', fontSize: '30px', marginTop: '16px', letterSpacing: '-1px' }}>
              Caelestia System Deck
            </h2>
            <p style={{ fontSize: '15px', marginTop: '12px', lineHeight: 1.7 }}>
              A highly customized personal workstation environment built on <strong>Arch Linux</strong>. Integrated with a customized <strong>Hyprland Wayland compositor</strong> and custom tools executing visual configurations, beautiful anime-inspired floating panels, and hardware-accelerated ambient rendering.
            </p>

            {/* Spec Matrix List */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px', marginTop: '25px' }}>
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '10px 14px', 
                    background: 'var(--bg-main)', 
                    borderRadius: '8px', 
                    borderLeft: `3px solid ${spec.color}` 
                  }}
                >
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    {spec.label}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-bright)', fontWeight: 600, textAlign: 'right' }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginTop: '30px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>
              // ARCH_STATUS: FULLY_RICED
            </span>
          </div>
        </div>

        {/* Right Side: Virtual Cyber Deck Visual Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TiltedCard maxRotate={10}>
            <div 
              className="glass-panel" 
              style={{ 
                height: '100%', 
                padding: '35px 30px', 
                background: 'var(--bg-card-gradient)',
                border: '1px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '380px'
              }}
            >
              <Cpu size={64} style={{ color: 'var(--color-primary)', margin: '0 auto 20px', animation: 'floatAnimation 6s ease-in-out infinite' }} />
              <h3 style={{ color: 'var(--text-bright)', fontSize: '22px', fontFamily: 'var(--font-mono)' }}>CAELESTIA_SYSTEM_V1</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '12px', lineHeight: 1.6 }}>
                Featuring ultra-smooth custom window animations, dynamic window-swapping matrices, glassmorphic anime backgrounds, and live ambient syncing across peripherals.
              </p>
              
              <div 
                style={{ 
                  marginTop: '25px', 
                  fontSize: '11px', 
                  fontFamily: 'var(--font-mono)', 
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Monitor size={14} />
                <span>DISPLAY ENGINE: WAYLAND // RENDERER: GL</span>
              </div>
            </div>
          </TiltedCard>
        </div>
      </div>

      {/* Section: Custom Systems Projects */}
      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)', fontSize: '12px', fontWeight: 600, marginBottom: '20px' }}>
          <Code size={16} />
          [SYSTEMS_ENGINEERING_PLUGINS]
        </div>
        
        <h2 style={{ color: 'var(--text-bright)', fontSize: '24px', marginBottom: '24px' }}>
          Workstation & Visual Customization Packages
        </h2>

        <div className="grid-cyber-split" style={{ margin: '0' }}>
          {/* Card 1: Backlight Sync Daemon */}
          <div style={{ background: 'var(--bg-card-sub)', border: '1px solid rgba(0, 240, 255, 0.1)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(0, 240, 255, 0.05)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'center' }}>
                <Keyboard size={20} />
              </div>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '10px' }}>Plasma & Aura Backlight Sync</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                A custom Python-based background service connecting to <strong>D-Bus session channels</strong>. It captures immediate <code>wallpaperChanged</code> signals from the shell, reads and parses wallpaper assets via <strong>Pillow image dominant color quantization</strong>, and instantly re-flashes the laptop's RGB keyboard matrix under 100ms utilizing <code>asusctl Aura configurations</code>.
              </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <span className="tag-cyber">Python 3</span>
              <span className="tag-cyber tag-purple">D-Bus Session API</span>
              <span className="tag-cyber tag-green">Pillow (PIL)</span>
              <span className="tag-cyber">asusctl System Interface</span>
            </div>
          </div>

          {/* Card 2: Caelestia Desktop Environment */}
          <div style={{ background: 'var(--bg-card-sub)', border: '1px solid rgba(0, 240, 255, 0.1)', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(5, 206, 145, 0.05)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'center' }}>
                <Monitor size={20} />
              </div>
              <h3 style={{ color: 'var(--text-bright)', fontSize: '18px', marginBottom: '10px' }}>Caelestia Wayland Shell</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: 1.6 }}>
                A fully customized, reactive shell written on top of modern compositing libraries. Operates a custom resizer (<strong>caelestia-resizer</strong>) which listens for active window hooks to automatically align layouts, and mounts floating widgets containing glassmorphic status bars, custom visual widgets, and anime background styling.
              </p>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <span className="tag-cyber tag-green">Hyprland Compositor</span>
              <span className="tag-cyber">Quickshell Panels</span>
              <span className="tag-cyber tag-purple">Zsh & Custom Profiles</span>
              <span className="tag-cyber tag-green">Wayland Compositing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Code Snippets Viewer Panel */}
      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', color: 'var(--text-bright)', fontSize: '14px', fontWeight: 600 }}>
            <Terminal size={18} style={{ color: 'var(--color-primary)' }} />
            <span>CONFIG_ARCHIVE_TERMINAL</span>
          </div>

          {/* Config Tabs */}
          <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-main)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <button 
              onClick={() => setActiveCodeTab('hypr')}
              style={{
                background: activeCodeTab === 'hypr' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                color: activeCodeTab === 'hypr' ? 'var(--color-primary)' : 'var(--text-muted)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              hyprland/execs.conf
            </button>
            <button 
              onClick={() => setActiveCodeTab('sync')}
              style={{
                background: activeCodeTab === 'sync' ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                color: activeCodeTab === 'sync' ? 'var(--color-primary)' : 'var(--text-muted)',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              plasma-backlight-sync.py
            </button>
          </div>
        </div>

        {/* Mock Terminal Screen */}
        <div 
          style={{ 
            background: 'rgba(3, 5, 8, 0.95)', 
            border: '1px solid rgba(0, 240, 255, 0.15)', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
          }}
        >
          {/* Window header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '10px' }}>
              guest@aj_sec_deck: ~/{activeCodeTab === 'hypr' ? '.config/hypr/hyprland/execs.conf' : '.local/bin/plasma-backlight-sync.py'}
            </span>
          </div>
          
          <pre 
            style={{ 
              margin: 0, 
              padding: '20px', 
              overflowX: 'auto', 
              fontSize: '13px', 
              fontFamily: 'var(--font-mono)', 
              color: 'rgba(0, 240, 255, 0.85)',
              lineHeight: 1.5,
              maxHeight: '300px'
            }}
          >
            <code>{codeSnippets[activeCodeTab]}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DesktopSetup;
