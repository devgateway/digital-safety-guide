import { Routes, Route, Link } from 'react-router-dom';
import { Shield, BookOpen, Phone, Menu, X, ChevronDown, FileText, Heart, Globe, Scale, Fingerprint } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

import Directory from './pages/Directory';
import Guide from './pages/Guide';
import TemplateBuilder from './pages/TemplateBuilder';
import CounselingResources from './pages/CounselingResources';
import GlobalResources from './pages/GlobalResources';
import LawEnforcement from './pages/LawEnforcement';
import DataPrivacy from './pages/DataPrivacy';
import EmergencyExit from './components/EmergencyExit';
import { useLanguage, LANGUAGES } from './contexts/LanguageContext';

function Navbar({ onEmergency }) {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav style={{ borderBottom: '1px solid var(--color-bg-tertiary)', padding: '1rem 0', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }} onClick={() => { setResourcesOpen(false); setIsOpen(false); }}>
          <Shield className="text-accent" />
          <span>{t('nav.brand')}</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="btn-outline" style={{ padding: '0.5rem', display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <button onClick={onEmergency} className="btn btn-danger" style={{ textDecoration: 'none', whiteSpace: 'nowrap', border: 'none' }}>
            {t('nav.emergency')}
          </button>

          {/* Language Switcher */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Globe size={18} style={{ marginRight: '0.5rem', opacity: 0.8 }} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {LANGUAGES.map(lang => (
                <option key={lang.code} value={lang.code} style={{ color: 'black' }}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>

          <Link to="/directory" className="flex-center" style={{ gap: '0.5rem' }}><Phone size={18} /> {t('nav.directory')}</Link>
          <Link to="/guide" className="flex-center" style={{ gap: '0.5rem' }}><BookOpen size={18} /> {t('nav.guide')}</Link>

          {/* Resources Dropdown */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex-center"
              style={{
                gap: '0.4rem',
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                font: 'inherit',
                padding: '0.5rem 0'
              }}
            >
              {t('nav.resources')} <ChevronDown size={16} style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {resourcesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem',
                minWidth: '220px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
                marginTop: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                zIndex: 101,
                animation: 'fadeIn 0.2s ease-out'
              }}>
                <Link
                  to="/templates/takedown-request"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'white'
                  }}
                  className="card-hover-effect"
                  onClick={() => setResourcesOpen(false)}
                >
                  <FileText size={18} className="text-accent" />
                  <span>{t('nav.takedown')}</span>
                </Link>
                <Link
                  to="/templates/counseling"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'white'
                  }}
                  className="card-hover-effect"
                  onClick={() => setResourcesOpen(false)}
                >
                  <Heart size={18} className="text-accent" />
                  <span>{t('nav.mental_health')}</span>
                </Link>
                <Link
                  to="/resources/global-tech"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'white'
                  }}
                  className="card-hover-effect"
                  onClick={() => setResourcesOpen(false)}
                >
                  <Globe size={18} className="text-accent" />
                  <span>{t('nav.global_safety')}</span>
                </Link>
                <Link
                  to="/templates/dict-cicc-hotline"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'white'
                  }}
                  className="card-hover-effect"
                  onClick={() => setResourcesOpen(false)}
                >
                  <Scale size={18} className="text-accent" />
                  <span>{t('nav.law_enforcement')}</span>
                </Link>
                <Link
                  to="/templates/npc-complaint"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'white'
                  }}
                  className="card-hover-effect"
                  onClick={() => setResourcesOpen(false)}
                >
                  <Fingerprint size={18} className="text-accent" />
                  <span>{t('nav.data_privacy')}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [emergency, setEmergency] = useState(false);
  const { t } = useLanguage();

  if (emergency) {
    return <EmergencyExit />;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onEmergency={() => setEmergency(true)} />
      <main style={{ flex: 1, padding: '2rem 0' }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/:topicId" element={<Quiz />} />
          <Route path="/quiz/:topicId/:nodeId" element={<Quiz />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/templates/takedown-request" element={<TemplateBuilder />} />
          <Route path="/templates/counseling" element={<CounselingResources />} />
          <Route path="/resources/global-tech" element={<GlobalResources />} />
          <Route path="/templates/dict-cicc-hotline" element={<LawEnforcement />} />
          <Route path="/templates/npc-complaint" element={<DataPrivacy />} />
        </Routes>
      </main>
      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--color-bg-tertiary)', textAlign: 'center' }} className="text-muted">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{t('footer.powered_by')}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>IREX</span>
              <span style={{ height: '20px', width: '1px', background: 'var(--color-text-secondary)' }}></span>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Development Gateway</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
