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
import { useLanguage } from '../contexts/LanguageContext';

export default function LawEnforcement() {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="text-center mb-5">
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', color: 'var(--color-danger)', marginBottom: '1.5rem' }}>
                        <Scale size={48} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('law.ui.title')}</h1>
                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                        {t('law.ui.subtitle')}
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
                            <h2 style={{ marginBottom: '0.25rem' }}>{t('law.ui.hotline_title')}</h2>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-danger)', margin: 0 }}>#1326</p>
                        </div>
                    </div>
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem' }}>
                            <strong>{t('law.ui.hotline_desc_strong')}</strong> {t('law.ui.hotline_desc')}
                        </p>
                    </div>
                </div>

                <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {/* VAW-C Exception Section */}
                    <div className="card" style={{ borderLeft: '4px solid #f472b6' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f472b6' }}>
                            <Users size={20} /> {t('law.ui.vawc_title')}
                        </h3>
                        <p className="text-muted mb-4" style={{ fontSize: '0.9rem' }}>
                            {t('law.ui.vawc_desc')}
                        </p>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(244, 114, 182, 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 114, 182, 0.1)' }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{t('law.ui.wcpc_name')}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                    <Phone size={16} /> {t('law.ui.label_hotline')} 177
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                    <Phone size={14} /> {t('law.ui.label_aleng_pulis')} 0919 777 7377
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expectation Setting */}
                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Info size={20} className="text-accent" /> {t('law.ui.expect_title')}
                        </h3>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            {t('law.ui.expect_desc')}
                        </p>
                        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            <li className="mb-2"><strong>{t('law.ui.expect_step_1_title')}</strong> {t('law.ui.expect_step_1_desc')}</li>
                            <li className="mb-2"><strong>{t('law.ui.expect_step_2_title')}</strong> {t('law.ui.expect_step_2_desc')}</li>
                            <li className="mb-2"><strong>{t('law.ui.expect_step_3_title')}</strong> {t('law.ui.expect_step_3_desc')}</li>
                        </ul>
                    </div>
                </div>

                {/* Legal Resources Section */}
                <div style={{ marginTop: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t('law.ui.legal_resources_title')}</h2>
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
                                <div style={{ fontWeight: 'bold' }}>{t('law.ui.ra_10175_title')}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{t('law.ui.ra_10175_desc')}</div>
                            </div>
                            <ExternalLink size={16} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                        </a>

                        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                            <Shield className="text-accent" size={24} />
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t('law.ui.cyberbullying_title')}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{t('law.ui.cyberbullying_desc')}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-bg-tertiary)', textAlign: 'center' }}>
                    <p className="text-muted mb-4">{t('law.ui.footer_desc')}</p>
                    <Link to="/templates/npc-complaint" className="btn btn-outline">
                        {t('law.ui.btn_npc')}
                    </Link>
                </div>
            </div>
        </div>
    );
}
