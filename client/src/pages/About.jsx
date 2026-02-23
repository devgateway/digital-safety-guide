import React from 'react';
import { Info, Shield, Users, Lock, Target, Heart } from 'lucide-react';

export default function About() {
    return (
        <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
            <div className="text-center mb-5">
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                    <Info size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About this Tool</h1>
                <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
                    Gabay Tech is a specialized digital resource custom-built for the Philippines to bridge the gap between feeling unsafe online and taking effective action. Developed as part of the National Models for Women's Safety Online (NMWSO) initiative by IREX and Development Gateway: An IREX Venture, this platform provides a proactive, survivor-centered pathway to digital security. <a href="https://www.irex.org/project/national-models-womens-safety-online-nmwso" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Learn more about the NMWSO program here</a>.
                </p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div className="grid-responsive" style={{ gap: '2rem' }}>
                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Target size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>Our Mission</h3>
                        </div>
                        <p className="text-muted">
                            Our mission is to empower individuals—particularly women and marginalized communities—to reclaim their digital agency. We do not simply provide general advice; we offer direct contact information for established response networks and the specific digital harm that a user is facing. Whether you are seeking legal recourse, psychological support, or technical assistance with platform reporting, you are being connected to legitimate, active Philippine and global entities equipped to help.
                        </p>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Users size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>A Collaborative Effort</h3>
                        </div>
                        <p className="text-muted">
                            This platform is the result of an intensive, multi-stakeholder collaboration. It was co-created alongside and with the direct support of many of the Philippine government agencies and non-government organizations (NGOs) listed within the tool. By working hand-in-hand with the nation's leading digital rights advocates, legal experts, and social service providers, we have ensured that the guidance provided is not only practical but deeply rooted in the Philippine legal and social context.
                        </p>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Heart size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>How It Works</h3>
                        </div>
                        <p className="text-muted" style={{ marginBottom: '1rem' }}>
                            The tool guides you through a trauma-informed assessment to help categorize online threats, ranging from privacy breaches to targeted abuse. Based on your unique situation, it provides:
                        </p>
                        <ul className="text-muted list-disc pl-5" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Step-by-Step Action Plans:</strong> Clear instructions on how to secure your accounts and preserve evidence.</li>
                            <li><strong>Platform-Specific Guides:</strong> Direct links and methods for reporting violations to major social media and digital service providers.</li>
                            <li><strong>Support Referrals:</strong> Connections to localized legal, psychological, and community support services.</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Shield size={24} className="text-accent" />
                            <h3 style={{ margin: 0 }}>Safety by Design</h3>
                        </div>
                        <p className="text-muted">
                            Built on the principles of Safety by Design, this tool focuses on prevention and empowerment. We believe that safety should not be an afterthought but a fundamental feature of the digital experience. By combining lived-experience insights with technical expertise, we ensure that every resource provided is practical, accessible, and rooted in the reality of those most vulnerable to online harm.
                        </p>
                    </div>

                    <div className="card" style={{ gridColumn: '1 / -1', borderLeft: '4px solid var(--color-primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Lock size={28} className="text-accent" />
                            <h3 style={{ margin: 0, fontSize: '1.75rem' }}>Data Privacy</h3>
                        </div>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Your safety and privacy are our highest priorities. This tool is designed for total anonymity: <strong>we do not collect, store, or track any personal data, interaction history, or results.</strong> All information you input remains strictly on your local device and is never transmitted to our servers or shared with third parties. Once you close your browser tab, your session data is cleared. We believe that seeking help should not leave a digital footprint, allowing you to access verified Philippine resources with complete peace of mind. You are not alone. This tool is your first step toward a safer, more secure digital life.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
