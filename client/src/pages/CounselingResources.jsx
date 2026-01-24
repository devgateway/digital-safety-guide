import React from 'react';
import {
    Phone,
    Globe,
    Mail,
    MessageCircle,
    Facebook,
    ArrowLeft,
    Heart,
    ExternalLink,
    AlertCircle,
    UserCircle2
} from 'lucide-react';
import { COUNSELING_RESOURCES } from '../data/counselingResources';

export default function CounselingResources() {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    <Heart size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Social & Mental Health Services</h1>
                <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Immediate access to non-law-enforcement professional support. These resources are dedicated to providing safety and care.
                </p>
            </div>

            <div className="grid-responsive">
                {COUNSELING_RESOURCES.map((res) => (
                    <div key={res.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>{res.name}</h3>
                            <UserCircle2 className="text-accent" size={24} />
                        </div>

                        <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{res.description}</p>

                        {res.note && (
                            <div style={{
                                display: 'flex',
                                gap: '0.5rem',
                                background: 'rgba(56, 189, 248, 0.1)',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                marginBottom: '1.5rem',
                                borderLeft: '3px solid var(--color-text-accent)',
                                fontSize: '0.85rem'
                            }}>
                                <AlertCircle size={16} className="text-accent" style={{ flexShrink: 0 }} />
                                <span>{res.note}</span>
                            </div>
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {res.hotline && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Phone size={16} style={{ color: 'var(--color-success)' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 'bold', textTransform: 'uppercase' }}>Hotline</span>
                                        <span style={{ fontWeight: '600' }}>{res.hotline}</span>
                                    </div>
                                </div>
                            )}

                            {res.phones && res.phones.map((p, i) => (
                                <div key={i} className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Phone size={16} className="text-accent" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{p.label}</span>
                                        <span>{p.number}</span>
                                    </div>
                                </div>
                            ))}

                            {res.viber && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <MessageCircle size={16} className="text-accent" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Viber</span>
                                        <span>{res.viber}</span>
                                    </div>
                                </div>
                            )}

                            {res.email && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Mail size={16} className="text-accent" />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Email</span>
                                        <a href={`mailto:${res.email}`} style={{ fontSize: '0.9rem' }}>{res.email}</a>
                                    </div>
                                </div>
                            )}

                            {res.chat && (
                                <a
                                    href={res.chat}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginTop: '0.5rem' }}
                                >
                                    Chat Now <MessageCircle size={18} />
                                </a>
                            )}

                            {res.website && !res.chat && (
                                <a
                                    href={res.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ width: '100%', marginTop: '0.5rem' }}
                                >
                                    Visit Website <Globe size={18} />
                                </a>
                            )}

                            {res.facebook && (
                                <a
                                    href={`https://${res.facebook}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ width: '100%', marginTop: '0.5rem' }}
                                >
                                    Facebook Page <Facebook size={18} />
                                </a>
                            )}
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {res.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--color-text-secondary)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <p className="text-muted mb-4">Need help with a formal takedown request instead?</p>
                <a href="/templates/takedown-request" className="btn btn-outline">
                    Go to Takedown Request Builder
                </a>
            </div>
        </div>
    );
}
