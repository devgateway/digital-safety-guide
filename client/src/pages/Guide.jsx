import React, { useState } from 'react';
import { Camera, FileText, Lock, Shield } from 'lucide-react';

export default function Guide() {
    const [activeTab, setActiveTab] = useState('evidence');

    return (
        <div className="container animate-fade-in">
            <h1 className="text-center mb-4">Survivor's Guide</h1>

            {/* Tabs */}
            <div className="flex-center" style={{ gap: '1rem', marginBottom: '3rem' }}>
                <button
                    className={`btn ${activeTab === 'evidence' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('evidence')}
                >
                    <Camera size={18} /> Evidence Checklist
                </button>
                <button
                    className={`btn ${activeTab === 'legal' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setActiveTab('legal')}
                >
                    <Shield size={18} /> Legal Rights
                </button>
            </div>

            {activeTab === 'evidence' && (
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card mb-2">
                        <h2><Camera className="text-accent" style={{ marginRight: '0.5rem' }} /> Preserving Digital Evidence</h2>
                        <p className="mb-4">Do not delete anything! Even if it is painful to look at, it is your strongest tool for justice.</p>

                        <h3 className="text-accent">1. Screenshots</h3>
                        <ul className="list-disc pl-5 mb-4" style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li className="mb-2">Capture the <strong>entire screen</strong>, including the URL bar and system clock.</li>
                            <li className="mb-2">Ensure the <strong>profile/sender name</strong> is visible.</li>
                            <li className="mb-2">Click on timestamps or "Three dots" menus to reveal exact dates/times if possible.</li>
                        </ul>

                        <h3 className="text-accent">2. URLs (Links)</h3>
                        <ul className="list-disc pl-5 mb-4" style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            <li className="mb-2">Copy the <strong>direct link</strong> to the post, image, or profile.</li>
                            <li className="mb-2">If on a mobile app, use "Share &gt; Copy Link".</li>
                            <li className="mb-2">Use services like <strong>Archive.today</strong> or <strong>Wayback Machine</strong> to save a permanent snapshot.</li>
                        </ul>

                        <h3 className="text-accent">3. Metadata</h3>
                        <p>If you received a file (photo/video), keep the <strong>original file</strong>. Do not just take a screenshot of it. The original file contains "EXIF" data (date taken, device used) that acts as a fingerprint.</p>
                    </div>
                </div>
            )}

            {activeTab === 'legal' && (
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card mb-4">
                        <h2><Shield className="text-accent" style={{ marginRight: '0.5rem' }} /> Know Your Rights</h2>
                        <p className="mb-4">You are protected by Philippine laws against online harassment.</p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 className="text-accent">RA 10175: Cybercrime Prevention Act</h3>
                            <p>Covers <strong>Cyber-Libel</strong>, <strong>Computer-related Identity Theft</strong>, and illegal access. If someone hacks your account or posts malicious lies online, this applies.</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 className="text-accent">RA 9995: Anti-Photo and Video Voyeurism Act</h3>
                            <p>Strictly prohibits taking, copying, or sharing photo/video of a person's private parts or sexual acts without consent. <strong>"Voyeurism"</strong> applies even if the person in the video originally consented to the recording but NOT to the sharing (revenge porn).</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 className="text-accent">RA 11313: Safe Spaces Act (Bawal Bastos)</h3>
                            <p>Penalizes <strong>Online Sexual Harassment</strong> (OSH). This includes unwanted sexual remarks, misogynistic or homophobic slurs, and cyberstalking.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
