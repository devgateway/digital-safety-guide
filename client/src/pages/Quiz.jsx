import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, AlertTriangle, CheckCircle, Globe, Mail, Phone } from 'lucide-react';

import { API_URL } from '../config';

export default function Quiz() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [logicData, setLogicData] = useState(null); // { TOPICS, LOGIC_TREES }
    const [topic, setTopic] = useState(null);
    const [currentNodeId, setCurrentNodeId] = useState(null);
    const [history, setHistory] = useState([]);
    const [accessKey, setAccessKey] = useState(searchParams.get('key') || '');
    const [loading, setLoading] = useState(true); // Start loading to fetch config
    const [notification, setNotification] = useState(null);
    const [selections, setSelections] = useState({}); // { [nodeId]: selectedNextNodeId }

    // 1. Fetch Logic Data on Mount
    useEffect(() => {
        fetch(`${API_URL}/logic-trees`)
            .then(res => res.json())
            .then(data => {
                setLogicData(data);
                setLoading(false);

                // Check for URL params to auto-start
                const startTopic = searchParams.get('topic');
                const startNode = searchParams.get('startNode');
                const startKey = searchParams.get('key');

                if (startKey) {
                    loadSession(startKey);
                } else if (startTopic && data.LOGIC_TREES[startTopic]) {
                    setTopic(startTopic);
                    setCurrentNodeId(startNode || data.LOGIC_TREES[startTopic].start);
                }
            })
            .catch(err => {
                console.error(err);
                setNotification({ type: 'error', message: 'Failed to load quiz data.' });
                setLoading(false);
            });
    }, []);

    const loadSession = async (key) => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/load/${key}`);
            const data = await res.json();
            if (data.success) {
                setTopic(data.data.topic);
                setCurrentNodeId(data.data.currentNodeId);
                setHistory(data.data.history);
                setSelections(data.data.selections || {});
                setAccessKey(key);
                setNotification({ type: 'success', message: 'Session loaded successfully' });
            } else {
                setNotification({ type: 'error', message: 'Session not found' });
            }
        } catch (err) {
            setNotification({ type: 'error', message: 'Error loading session' });
        } finally {
            setLoading(false);
        }
    };

    const saveSession = async () => {
        setLoading(true);
        try {
            const payload = { topic, currentNodeId, history, selections };
            const res = await fetch(`${API_URL}/save`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: accessKey || undefined, data: payload })
            });
            const data = await res.json();
            if (data.success) {
                setAccessKey(data.key);
                setSearchParams({ key: data.key }); // Update URL to allow bookmarking
                setNotification({ type: 'success', message: `Saved! Your Access Key is: ${data.key}`, key: data.key });
            }
        } catch (err) {
            setNotification({ type: 'error', message: 'Failed to save session' });
        } finally {
            setLoading(false);
        }
    };

    const handleOptionClick = (nextId) => {
        if (!logicData) return;

        // Find node in current tree or fallback
        let exists = logicData.LOGIC_TREES[topic].nodes[nextId];
        if (!exists) {
            Object.values(logicData.LOGIC_TREES).forEach(t => {
                if (t.nodes[nextId]) exists = t.nodes[nextId];
            });
        }

        if (exists) {
            setHistory([...history, currentNodeId]);
            setSelections(prev => ({ ...prev, [currentNodeId]: nextId }));
            setCurrentNodeId(nextId);
        } else {
            console.error("Node not found:", nextId);
            setNotification({ type: 'error', message: "Error: Path not complete yet." });
        }
    };

    const goBack = () => {
        if (history.length === 0) {
            setTopic(null);
            setCurrentNodeId(null);
            setSelections({}); // Clear on full reset? Maybe keep it for "resume"? Let's keep it.
            navigate('/'); // Return to home if at start
        } else {
            const prev = history[history.length - 1];
            setHistory(history.slice(0, -1));
            // We do NOT remove the choice from selections so we can highlight it
            setCurrentNodeId(prev);
        }
    };

    const goForward = () => {
        const nextId = selections[currentNodeId];
        if (nextId) {
            setHistory([...history, currentNodeId]);
            setCurrentNodeId(nextId);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // Optional: Temporary feedback on copy button could go here
            alert('Key copied to clipboard!');
        });
    };

    const renderNode = () => {
        if (!logicData || !topic) return null;

        let node = logicData.LOGIC_TREES[topic].nodes[currentNodeId];
        if (!node) {
            // Fallback search
            Object.values(logicData.LOGIC_TREES).forEach(t => {
                if (t.nodes[currentNodeId]) node = t.nodes[currentNodeId];
            });
        }

        if (!node) return <div>Error: Node {currentNodeId} not found.</div>;

        const isResult = ['result', 'success', 'advice'].includes(node.type);
        const canGoForward = selections[currentNodeId] !== undefined;

        return (
            <div className="card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <button onClick={goBack} className="btn btn-outline" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                            <ArrowLeft size={20} /> Back
                        </button>
                        {canGoForward && (
                            <button onClick={goForward} className="btn btn-outline" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                Forward <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        )}
                    </div>

                    {node.type === 'result' && <div className="badge" style={{ color: '#f59e0b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.5rem' }}><AlertTriangle size={24} /> Recommended Action</div>}
                    {node.type === 'success' && <div className="badge" style={{ color: 'var(--color-success)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.5rem' }}><CheckCircle size={24} /> Resolution</div>}

                    <h2 style={{ marginTop: '0.5rem' }}>{node.question || node.title || node.agency}</h2>

                    {node.content && <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{node.content}</p>}
                    {node.why && <p className="text-muted" style={{ fontStyle: 'italic', marginBottom: '1rem' }}>why: {node.why}</p>}

                    {node.steps && (
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                            {node.steps.map((step, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{step}</li>)}
                        </ul>
                    )}

                    {node.links && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                            {node.links.map((link, i) => {
                                const IconComponent = link.icon === 'globe' ? Globe : link.icon === 'mail' ? Mail : Phone;
                                const content = (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
                                        <IconComponent size={20} className="text-accent" />
                                        <span>{link.label}</span>
                                    </div>
                                );
                                return link.url ? (
                                    <a key={i} href={link.url} target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? '_self' : '_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {content}
                                    </a>
                                ) : (
                                    <div key={i}>{content}</div>
                                );
                            })}
                        </div>
                    )}

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {node.options && node.options.map((opt, idx) => {
                            const isSelected = selections[currentNodeId] === opt.nextId;
                            return (
                                <button
                                    key={idx}
                                    className={`btn btn-secondary node-option ${isSelected ? 'option-selected' : ''}`}
                                    onClick={() => handleOptionClick(opt.nextId)}
                                    style={{ justifyContent: 'space-between' }}
                                >
                                    {opt.label}
                                    <span>&rarr;</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--color-bg-tertiary)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-primary" onClick={saveSession}>
                        <Save size={18} /> {loading ? 'Saving...' : 'Save & Get Key'}
                    </button>
                </div>
            </div>
        );
    };

    if (loading && !logicData) return <div className="container text-center pt-5">Loading quiz configuration...</div>;

    return (
        <div className="container">
            {notification && (
                <div className="animate-fade-in" style={{
                    position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    background: 'var(--color-bg-secondary)', border: `2px solid ${notification.type === 'error' ? 'var(--color-danger)' : 'var(--color-success)'}`,
                    padding: '2rem', borderRadius: 'var(--radius-lg)', zIndex: 200, boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                    maxWidth: '90%', width: '400px', textAlign: 'center'
                }}>
                    <h3 style={{ color: notification.type === 'error' ? 'var(--color-danger)' : 'var(--color-success)' }}>
                        {notification.type === 'error' ? 'Error' : 'Session Saved!'}
                    </h3>
                    <p style={{ margin: '1rem 0' }}>{notification.message}</p>

                    {notification.key && (
                        <div style={{ margin: '1.5rem 0' }}>
                            <div style={{ background: 'var(--color-bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', fontFamily: 'monospace', fontSize: '1.5rem', letterSpacing: '2px', marginBottom: '1rem' }}>
                                {notification.key}
                            </div>
                            <button className="btn btn-secondary" onClick={() => copyToClipboard(notification.key)} style={{ width: '100%' }}>
                                Copy Key to Clipboard
                            </button>
                        </div>
                    )}

                    <button className="btn btn-primary" onClick={() => setNotification(null)} style={{ marginTop: '1rem', width: '100%' }}>
                        Close
                    </button>
                </div>
            )}

            {notification && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 199 }} onClick={() => setNotification(null)} />}

            {!topic ? (
                <div className="text-center pt-5">
                    <p>Please select a topic from the <a href="/" style={{ textDecoration: 'underline' }}>Home page</a>.</p>
                </div>
            ) : renderNode()}
        </div>
    );
}
