
import { useEffect } from 'react';

export default function EmergencyExit() {
    useEffect(() => {
        // Immediately redirect, but show this facade while loading
        window.location.replace("https://www.google.com");
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'arial, sans-serif'
        }}>
            <div style={{ marginBottom: '20px' }}>
                <span style={{ color: '#4285f4', fontSize: '80px', fontWeight: 'bold' }}>G</span>
                <span style={{ color: '#ea4335', fontSize: '80px', fontWeight: 'bold' }}>o</span>
                <span style={{ color: '#fbbc05', fontSize: '80px', fontWeight: 'bold' }}>o</span>
                <span style={{ color: '#4285f4', fontSize: '80px', fontWeight: 'bold' }}>g</span>
                <span style={{ color: '#34a853', fontSize: '80px', fontWeight: 'bold' }}>l</span>
                <span style={{ color: '#ea4335', fontSize: '80px', fontWeight: 'bold' }}>e</span>
            </div>

            <div style={{
                width: '580px',
                maxWidth: '90%',
                height: '44px',
                borderRadius: '24px',
                border: '1px solid #dfe1e5',
                boxShadow: '0 1px 6px rgba(32, 33, 36, 0.28)',
                marginTop: '20px'
            }}></div>
        </div>
    );
}
