import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle, Globe, Mail, Phone, Share2, Copy } from 'lucide-react';

export default function Quiz() {
    // nodeId here is actually the "Code" (e.g. ABC-123) from the URL
    const { topicId, nodeId: urlCode } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [logicData, setLogicData] = useState(null); // { TOPICS, LOGIC_TREES }
    const [urlMap, setUrlMap] = useState(null); // { codes, ids }
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);

    // 1. Fetch Data (Static JSONs)
    useEffect(() => {
        Promise.all([
            fetch('/data/logicTrees.json').then(res => res.json()),
            fetch('/data/urlMap.json').then(res => res.json())
        ])
            .then(([logic, map]) => {
                setLogicData(logic);
                setUrlMap(map);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Failed to load guide data");
                setLoading(false);
            });
    }, []);

    // 2. Handle Initial Redirect or Validation
    useEffect(() => {
        if (!loading && logicData && urlMap) {
            // If no topic/code in URL, redirect home
            if (!topicId) {
                if (logicData.LOGIC_TREES.UNIFIED_FLOW) {
                    const startNode = logicData.LOGIC_TREES.UNIFIED_FLOW.start;
                    const startCode = urlMap.ids[startNode];
                    navigate(`/quiz/UNIFIED_FLOW/${startCode}`, { replace: true });
                } else {
                    navigate('/', { replace: true });
                }
            } else if (!urlCode) {
                // If topic provided but no code, go to start
                if (logicData.LOGIC_TREES[topicId]) {
                    const startNode = logicData.LOGIC_TREES[topicId].start;
                    const startCode = urlMap.ids[startNode];
                    navigate(`/quiz/${topicId}/${startCode}`, { replace: true });
                }
            }
        }
    }, [loading, logicData, urlMap, topicId, urlCode, navigate]);


    const handleOptionClick = (nextId) => {
        // nextId is the Real ID. We need to convert it to a Code.
        if (urlMap && urlMap.ids[nextId]) {
            const nextCode = urlMap.ids[nextId];
            navigate(`/quiz/${topicId}/${nextCode}`);
        } else {
            console.error("No code found for node:", nextId);
        }
    };

    // Resolve current real Node ID from the URL Code
    const currentNodeId = urlMap && urlMap.codes[urlCode] ? urlMap.codes[urlCode] : null;

    const goBack = () => {
        // Since we are stateless, "Back" means "Parent Node" or "Browser Back".
        const tree = logicData?.LOGIC_TREES[topicId];
        if (tree && currentNodeId) {
            const currentNode = tree.nodes[currentNodeId];
            if (currentNode && currentNode.parentId) {
                // Find parent code
                const parentCode = urlMap.ids[currentNode.parentId];
                if (parentCode) {
                    // Pass the current code as 'selected' so the parent knows what we chose
                    navigate(`/quiz/${topicId}/${parentCode}?selected=${urlCode}`);
                    return;
                }
            }
        }
        // Fallback or if at root
        navigate(-1);
    };

    const copyCode = () => {
        const code = urlCode;
        navigator.clipboard.writeText(code).then(() => {
            setNotification({ type: 'success', message: 'Current step code copied!' });
            setTimeout(() => setNotification(null), 3000);
        });
    }

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setNotification({ type: 'success', message: 'Link copied to clipboard!' });
            setTimeout(() => setNotification(null), 3000);
        });
    }


    const renderNode = () => {
        if (!logicData || !topicId || !currentNodeId) return null;

        const tree = logicData.LOGIC_TREES[topicId];
        if (!tree) return <div>Topic not found</div>;

        const node = tree.nodes[currentNodeId];
        if (!node) return <div>Step not found ({urlCode})</div>;

        const isResult = ['result', 'success', 'advice'].includes(node.type);

        return (
            <div className="card animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                        <button onClick={goBack} className="btn btn-outline" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                            <ArrowLeft size={20} /> Back
                        </button>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button onClick={copyCode} className="btn btn-ghost" title="Copy Step Code" style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                                <span style={{ fontSize: '0.8rem', marginRight: '0.5rem', fontWeight: 'bold' }}>CODE: {urlCode}</span>
                                <Copy size={18} />
                            </button>
                            <button onClick={copyLink} className="btn btn-ghost" title="Share Link" style={{ padding: '0.5rem', color: 'var(--color-text-secondary)' }}>
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>

                    {node.type === 'result' && <div className="badge" style={{ color: '#f59e0b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.5rem' }}><AlertTriangle size={24} /> Recommended Action</div>}
                    {node.type === 'success' && <div className="badge" style={{ color: 'var(--color-success)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', marginBottom: '0.5rem' }}><CheckCircle size={24} /> Resolution</div>}

                    <h2 key={currentNodeId} className="animate-zen-breath" style={{ marginTop: '0.5rem' }}>
                        {node.question || node.title || node.agency}
                    </h2>

                    {node.content && <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>{node.content}</p>}
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
                            // Check if this option leads to the code passed in ?selected=...
                            // We need to resolve the option's Real ID to its Short Code first
                            const optCode = urlMap && urlMap.ids[opt.nextId];
                            const isSelected = searchParams.get('selected') === optCode;

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
            </div>
        );
    };

    if (loading) return <div className="container text-center pt-5">Loading guide...</div>;
    if (error) return <div className="container text-center pt-5 text-danger">Error: {error}</div>;

    return (
        <div className="container">
            {notification && (
                <div className="animate-fade-in" style={{
                    position: 'fixed', bottom: '2rem', right: '2rem',
                    background: 'var(--color-bg-secondary)', border: '1px solid var(--color-success)',
                    padding: '1rem 2rem', borderRadius: 'var(--radius-md)', zIndex: 200, boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                    color: 'var(--color-success)', fontWeight: 'bold'
                }}>
                    {notification.message}
                </div>
            )}

            {renderNode()}
        </div>
    );
}
