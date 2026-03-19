import './Careers.css';

export default function Careers() {
    const waLink = 'https://wa.me/919895755005?text=Hi%20Thottara%20Kitchen!%20I\'m%20interested%20in%20joining%20your%20team.';

    return (
        <section id="careers" className="section careers-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Work With Us</span>
                    <div className="gold-line"></div>
                    <h2 className="section-title">Join Our <span className="accent">Team</span></h2>
                    <p className="section-subtitle">We're always looking for passionate individuals to grow with us.</p>
                </div>

                <div className="career-cta-wrapper card">
                    <div className="career-content">
                        <h3>Interested in joining?</h3>
                        <p>We're expanding and need talented people. Contact us directly to discuss opportunities.</p>

                        <div className="career-actions">
                            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                Chat on WhatsApp
                            </a>
                            <a href="tel:+919895755005" className="btn btn-outline btn-lg">
                                Call Us Now
                            </a>
                        </div>

                        <p className="career-email" style={{ marginTop: '24px', color: 'var(--text-muted)' }}>
                            Or send your CV to <a href="mailto:careers@thottarakitchen.com" className="accent">careers@thottarakitchen.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
