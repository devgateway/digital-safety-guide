import React from 'react';
import { Info, Shield, Users, Lock, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    <Info size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('content.about.title')}</h1>
                <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
                    {t('content.about.desc_1')}<strong>{t('content.about.desc_2')}</strong>{t('content.about.desc_3')}<a href="https://www.irex.org/project/national-models-womens-safety-online-nmwso" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>{t('content.about.desc_link')}</a>.
                </p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="grid-responsive" style={{ gap: '2rem' }}>
                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Target size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>{t('content.about.mission_title')}</h3>
                        </div>
                        <p className="text-muted">
                            {t('content.about.mission_desc')}
                        </p>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Users size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>{t('content.about.collab_title')}</h3>
                        </div>
                        <p className="text-muted">
                            {t('content.about.collab_desc_1')}<strong>{t('content.about.collab_desc_2')}</strong>{t('content.about.collab_desc_3')}
                        </p>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Heart size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>{t('content.about.how_title')}</h3>
                        </div>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>
                            {t('content.about.how_desc')}
                        </p>
                        <ul className="text-muted list-disc pl-5" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>{t('content.about.how_li1_title')}</strong>{t('content.about.how_li1_desc')}</li>
                            <li><strong>{t('content.about.how_li2_title')}</strong>{t('content.about.how_li2_desc')}</li>
                            <li><strong>{t('content.about.how_li3_title')}</strong>{t('content.about.how_li3_desc')}</li>
                        </ul>
                    </div>

                    <div className="card" style={{ gridColumn: '1 / -1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Shield size={28} className="text-accent" />
                            <h3 style={{ margin: 0, fontSize: '1.75rem' }}>{t('content.about.safety_title')}</h3>
                        </div>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t('content.about.safety_desc_1')}<strong>{t('content.about.safety_desc_2')}</strong>{t('content.about.safety_desc_3')}
                        </p>
                    </div>

                    <div className="card" style={{ gridColumn: '1 / -1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Lock size={28} className="text-accent" />
                            <h3 style={{ margin: 0, fontSize: '1.75rem' }}>{t('content.about.privacy_title')}</h3>
                        </div>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t('content.about.privacy_desc_1')}<strong>{t('content.about.privacy_desc_2')}</strong>{t('content.about.privacy_desc_3')}<br /><br />
                            <strong><em>{t('content.about.privacy_not_alone')}</em></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
