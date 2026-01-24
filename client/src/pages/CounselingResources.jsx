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
import { useLanguage } from '../contexts/LanguageContext';

export default function CounselingResources() {
    const { t } = useLanguage();

    // Reconstruct the data array from translations
    // We can iterate through keys in the translation object if we want dynamic list,
    // but likely we know the IDs or can map them.
    // For now, let's look up specific IDs we know exist to keep order.
    const resourceIds = ['intouch', 'dswd', 'lunas', 'bantay_bata', 'ncmh', 'tawag_paglaum', 'rapha'];

    const resources = resourceIds.map(id => {
        const baseKey = `counseling.resources.${id}`;
        // Helper to check if a key exists would be nice, but t() returns key if missing.
        // We can just try to get values.

        // This part is a bit tricky because the structured data (phones array) isn't directly in standard i18n JSON usually,
        // unless we structured it that way. In my JSON extraction, I didn't include the phone numbers/metadata in JSON,
        // only the translatable text (name, description, note).
        // I need to merge the static data (phone numbers, urls) with the translated strings.
        // Let's bring the static data in here or import it and overlay translations.

        return {
            id,
            name: t(`${baseKey}.name`),
            description: t(`${baseKey}.description`),
            note: t(`${baseKey}.note`) !== `${baseKey}.note` ? t(`${baseKey}.note`) : null,
            // We need to preserve original metadata like phone numbers from the original data file
            // Since I can't easily import the original data file inside this map without it being awkward,
            // I will hardcode the metadata structure here for now, or better:
            // use the imported mock data and just replace the text fields.
        };
    });

    // Actually, best approach: Import original data, map over it, and replace text with t().
    // But I entered IDs in JSON as snake_case (bantay_bata) while original might be kebab-case (bantay-bata).
    // Let's check original IDs: 'bantay-bata', 'tawag-paglaum'.
    // My JSON used underscore: 'bantay_bata', 'tawag_paglaum'.
    // I should adjust the mapping.

    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    <Heart size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('counseling.ui.title')}</h1>
                <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                    {t('counseling.ui.subtitle')}
                </p>
            </div>

            <div className="grid-responsive">
                {COUNSELING_RESOURCES.map((res) => {
                    // Map ID to JSON key format (kebab to snake)
                    const jsonKey = res.id.replace(/-/g, '_');
                    const name = t(`counseling.resources.${jsonKey}.name`);
                    const description = t(`counseling.resources.${jsonKey}.description`);
                    // Check if note exists in translation (compare to key)
                    const noteKey = `counseling.resources.${jsonKey}.note`;
                    const noteTransl = t(noteKey);
                    const note = noteTransl !== noteKey ? noteTransl : null;

                    return (
                        <div key={res.id} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'white' }}>{name}</h3>
                                <UserCircle2 className="text-accent" size={24} />
                            </div>

                            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>{description}</p>

                            {note && (
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
                                    <span>{note}</span>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {res.hotline && (
                                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Phone size={16} style={{ color: 'var(--color-success)' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-success)', fontWeight: 'bold', textTransform: 'uppercase' }}>{t('counseling.ui.label_hotline')}</span>
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
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{t('counseling.ui.label_viber')}</span>
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
                                            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{t('counseling.ui.label_email')}</span>
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
                                        {t('counseling.ui.btn_chat')} <MessageCircle size={18} />
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
                                        {t('counseling.ui.btn_website')} <Globe size={18} />
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
                                        {t('counseling.ui.btn_facebook')} <Facebook size={18} />
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
                    )
                })}
            </div>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <p className="text-muted mb-4">{t('counseling.ui.takedown_promo')}</p>
                <a href="/templates/takedown-request" className="btn btn-outline">
                    {t('counseling.ui.btn_takedown')}
                </a>
            </div>
        </div>
    );
}
