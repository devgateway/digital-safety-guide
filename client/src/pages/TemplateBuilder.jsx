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

const PlatformIcon = ({ id, size = 24 }) => {
    switch (id) {
        case 'youtube': return <Youtube size={size} />;
        case 'tiktok': return <div style={{ fontSize: size, fontWeight: 'bold' }}>Tt</div>; // TikTok icon not in lucide by default sometimes
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

        const title = "Formal Online Harassment / Takedown Request";
        const content = `
Date of Request: ${new Date().toLocaleDateString()}
Subject: Formal Takedown Request regarding Online Harassment

To Whom It May Concern,

I am writing to formally request the removal of content or action regarding an incident on your platform.

Incident Details:
- Platform: ${formData.platformId || (selectedPlatform ? selectedPlatform.name : 'N/A')}
- Date of Incident: ${formData.incidentDate || 'Not specified'}
- Person Affected: ${formData.victimName || 'Anonymous'}

Description of Incident:
${formData.incidentDescription}

Requested Action:
${formData.requestedAction}

This request is made in accordance with digital safety guidelines and platform policies regarding user safety and harassment.

Sincerely,
${formData.victimName || 'Concerned User'}
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
            <h1 className="text-center mb-2" style={{ fontSize: '2.25rem' }}>Takedown Request Builder</h1>
            <p className="text-center text-muted mb-4">Select the platform where the incident occurred to begin.</p>

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
                        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{platform.name}</span>
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
                    <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>Other Platform</span>
                </button>
            </div>
        </div>
    );

    const renderPlatformDetails = () => (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <button
                onClick={() => setSelectedPlatform(null)}
                className="btn btn-outline mb-4"
                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
                <ArrowLeft size={16} /> Back to Platforms
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
                        <h2 style={{ margin: 0 }}>{selectedPlatform.name} Filing Guide</h2>
                    </div>

                    <div className="mb-4">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                            <Info size={18} className="text-accent" /> Overview
                        </h3>
                        <p>{selectedPlatform.overview}</p>
                    </div>

                    <div className="mb-4">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                            <Camera size={18} className="text-accent" /> Required Evidence
                        </h3>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            {selectedPlatform.screenshots.map((s, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', alignItems: 'flex-start' }}>
                                    <CheckCircle2 size={16} className="text-accent" style={{ marginTop: '0.25rem' }} />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem' }}>
                            <Lightbulb size={18} className="text-accent" /> Expert Tips
                        </h3>
                        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary)' }}>
                            {selectedPlatform.tips.map((t, i) => (
                                <p key={i} style={{ marginBottom: i === selectedPlatform.tips.length - 1 ? 0 : '0.5rem' }}>• {t}</p>
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
                            Open {selectedPlatform.name} Filing URL <Globe size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderOtherForm = () => (
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <button
                onClick={() => setSelectedPlatform(null)}
                className="btn btn-outline mb-4"
                style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
            >
                <ArrowLeft size={16} /> Back to Platforms
            </button>

            <div className="card">
                <h2 className="mb-4">Generic Template Builder</h2>
                <p className="text-muted mb-4">Provide details about the incident to generate a standardized takedown request document.</p>

                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Platform Name</label>
                        <input
                            name="platformId"
                            value={formData.platformId}
                            onChange={handleInputChange}
                            placeholder="e.g., WhatsApp, Telegram, etc..."
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
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Name (Optional)</label>
                            <input
                                name="victimName"
                                value={formData.victimName}
                                onChange={handleInputChange}
                                placeholder="Anonymous"
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
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Date of Incident</label>
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
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Describe the Incident</label>
                        <textarea
                            name="incidentDescription"
                            value={formData.incidentDescription}
                            onChange={handleInputChange}
                            placeholder="Please describe what happened without sharing overly sensitive personal data..."
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
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Requested Action</label>
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
                            <option value="Removal of content">Removal of content</option>
                            <option value="Account suspension">Account suspension</option>
                            <option value="Mediation/Dialogue">Mediation/Dialogue</option>
                            <option value="Legal Investigation">Legal Investigation</option>
                        </select>
                    </div>

                    <button
                        onClick={generatePDF}
                        disabled={isGenerating || !formData.incidentDescription}
                        className="btn btn-primary"
                        style={{ marginTop: '1rem', padding: '1.25rem' }}
                    >
                        {isGenerating ? 'Generating...' : 'Download Takedown Template (PDF)'} <Download size={18} />
                    </button>
                    {!formData.incidentDescription && (
                        <p style={{ fontSize: '0.8rem', color: 'var(--color-danger)', textAlign: 'center' }}>
                            Please provide a description of the incident to generate the document.
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
