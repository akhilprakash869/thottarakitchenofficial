import './Amenities.css';

const amenities = [
    { icon: '🍛', title: 'Authentic Kerala Cuisine', desc: 'Savor the traditional flavors of Kerala, prepared with local spices and heritage recipes.' },
    { icon: '✨', title: 'Great Ambiance', desc: 'Modern and elegant dining space perfect for family gatherings and special occasions.' },
    { icon: '🌾', title: 'Paddy Field View', desc: 'Enjoy your meal with a breath-taking view of the Thottara Puncha paddy fields.' },
    { icon: '🚚', title: 'Home Delivery', desc: 'Delicious food delivered hot to your doorstep. (Available in limited areas)' },
    { icon: '📶', title: 'High-Speed Wi-Fi', desc: 'Stay connected throughout your dining experience with our complimentary premium internet access.' },
    { icon: '🚗', title: 'Secure Parking', desc: 'Convenient and secure parking space available for all our valued guests.' },
];

export default function Amenities() {
    return (
        <section id="amenities" className="section amenities-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What We Offer</span>
                    <div className="gold-line"></div>
                    <h2 className="section-title">Premium <span className="accent">Amenities</span></h2>
                    <p className="section-subtitle">Every detail is crafted to give you an unforgettable experience.</p>
                </div>

                <div className="amenities-grid">
                    {amenities.map((a, i) => (
                        <div key={a.title} className="amenity-card card" style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="amenity-icon">{a.icon}</div>
                            <h3>{a.title}</h3>
                            <p>{a.desc}</p>
                            <div className="amenity-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
