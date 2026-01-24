import React from 'react';
import {
    Globe,
    BookOpen,
    Shield,
    ExternalLink,
    Library,
    Compass,
    GraduationCap,
    HeartPulse
} from 'lucide-react';
import { GLOBAL_RESOURCES } from '../data/globalResources';

const ResourceIcon = ({ id }) => {
    switch (id) {
        case 'chayn': return <Shield size={24} className="text-accent" />;
        case 'australia-esafety': return <Compass size={24} className="text-accent" />;
        case 'unfpa': return <Library size={24} className="text-accent" />;
        case 'fma': return <HeartPulse size={24} className="text-accent" />;
        case 'cnxus': return <GraduationCap size={24} className="text-accent" />;
        case 'svri': return <BookOpen size={24} className="text-accent" />;
        default: return <Globe size={24} className="text-accent" />;
    }
};

export default function GlobalResources() {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                    <Globe size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>TFGBV Global Resources</h1>
                <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Educational resources and international guides on online safety and Technology-Facilitated Gender-Based Violence (TFGBV).
                </p>
            </div>

            <div className="grid-responsive">
                {GLOBAL_RESOURCES.map((res) => (
                    <div key={res.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: 'var(--radius-md)',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <ResourceIcon id={res.id} />
                            </div>
                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '60%' }}>
                                {res.tags.map(tag => (
                                    <span key={tag} style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--color-text-accent)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'white' }}>{res.name}</h3>
                        <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>
                            {res.description}
                        </p>

                        <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: 'auto' }}
                        >
                            Access Resource <ExternalLink size={18} />
                        </a>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '5rem', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-bg-tertiary)', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Need immediate support in the Philippines?</h2>
                <p className="text-muted mb-4">We've compiled specialized local resources for survivors of online harassment and gender-based violence.</p>
                <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="/templates/counseling" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                        Social & Mental Health Services
                    </a>
                    <a href="/templates/takedown-request" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                        Takedown Request Builder
                    </a>
                </div>
            </div>
        </div>
    );
}
