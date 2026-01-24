import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import {
    Youtube,
    Instagram,
    Facebook,
    Disc as Discord,
    Twitter,
    Twitch,
    Gamepad2,
    MessageSquare,
    Globe,
    FileText,
    ArrowLeft,
    Download,
    CheckCircle2,
    Info,
    Camera,
    Lightbulb
} from 'lucide-react';
import { PLATFORMS } from '../data/platformResources';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PlatformIcon = ({ id, size = 24 }) => {
    switch (id) {
        case 'youtube': return <Youtube size={size} />;
        case 'tiktok': return <div style={{ fontSize: size, fontWeight: 'bold' }}>Tt</div>;
        case 'snapchat': return <div style={{ fontSize: size }}>👻</div>;
        case 'instagram': return <Instagram size={size} />;
        case 'facebook': return <Facebook size={size} />;
        case 'discord': return <Discord size={size} />;
        case 'x': return <Twitter size={size} />;
        case 'twitch': return <Twitch size={size} />;
        case 'xbox': return <Gamepad2 size={size} />;
        case 'playstation': return <Gamepad2 size={size} />;
        case 'tumblr': return <div style={{ fontSize: size, fontWeight: 'bold' }}>t</div>;
        case 'viber': return <MessageSquare size={size} />;
        default: return <Globe size={size} />;
    }
};

