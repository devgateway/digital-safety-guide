import React, { useState } from 'react';
import { Phone, Mail, Globe, Search } from 'lucide-react';

const RESOURCES = [
    {
        name: 'Cybercrime Investigation and Coordinating Center (CICC)',
        type: 'Legal support',
        description: 'Inter-Agency response task force.',
        hotline: ['#1326', '0991-481-4225 (Dito)', '0947-7147-105 (Smart)', '0966-976-5971 (Globe)'],
        website: 'cicc.gov.ph/report/',
        tags: ['reporting', 'cybercrime', 'investigation']
    },
    {
        name: 'PNP Aling Pulis',
        type: 'Gender Sensitive',
        description: '24/7 hotline dedicated specifically to responding to violence against women and children.',
        hotline: ['0919-7777377', '0966-7255961', '0920-9071717 (call or text)'],
        email: 'alengpuliswcpc.didm@pnp.gov.ph',
        website: 'facebook.com/pnpwcpc.alengpulis/',
        tags: ['police', 'women', 'children']
    },
    {
        name: 'PNP Anti-Cybercrime Group (PNP-ACG)',
        type: 'Law Enforcement',
        hotline: ['63-02-8723-0401 (local 7491)', '0968 867 4302 (Smart)', '09671360322 (Globe)', '09929893889 (Dito)'],
        email: ['messagecenter.acg@pnp.gov.ph', 'onlinecims.ocs@gmail.com'],
        website: 'acg.pnp.gov.ph/contact-us/',
        tags: ['police', 'cybercrime', 'reporting']
    },
    {
        name: 'NBI Cybercrime Division (NBI-CCD)',
        type: 'Law Enforcement',
        hotline: ['Direct: (02) 8525-6228', 'Mobile: 0929-6607861, 0945-4420773'],
        email: 'ccd@nbi.gov.ph',
        tags: ['investigation', 'cybercrime', 'reporting']
    },
    {
        name: 'DOJ - Office of Cybercrime',
        type: 'Legal Support',
        hotline: ['Direct: (02) 8524 8216', 'Reporting: 526-2747', 'Reporting: 521-8345'],
        email: 'cybercrime@doj.gov.ph',
        tags: ['legal', 'investigation', 'cybercrime']
    },
    {
        name: 'National Privacy Commission (NPC)',
        type: 'Regulator',
        hotline: '(02) 5322 1322',
        email: 'complaints@privacy.gov.ph',
        website: 'privacy.gov.ph/filing-a-complaint/',
        tags: ['regulator', 'investigation', 'takedown requests']
    },
    {
        name: 'Department of Social Welfare and Development',
        type: 'Social Services',
        hotline: ['Smart: 0943-4648026, 0943-4648086', 'Globe: 0995-7153926, 0995-7153934'],
        email: 'inquiry@dswd.gov.ph',
        website: 'www.dswd.gov.ph/e-services/',
        tags: ['mental health', 'survivor support', 'counseling']
    },
    {
        name: 'Local PNP Women and Children Protection Units',
        type: 'Gender Sensitive',
        description: 'If you need immediate physical protection, it is always best to visit your nearest local police station and ask to speak to the WCPU desk.',
        website: 'childprotectionnetwork.org/wcpu-directory/',
        websiteText: 'Find the phone number of the office nearest you',
        tags: ['police', 'women', 'children']
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
                <div style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid var(--color-primary)', borderRadius: 'var(--radius-md)', padding: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '1.5rem auto 0 auto', textAlign: 'left' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                        Not sure which resource is right for you? Click the Gabay Tech icon in the top left corner, answer a few questions, and Gabay Tech will generate a recommendation based on your unique situation.
                    </p>
                </div>

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
                            border: '1px solid rgba(0,0,0,0.1)',
                            background: 'white',
                            color: 'var(--color-text-primary)',
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
                            {res.description && (
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                                    {res.description}
                                </p>
                            )}
                            {res.hotline && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <Phone size={16} className="text-accent" style={{ marginTop: '0.2rem' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        {Array.isArray(res.hotline) ? (
                                            res.hotline.map((h, i) => <span key={i}>{h}</span>)
                                        ) : (
                                            <span>{res.hotline}</span>
                                        )}
                                    </div>
                                </div>
                            )}
                            {res.email && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '0.5rem' }}>
                                    <Mail size={16} className="text-accent" style={{ marginTop: '0.2rem' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        {Array.isArray(res.email) ? (
                                            res.email.map((e, i) => <a key={i} href={`mailto:${e}`}>{e}</a>)
                                        ) : (
                                            <a href={`mailto:${res.email}`}>{res.email}</a>
                                        )}
                                    </div>
                                </div>
                            )}
                            {res.website && (
                                <div className="flex-center" style={{ justifyContent: 'flex-start', alignItems: res.websiteText ? 'flex-start' : 'center', gap: '0.5rem' }}>
                                    <Globe size={16} className="text-accent" style={{ marginTop: res.websiteText ? '0.2rem' : '0' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        {res.websiteText && (
                                            <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.2rem' }}>{res.websiteText}:</span>
                                        )}
                                        <a href={`https://${res.website}`} target="_blank" rel="noreferrer">{res.website}</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            {res.tags.map(tag => (
                                <span key={tag} style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.5px', background: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: 'var(--color-text-accent)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
