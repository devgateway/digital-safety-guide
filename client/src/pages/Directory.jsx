import React, { useState } from 'react';
import { Phone, MapPin, Globe, Search } from 'lucide-react';

const RESOURCES = [
    {
        name: 'PNP Anti-Cybercrime Group (PNP-ACG)',
        type: 'Law Enforcement',
        hotline: '+63 998 598 8116',
        email: 'incidents@acg.pnp.gov.ph',
        address: 'Camp Crame, Quezon City',
        website: 'acg.pnp.gov.ph',
        tags: ['police', 'cybercrime', 'reporting']
    },
    {
        name: 'NBI Cybercrime Division (NBI-CCD)',
        type: 'Law Enforcement',
        hotline: '+63 2 8523 8231',
        email: 'ccd@nbi.gov.ph',
        address: 'NBI Building, Taft Avenue, Manila',
        tags: ['investigation', 'cybercrime', 'nbi']
    },
    {
        name: 'DOJ - Office of Cybercrime',
        type: 'Legal Support',
        hotline: '+63 2 8524 2265',
        email: 'cybercrime@doj.gov.ph',
        address: 'Padre Faura St, Ermita, Manila',
        tags: ['legal', 'prosecution']
    },
    {
        name: 'National Privacy Commission (NPC)',
        type: 'Privacy Rights',
        hotline: '+63 2 8234 2228',
        email: 'complaints@privacy.gov.ph',
        address: 'PICC Complex, Pasay City',
        tags: ['privacy', 'doxxing', 'data']
    },
    {
        name: 'DSWD Recovery and Reintegration Program',
        type: 'Support Service',
        hotline: '+63 2 8931 8101',
        address: 'Batasan Hills, Quezon City',
        tags: ['mental health', 'survivor support', 'counseling']
    },
    {
        name: 'Commission on Human Rights (CHR)',
        type: 'Human Rights',
        hotline: '+63 2 8294 8704',
        email: 'concerns@chr.gov.ph',
        address: 'Commonwealth Ave, Diliman, Quezon City',
        tags: ['human rights', 'women']
    }
];

export default function Directory() {
    const [query, setQuery] = useState('');

    const filtered = RESOURCES.filter(r =>
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.tags.some(t => t.includes(query.toLowerCase()))
    );

    return (
        <div className="container animate-fade-in">
            <div className="text-center mb-4">
                <h1>Resource Directory</h1>
                <p className="text-muted">Verified contacts for legal, technical, and emotional support.</p>

                <div style={{ position: 'relative', maxWidth: '500px', margin: '2rem auto' }}>
                    <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} size={20} />
                    <input
                        type="text"
                        placeholder="Search agencies, tags..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="input"
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-bg-tertiary)',
                            background: 'var(--color-bg-secondary)',
                            color: 'white',
                            fontSize: '1rem'
                        }}
                    />
                </div>
            </div>

            <div className="grid-responsive">
                {filtered.map((res, i) => (
                    <div key={i} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{res.name}</h3>
                            <span className="badge" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--color-bg-tertiary)', borderRadius: '4px' }}>{res.type}</span>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {res.hotline && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                                    <Phone size={16} className="text-accent" />
                                    <span>{res.hotline}</span>
                                </div>
                            )}
                            {res.address && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                                    <MapPin size={16} className="text-accent" />
                                    <span>{res.address}</span>
                                </div>
                            )}
                            {res.website && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                                    <Globe size={16} className="text-accent" />
                                    <a href={`https://${res.website}`} target="_blank" rel="noreferrer">{res.website}</a>
                                </div>
                            )}
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {res.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