export default function TemplateBuilder() {
    const { t } = useLanguage();
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [formData, setFormData] = useState({
        incidentDate: '',
        victimName: '',
        platformId: '',
        incidentDescription: '',
        requestedAction: 'Removal of content',
    });
    const [isGenerating, setIsGenerating] = useState(false);

    const handlePlatformSelect = (platform) => {
        setSelectedPlatform(platform);
        if (platform.id === 'other') {
            setFormData(prev => ({ ...prev, platformId: 'Other' }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generatePDF = () => {
        setIsGenerating(true);
        const doc = new jsPDF();

        const title = t('takedown.pdf.title');
        const content = `
${t('takedown.pdf.date_label')} ${new Date().toLocaleDateString()}
${t('takedown.pdf.subject')}

${t('takedown.pdf.salutation')}

${t('takedown.pdf.intro')}

${t('takedown.pdf.incident_details')}
${t('takedown.pdf.platform_label')} ${formData.platformId || (selectedPlatform ? t(`takedown.platforms.${selectedPlatform.id}.name`) : 'N/A')}
${t('takedown.pdf.date_incident_label')} ${formData.incidentDate || t('takedown.pdf.not_specified')}
${t('takedown.pdf.person_affected_label')} ${formData.victimName || t('takedown.ui.placeholder_your_name')}

${t('takedown.pdf.desc_header')}
${formData.incidentDescription}

${t('takedown.pdf.action_header')}
${formData.requestedAction}

${t('takedown.pdf.closing')}

${t('takedown.pdf.sign_off')}
${formData.victimName || t('takedown.pdf.concerned_user')}
        `;

        doc.setFontSize(16);
        doc.text(title, 20, 20);
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(content, 170);
        doc.text(splitText, 20, 40);

        doc.save(`takedown_request_${formData.platformId || 'generic'}.pdf`);
        setIsGenerating(false);
    };

    const renderSelection = () => (
        <div className="animate-fade-in">
            <h1 className="text-center mb-2" style={{ fontSize: '2.25rem' }}>{t('takedown.ui.title')}</h1>
            <p className="text-center text-muted mb-4">{t('takedown.ui.select_platform_desc')}</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                gap: '1rem',
                paddingBottom: '2rem'
            }}>
                {PLATFORMS.map((platform) => (
                    <button
                        key={platform.id}
                        onClick={() => handlePlatformSelect(platform)}
                        className="card card-hover-effect"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1.25rem',
                            background: 'var(--color-bg-secondary)',
                            border: '1px solid var(--color-bg-tertiary)',
                            cursor: 'pointer',
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >
                        <div style={{
                            padding: '0.75rem',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'var(--color-text-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <PlatformIcon id={platform.id} size={24} />
                        </div>
                        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{t(`takedown.platforms.${platform.id}.name`)}</span>
                    </button>
                ))}
                <button
                    onClick={() => handlePlatformSelect({ id: 'other', name: 'Other' })}
                    className="card card-hover-effect"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1.25rem',
                        background: 'var(--color-bg-tertiary)',
                        border: '1px solid var(--color-primary)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >
                    <div style={{
                        padding: '0.75rem',
                        borderRadius: '50%',
                        background: 'rgba(139, 92, 246, 0.2)',
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Globe size={24} />
                    </div>
                    <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{t('takedown.ui.other_platform')}</span>
                </button>
            </div>
        </div>
    );

    const renderPlatformDetails = () => {
        // Safe access to translated arrays (which act like objects in key lookup)
        const screenshots = Object.values(t(`takedown.platforms.${selectedPlatform.id}.screenshots`) || {});
        const tips = Object.values(t(`takedown.platforms.${selectedPlatform.id}.tips`) || {});

        return (
            <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <button
                    onClick={() => setSelectedPlatform(null)}
                    className="btn btn-outline mb-4"
                    style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                >
                    <ArrowLeft size={16} /> {t('takedown.ui.back_to_platforms')}
                </button>

                <div className="card mb-4" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '2rem',
                        opacity: 0.1,
                        color: 'var(--color-text-accent)',
                        pointerEvents: 'none'
                    }}>
                        <PlatformIcon id={selectedPlatform.id} size={120} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <PlatformIcon id={selectedPlatform.id} size={32} />
                            <h2 style={{ margin: 0 }}>{t('takedown.ui.filing_guide_title').replace('{{platform}}', t(`takedown.platforms.${selectedPlatform.id}.name`))}</h2>
                        </div>

                        <div className="mb-4">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                                <Info size={18} className="text-accent" /> {t('takedown.ui.overview')}
                            </h3>
                            <p>{t(`takedown.platforms.${selectedPlatform.id}.overview`)}</p>
                        </div>

                        <div className="mb-4">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                                <Camera size={18} className="text-accent" /> {t('takedown.ui.required_evidence')}
                            </h3>
                            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                {screenshots.map((s, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                        <CheckCircle2 size={16} className="text-accent" style={{ marginTop: '0.25rem' }} />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                                <Lightbulb size={18} className="text-accent" /> {t('takedown.ui.expert_tips')}
                            </h3>
                            <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
                                {tips.map((tip, i) => (
                                    <p key={i} style={{ marginBottom: i === tips.length - 1 ? 0 : '0.5rem' }}>• {tip}</p>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem' }}>
                            <a
                                href={selectedPlatform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1.25rem' }}
                            >
                                {t('takedown.ui.open_filing_url').replace('{{platform}}', t(`takedown.platforms.${selectedPlatform.id}.name`))} <Globe size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderOtherForm = () => (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <button
                onClick={() => setSelectedPlatform(null)}
                className="btn btn-outline mb-4"
                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
                <ArrowLeft size={16} /> {t('takedown.ui.back_to_platforms')}
            </button>

            <div className="card">
                <h2 className="mb-4">{t('takedown.ui.generic_builder_title')}</h2>
                <p className="text-muted mb-4">{t('takedown.ui.generic_builder_desc')}</p>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('takedown.ui.label_platform_name')}</label>
                        <input
                            name="platformId"
                            value={formData.platformId}
                            onChange={handleInputChange}
                            placeholder={t('takedown.ui.placeholder_platform_name')}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white'
                            }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('takedown.ui.label_your_name')}</label>
                            <input
                                name="victimName"
                                value={formData.victimName}
                                onChange={handleInputChange}
                                placeholder={t('takedown.ui.placeholder_your_name')}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-primary)',
                                    border: '1px solid var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('takedown.ui.label_incident_date')}</label>
                            <input
                                type="date"
                                name="incidentDate"
                                value={formData.incidentDate}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'var(--color-bg-primary)',
                                    border: '1px solid var(--color-bg-tertiary)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white'
                                }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('takedown.ui.label_incident_desc')}</label>
                        <textarea
                            name="incidentDescription"
                            value={formData.incidentDescription}
                            onChange={handleInputChange}
                            placeholder={t('takedown.ui.placeholder_incident_desc')}
                            rows={5}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>{t('takedown.ui.label_requested_action')}</label>
                        <select
                            name="requestedAction"
                            value={formData.requestedAction}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-bg-tertiary)',
                                borderRadius: 'var(--radius-md)',
                                color: 'white'
                            }}
                        >
                            <option value="Removal of content">{t('takedown.ui.options.removal')}</option>
                            <option value="Account suspension">{t('takedown.ui.options.suspension')}</option>
                            <option value="Mediation/Dialogue">{t('takedown.ui.options.mediation')}</option>
                            <option value="Legal Investigation">{t('takedown.ui.options.legal')}</option>
                        </select>
                    </div>

                    <button
                        onClick={generatePDF}
                        disabled={isGenerating || !formData.incidentDescription}
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', padding: '1.25rem' }}
                    >
                        {isGenerating ? t('takedown.ui.btn_generating') : t('takedown.ui.btn_generate_pdf')} <Download size={18} />
                    </button>
                    {!formData.incidentDescription && (
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-danger)', textAlign: 'center' }}>
                            {t('takedown.ui.error_desc_required')}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            {!selectedPlatform ? renderSelection() :
                selectedPlatform.id === 'other' ? renderOtherForm() :
                    renderPlatformDetails()}
        </div>
    );
}
