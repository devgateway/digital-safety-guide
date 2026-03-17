import React, { useState } from 'react';
import { Camera, FileText, Lock, Shield, CheckSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Guide() {
    const [activeTab, setActiveTab] = useState('evidence');
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in">
            <h1 className="text-center mb-4">{t('content.guide_content.title')}</h1>

            {/* Tabs */}
            <div className="flex-center" style={{ gap: '1rem', marginBottom: '3rem' }}>
                <button
                    className={`btn ${activeTab === 'evidence' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('evidence')}
                >
                    <CheckSquare size={18} /> {t('content.guide_content.tab_evidence')}
                </button>
                <button
                    className={`btn ${activeTab === 'legal' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('legal')}
                >
                    <Shield size={18} /> {t('content.guide_content.tab_legal')}
                </button>
            </div>

            {activeTab === 'evidence' && (
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card mb-2">
                        <h2><CheckSquare className="text-accent" style={{ marginRight: '0.5rem' }} /> {t('content.guide_content.evidence_title')}</h2>
                        <p className="mb-4">{t('content.guide_content.evidence_desc')}</p>

                        <h3 className="text-accent">{t('content.guide_content.evidence_1_title')}</h3>
                        <ul className="list-disc pl-5 mb-4" style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li className="mb-2">{t('content.guide_content.evidence_1_li1_1')}<strong>{t('content.guide_content.evidence_1_li1_2')}</strong>{t('content.guide_content.evidence_1_li1_3')}</li>
                            <li className="mb-2">{t('content.guide_content.evidence_1_li2_1')}<strong>{t('content.guide_content.evidence_1_li2_2')}</strong>{t('content.guide_content.evidence_1_li2_3')}</li>
                            <li className="mb-2">{t('content.guide_content.evidence_1_li3')}</li>
                        </ul>

                        <h3 className="text-accent">{t('content.guide_content.evidence_2_title')}</h3>
                        <ul className="list-disc pl-5 mb-4" style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li className="mb-2">{t('content.guide_content.evidence_2_li1_1')}<strong>{t('content.guide_content.evidence_2_li1_2')}</strong>{t('content.guide_content.evidence_2_li1_3')}</li>
                            <li className="mb-2">{t('content.guide_content.evidence_2_li2')}</li>
                            <li className="mb-2">{t('content.guide_content.evidence_2_li3_1')}<a href="https://archive.ph/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}><strong>Archive.today</strong></a>{t('content.guide_content.evidence_2_li3_2')}<a href="https://web.archive.org/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}><strong>Wayback Machine</strong></a>{t('content.guide_content.evidence_2_li3_3')}</li>
                        </ul>

                        <h3 className="text-accent">{t('content.guide_content.evidence_3_title')}</h3>
                        <p>{t('content.guide_content.evidence_3_desc_1')}<strong>{t('content.guide_content.evidence_3_desc_2')}</strong>{t('content.guide_content.evidence_3_desc_3')}</p>
                    </div>
                </div>
            )}

            {activeTab === 'legal' && (
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card mb-4">
                        <h2><Shield className="text-accent" style={{ marginRight: '0.5rem' }} /> {t('content.guide_content.legal_title')}</h2>
                        <p className="mb-4">{t('content.guide_content.legal_desc')}</p>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://cicc.gov.ph/wp-content/uploads/2025/04/What-is-RA-10175-Brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_1_title')}</h3>
                            </a>
                            <p>{t('content.guide_content.legal_1_desc_1')}<strong>{t('content.guide_content.legal_1_desc_2')}</strong>{t('content.guide_content.legal_1_desc_3')}<strong>{t('content.guide_content.legal_1_desc_4')}</strong>{t('content.guide_content.legal_1_desc_5')}</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/17036" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_2_title')}</h3>
                            </a>
                            <p>{t('content.guide_content.legal_2_desc_1')}<strong>{t('content.guide_content.legal_2_desc_2')}</strong>{t('content.guide_content.legal_2_desc_3')}</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://pcw.gov.ph/faq-republic-act-no-11313/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_3_title')}</h3>
                            </a>
                            <p>{t('content.guide_content.legal_3_desc_1')}<strong>{t('content.guide_content.legal_3_desc_2')}</strong>{t('content.guide_content.legal_3_desc_3')}</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://pcw.gov.ph/faq-republic-act-9262/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_4_title')}</h3>
                            </a>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://www.facebook.com/pia.gov.ph/posts/pfbid02d6iPANHhkqphF7m8FeV9kr555mkfKJBoRL35Ca9JxmoGXaCPtsJXLDC4T8B4M6Ywl?rdid=3fm4zRTOjS5lhFg1#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_5_title')}</h3>
                            </a>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://privacy.gov.ph/wp-content/uploads/2022/01/DPA_QuickGuidefolder_10191.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_6_title')}</h3>
                            </a>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <a href="https://legalresource.ph/grave-threats-a282-revised-penal-code/#:~:text=1.,Bond%20for%20good%20behavior." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <h3 className="text-accent" style={{ textDecoration: 'underline' }}>{t('content.guide_content.legal_7_title')}</h3>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
