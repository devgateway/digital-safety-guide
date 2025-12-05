import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Lock, Heart, ArrowRight } from 'lucide-react';

const API_URL = 'http://localhost:3000/api';

export default function Home() {
    const [topics, setTopics] = useState([]);
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

        fetch(`${API_URL}/logic-trees`)
            .then(res => res.json())
            .then(data => {
                if (data && data.TOPICS) {
                    setTopics(data.TOPICS);
                }
            })
            .catch(err => console.error('Failed to load topics:', err));
    }, []);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="container text-center" style={{ padding: '4rem 0 3rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Safe. Secure. Supported.
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    A secure guide for survivors of online harassment. We are here to help you find the right path to justice.
                </p>
            </section>

            {/* Immediate Topic Selection */}
            <section id="topic-selection" className="container mb-5">
                <div style={{ background: 'var(--color-bg-tertiary)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-bg-secondary)' }}>
                    <h2 className="text-center mb-4" style={{ fontSize: '2rem' }}>What do you need help with?</h2>
                    <div className="grid-responsive" style={{ maxWidth: '1000px', margin: '0 auto', gap: '1.5rem' }}>
                        {topics.length === 0 ? <p className="text-center text-muted">Loading options...</p> :
                            topics.map(topic => {
                                const isDisabled = topic.enabled === false;
                                const CardWrapper = isDisabled ? 'div' : Link;
                                const cardProps = isDisabled
                                    ? { key: topic.id }
                                    : { to: `/quiz?topic=${topic.id}`, key: topic.id };

                                return (
                                    <CardWrapper
                                        {...cardProps}
                                        className={`card ${isDisabled ? '' : 'card-hover-effect'}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            background: 'var(--color-bg-secondary)',
                                            opacity: isDisabled ? 0.5 : 1,
                                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                                            pointerEvents: isDisabled ? 'none' : 'auto'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{topic.title}</h3>
                                            {isDisabled ? (
                                                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-sm)' }}>Coming Soon</span>
                                            ) : (
                                                <ArrowRight className="text-accent" />
                                            )}
                                        </div>
                                        <p className="text-muted" style={{ flex: 1 }}>{topic.description}</p>
                                    </CardWrapper>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            {/* Continue Report Section */}
            <section className="container mb-5 text-center">
                <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ marginRight: '0.5rem' }}>Have an existing report?</span>
                    <input
                        type="text"
                        placeholder="Enter Access Key (e.g. A7B-X9Z)"
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
                                const key = e.target.value.trim();
                                if (key) navigate(`/quiz?key=${key}`);
                            }
                        }}
                        id="resume-key-input"
                    />
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            const key = document.getElementById('resume-key-input').value.trim();
                            if (key) navigate(`/quiz?key=${key}`);
                        }}
                    >
                        Continue
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
