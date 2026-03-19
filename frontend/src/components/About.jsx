import './About.css';
import tapiocaBeef from '../assets/images/photo_2026-03-14_23-57-27.jpg';

export default function About() {
    const highlights = [
        { icon: '🎯', title: 'Authentic Recipes', desc: 'Kerala heritage recipes passed through generations.' },
        { icon: '🌾', title: 'Paddy View', desc: 'Dine with a serene view of Thottara Puncha.' },
        { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Master chefs with decades of culinary artistry.' },
    ];

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-img-wrapper">
                            <img
                                src={tapiocaBeef}
                                alt="Thottara Kitchen authentic tapioca and beef"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="section-tag">Our Story</span>
                        <div className="gold-line" style={{ margin: '0 0 24px' }}></div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            The Heart of Thottara<br /><span className="accent">Authentic Kerala Taste</span>
                        </h2>
                        <p className="about-desc">
                            Located near the scenic Thottara Puncha in Ernakulam, Thottara Kitchen is a celebration of Kerala's rich culinary heritage. We offer a perfect blend of high-quality food and a soothing ambiance that overlooks the vast, green paddy fields.
                        </p>
                        <p className="about-desc">
                            Our specialty lies in traditional dishes like Tapioca with Beef, Biriyani, and local delicacies, all prepared with the freshest ingredients sourced daily. Whether it's a family dinner or a quick bite, we promise an experience that stays with you.
                        </p>

                        <div className="about-highlights">
                            {highlights.map((h) => (
                                <div key={h.title} className="highlight-item">
                                    <div className="highlight-icon">{h.icon}</div>
                                    <div>
                                        <h4>{h.title}</h4>
                                        <p>{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
