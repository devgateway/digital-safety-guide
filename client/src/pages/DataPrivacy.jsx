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
import { useLanguage } from '../contexts/LanguageContext';

export default function DataPrivacy() {
    const { t } = useLanguage();

    const contactInfo = [
        { icon: <Globe size={20} />, label: t('privacy.ui.dir_website'), value: 'privacy.gov.ph', url: 'https://privacy.gov.ph/' },
        { icon: <Mail size={20} />, label: t('privacy.ui.dir_email'), value: 'complaints@privacy.gov.ph', url: 'mailto:complaints@privacy.gov.ph' },
        { icon: <Phone size={20} />, label: t('privacy.ui.dir_hotline'), value: 'Local 114 or 115', url: null },
        { icon: <Smartphone size={20} />, label: t('privacy.ui.dir_smart'), value: '+63 970 818 0555', url: 'tel:+639708180555' },
        { icon: <Smartphone size={20} />, label: t('privacy.ui.dir_globe'), value: '+63 905 506 1478', url: 'tel:+639055061478' }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', color: 'var(--color-text-accent)', marginBottom: '1.5rem' }}>
                        <Fingerprint size={48} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('privacy.ui.title')}</h1>
                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                        {t('privacy.ui.subtitle')}
                    </p>
                </div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Contact Information */}
                    <div className="card" style={{ height: 'fit-content' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Building2 className="text-accent" /> {t('privacy.ui.dir_title')}
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
                            <ListChecks className="text-accent" /> {t('privacy.ui.filing_title')}
                        </h2>
                        <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-bg-tertiary)' }}>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t('privacy.ui.step_1_title')}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('privacy.ui.step_1_desc')}</p>
                            </div>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t('privacy.ui.step_2_title')}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('privacy.ui.step_2_desc')}</p>
                            </div>
                            <div className="mb-4">
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t('privacy.ui.step_3_title')}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{t('privacy.ui.step_3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Advisory */}
                <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: 'var(--radius-lg)' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <AlertCircle className="text-accent" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                        <div>
                            <h3 style={{ margin: 0, marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t('privacy.ui.advisory_title')}</h3>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                                {t('privacy.ui.advisory_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>{t('privacy.ui.footer_title')}</h2>
                    <p className="text-muted mb-4">{t('privacy.ui.footer_desc')}</p>
                    <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="https://privacy.gov.ph/complaints-main/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            {t('privacy.ui.btn_portal')} <FileText size={18} />
                        </a>
                        <a href="https://privacy.gov.ph/advisories/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            {t('privacy.ui.btn_advisories')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
