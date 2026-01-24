import React from 'react';
import {
    Phone,
    Shield,
    AlertTriangle,
    ArrowLeft,
    Info,
    ChevronRight,
    FileText,
    ExternalLink,
    Scale,
    Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LawEnforcement() {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', color: 'var(--color-danger)', marginBottom: '1.5rem' }}>
                        <Scale size={48} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Law Enforcement Support</h1>
                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                        Guidance for survivors who wish to consult with law enforcement or file criminal complaints.
                    </p>
                </div>

                {/* Main Hotline Card */}
                <div className="card mb-4" style={{
                    border: '2px solid var(--color-danger)',
                    background: 'linear-gradient(to bottom right, rgba(239, 68, 68, 0.1), transparent)'
                }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ padding: '1.5rem', background: 'var(--color-danger)', borderRadius: 'var(--radius-lg)', color: 'white' }}>
                            <Phone size={32} />
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '0.25rem' }}>DICT-CICC Hotline</h2>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-danger)', margin: 0 }}>#1326</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>
                            <strong>Your first point-of-call.</strong> The Cybercrime Investigation and Coordinating Center (CICC) is mandated to provide immediate technical assistance and coordinate investigations into cybercrime.
                        </p>
                    </div>
                </div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {/* VAW-C Exception Section */}
                    <div className="card" style={{ borderLeft: '4px solid #f472b6' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f472b6' }}>
                            <Users size={20} /> VAW-C Cases
                        </h3>
                        <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                            If you need officers trained specifically for Violence Against Women and Children (VAW-C) cases, please contact the PNP specialize unit.
                        </p>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(244, 114, 182, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 114, 182, 0.1)' }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>PNP Women and Children Protection Center (WCPC)</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                    <Phone size={16} /> Hotline: 177
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    <Phone size={14} /> Aleng Pulis: 0919 777 7377
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expectation Setting */}
                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Info size={20} className="text-accent" /> What to Expect
                        </h3>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            Filing a complaint is a formal process. Here is what happens when you reach out:
                        </p>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            <li className="mb-2"><strong>Initial Consultation:</strong> Officers will listen to your situation and assess the potential violations.</li>
                            <li className="mb-2"><strong>Verification:</strong> You will be asked to provide evidence (screenshots, links, etc).</li>
                            <li className="mb-2"><strong>Action:</strong> DICT-CICC coordinates with relevant platforms and law enforcement units to act on your case.</li>
                        </ul>
                    </div>
                </div>

                {/* Legal Resources Section */}
                <div style={{ marginTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Legal Resources & Guides</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        <a
                            href="https://cicc.gov.ph/wp-content/uploads/2025/04/What-is-RA-10175-Brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-hover-effect"
                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', color: 'white' }}
                        >
                            <FileText className="text-accent" size={24} />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>RA 10175 Brochure</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>What is the Cybercrime Prevention Act?</div>
                            </div>
                            <ExternalLink size={16} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                        </a>

                        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <Shield className="text-accent" size={24} />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>Cyberbullying Triage</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>How to file a complaint in the PH</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-bg-tertiary)', textAlign: 'center' }}>
                    <p className="text-muted mb-4">Are you a victim of impersonation or data privacy violation instead?</p>
                    <Link to="/templates/npc-complaint" className="btn btn-outline">
                        Visit Data Privacy Support (NPC)
                    </Link>
                </div>
            </div>
        </div>
    );
}
