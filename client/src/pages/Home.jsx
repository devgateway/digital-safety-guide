import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Lock, Heart, ArrowRight } from 'lucide-react';

import { API_URL } from '../config';

export default function Home() {
    const [startNode, setStartNode] = useState(null);
    const [urlMap, setUrlMap] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('scrollToTopic')) {
            setTimeout(() => {
                const topicSection = document.getElementById('topic-selection');
                if (topicSection) {
                    topicSection.scrollIntoView({ behavior: 'smooth' });
                    topicSection.classList.add('highlight-pulse');
                    setTimeout(() => topicSection.classList.remove('highlight-pulse'), 1000);
                }
            }, 100);
        }

        Promise.all([
            fetch('/data/logicTrees.json').then(res => res.json()),
            fetch('/data/urlMap.json').then(res => res.json())
        ])
            .then(([data, map]) => {
                if (data && data.LOGIC_TREES) {
                    // Try to find the start node of the UNIFIED_FLOW
                    const tree = data.LOGIC_TREES.UNIFIED_FLOW;
                    if (tree) {
                        const startNodeId = tree.start;
                        const node = tree.nodes[startNodeId];
                        if (node) {
                            setStartNode(node);
                        }
                    }
                }
                setUrlMap(map);
            })
            .catch(err => console.error('Failed to load guide data:', err));
    }, []);

    const getLinkForNode = (nodeId) => {
        if (!urlMap || !urlMap.ids[nodeId]) return '#'; // Fallback
        return `/quiz/UNIFIED_FLOW/${urlMap.ids[nodeId]}`;
    }

    return (
        <div className="animate-fade-in">
            {/* Split Screen Content */}
            <section className="container" style={{ padding: '2rem 0' }}>
                <div className="grid-split-screen">
                    {/* Left Column: Text & Context */}
                    <div className="text-left">
                        <h1 style={{ fontSize: '2.5em', marginBottom: '1.5rem', lineHeight: '1.1', background: 'linear-gradient(to right, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Safe. Secure. Supported.
                        </h1>
                        <p style={{ fontSize: '1rem', color: 'var(--color-text-primary)', marginBottom: '1rem', lineHeight: '1.7' }}>
                            Everyone has the right to feel safe, and digital spaces are no exception. If you are feeling unsafe online, there are ways to help you reclaim your sense of security: from civil and criminal penalties, to non-profit psychosocial support, to formal takedown requests direct to IT companies. This tool is designed to help you understand what actions Filipino citizens can take based on the kind of safety violations you’re experiencing.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                            If you have time to answer a few questions about whats making you feel unsafe, this tool can help you understand exactly what avenues are available to you so you can make an informed decision.
                        </p>
                        <div style={{ padding: '1.5rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', margin: 0 }}>
                                <strong style={{ color: '#f87171' }}>DISCLAIMER:</strong> this tool does not constitute legal advice. Data are collected anonymously and not collected or stored. If you are in imminent danger, please contact the police immediately. If for some reason you feel unsafe while using this tool, utilize the “emergency exit” button and return when you are safe.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Interaction */}
                    <div id="topic-selection">
                        <div style={{ background: 'var(--color-bg-tertiary)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-bg-secondary)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>
                                {startNode ? startNode.question : "Loading options..."}
                            </h2>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {!startNode ? <p className="text-center text-muted">Loading...</p> :
                                    startNode.options.map((option, idx) => (
                                        <Link
                                            key={idx}
                                            to={getLinkForNode(option.nextId)}
                                            className="card card-hover-effect"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '1.25rem',
                                                background: 'var(--color-bg-secondary)',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            }}
                                        >
                                            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{option.label}</span>
                                            <ArrowRight className="text-accent" size={20} />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continue Report Section */}
            <section className="container mb-5 text-center">
                <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ marginRight: '0.5rem' }}>Have a step code?</span>
                    <input
                        type="text"
                        placeholder="Enter Code (e.g. A7B-X9Z)"
                        style={{
                            background: 'var(--color-bg-primary)',
                            border: '1px solid var(--color-bg-tertiary)',
                            borderRadius: 'var(--radius-md)',
                            padding: '0.5rem 1rem',
                            color: 'white',
                            width: '240px'
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const key = e.target.value.trim().toUpperCase(); // Codes are upper case
                                if (key) navigate(`/quiz/UNIFIED_FLOW/${key}`);
                            }
                        }}
                        id="resume-key-input"
                    />
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            const key = document.getElementById('resume-key-input').value.trim().toUpperCase();
                            if (key) navigate(`/quiz/UNIFIED_FLOW/${key}`);
                        }}
                    >
                        Go
                    </button>
                </div>
            </section>

            {/* Secondary Actions */}
            <section className="container text-center mb-5" style={{ padding: '6rem 0 4rem', borderTop: '1px solid var(--color-bg-tertiary)' }}>
                <div className="flex-center" style={{ gap: '1.5rem', flexDirection: 'column' }}>
                    <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Looking for something else?</p>
                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <Link to="/directory" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                            Browse Directory
                        </Link>
                        <Link to="/guide" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>
                            Survivor's Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container">
                <div className="grid-responsive">
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <Lock className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                        <h4>Anonymous & Safe</h4>
                        <p className="text-muted text-sm">No personal data collected. Use an Access Key to return safely.</p>
                    </div>
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <Shield className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                        <h4>Guided Action</h4>
                        <p className="text-muted text-sm">Step-by-step analysis to find the right agency for you.</p>
                    </div>
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <Heart className="text-accent" size={32} style={{ marginBottom: '1rem' }} />
                        <h4>Holistic Support</h4>
                        <p className="text-muted text-sm">Connecting you to both legal and mental health resources.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
