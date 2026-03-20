import { useState, useEffect } from 'react';
import './Toast.css';

export default function Toast({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!message) return null;

    return (
        <div className={`toast-container ${type}`}>
            <div className="toast-content">
                <span className="toast-icon">
                    {type === 'success' ? '✅' : '❌'}
                </span>
                <span className="toast-message">{message}</span>
            </div>
            <div className="toast-progress"></div>
        </div>
    );
}
