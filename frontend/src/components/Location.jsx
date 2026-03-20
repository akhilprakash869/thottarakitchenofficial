import { useState } from 'react';
import './Location.css';

export default function Location({ showToast }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, type: 'general' }),
            });
            if (res.ok) {
                showToast('Message sent! We\'ll get back to you shortly.', 'success');
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                showToast('Something went wrong. Please try again.', 'error');
                setStatus('error');
            }
        } catch {
            showToast('Server error. Please try again later.', 'error');
            setStatus('error');
        }
    };

    return (
        <section id="location" className="section location-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Find Us</span>
                    <div className="gold-line"></div>
                    <h2 className="section-title">How to <span className="accent">Reach Us</span></h2>
                </div>

                <div className="location-grid">
                    <div className="location-info">
                        <div className="info-block card">
                            <h3>📍 Address</h3>
                            <p>Near Thottara Puncha, Olippuram<br />Arayankavu, Ernakulam, Kerala</p>
                            <a
                                href="https://maps.google.com/maps?q=RCJH%2B9CR%2C%2BKulayettikara%2C%2BKerala%2B682317%2C%2BIndia&sll=9.830880542160207,76.42944395542145"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ marginTop: '16px' }}
                            >
                                Open in Google Maps
                            </a>
                        </div>
                        <div className="info-block card">
                            <h3>📞 Contact</h3>
                            <p>+91 98957 55005</p>
                            <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>hello@thottarakitchen.com</p>
                        </div>
                        <div className="info-block card">
                            <h3>🕐 Hours</h3>
                            <p>Mon–Sun: 7:00 AM – 11:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper card">
                        <h3 style={{ marginBottom: '24px' }}>Send a <span className="accent">Message</span></h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
