import { Routes, Route, Link } from 'react-router-dom';
import { Shield, BookOpen, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

import Home from './pages/Home';
import Quiz from './pages/Quiz';

import Directory from './pages/Directory';
import Guide from './pages/Guide';
import EmergencyExit from './components/EmergencyExit';

function Navbar({ onEmergency }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ borderBottom: '1px solid var(--color-bg-tertiary)', padding: '1rem 0', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
          <Shield className="text-accent" />
          <span>Online Harassment Support</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="btn-outline" style={{ padding: '0.5rem', display: 'none' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
          <button onClick={onEmergency} className="btn btn-danger" style={{ textDecoration: 'none', whiteSpace: 'nowrap', border: 'none' }}>
            Emergency Exit
          </button>

          <Link to="/directory" className="flex-center" style={{ gap: '0.5rem' }}><Phone size={18} /> Directory</Link>
          <Link to="/guide" className="flex-center" style={{ gap: '0.5rem' }}><BookOpen size={18} /> Guide</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [emergency, setEmergency] = useState(false);

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
        </Routes>
      </main>
      <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--color-bg-tertiary)', textAlign: 'center' }} className="text-muted">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.8 }}>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Powered by</span>
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
