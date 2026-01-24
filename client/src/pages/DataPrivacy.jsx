import React from 'react';
import {
    Fingerprint,
    Mail,
    Phone,
    Smartphone,
    Globe,
    FileText,
    ListChecks,
    AlertCircle,
    Building2,
    CheckCircle2
} from 'lucide-react';

export default function DataPrivacy() {
    const contactInfo = [
        { icon: <Globe size={20} />, label: 'Official Website', value: 'privacy.gov.ph', url: 'https://privacy.gov.ph/' },
        { icon: <Mail size={20} />, label: 'Email Complaints', value: 'complaints@privacy.gov.ph', url: 'mailto:complaints@privacy.gov.ph' },
        { icon: <Phone size={20} />, label: 'Hotline', value: 'Local 114 or 115', url: null },
        { icon: <Smartphone size={20} />, label: 'Smart Mobile', value: '+63 970 818 0555', url: 'tel:+639708180555' },
        { icon: <Smartphone size={20} />, label: 'Globe Mobile', value: '+63 905 506 1478', url: 'tel:+639055061478' }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--color-text-accent)', marginBottom: '1.5rem' }}>
                        <Fingerprint size={48} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>National Privacy Commission (NPC)</h1>
                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                        The Data Protection Authority of the Philippines, mandated to administer and implement the Data Privacy Act of 2012.
                    </p>
                </div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Contact Information */}
                    <div className="card" style={{ height: 'fit-content' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Building2 className="text-accent" /> Contact Directory
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {contactInfo.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
                                    <div className="text-accent" style={{ opacity: 0.8 }}>{item.icon}</div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>{item.label}</span>
                                        {item.url ? (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: '500', color: 'white' }}>{item.value}</a>
                                        ) : (
                                            <span style={{ fontWeight: '500' }}>{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Expectation Setting */}
                    <div className="card">
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <ListChecks className="text-accent" /> Filing a Complaint
                        </h2>
                        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-bg-tertiary)' }}>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>1. Exhaustion of Remedies</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>You must first attempt to resolve the issue directly with the person or entity involved. Wait 15 days for their response before escalating to NPC.</p>
                            </div>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>2. Documenting the Violation</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Gather all evidence of the personal data breach or impersonation. Ensure you have copies of your attempt to resolve it directly.</p>
                            </div>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>3. Formal Submission</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Submit your complaint via the NPC Complaints Management System or through their physical/email channels.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Advisory */}
                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <AlertCircle className="text-accent" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                        <div>
                            <h3 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.1rem' }}>Impersonation is a Violation</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                                According to NPC Advisories, using someone else's identity to create a profile (impersonation) may constitute a violation of the Data Privacy Act, especially if it leads to unauthorized processing of personal data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Ready to take action?</h2>
                    <p className="text-muted mb-4">We've linked official resources below to help you prepare your formal complaint.</p>
                    <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://privacy.gov.ph/complaints-main/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Access NPC Complaints Portal <FileText size={18} />
                        </a>
                        <a href="https://privacy.gov.ph/advisories/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Read NPC Circulars & Advisories
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
