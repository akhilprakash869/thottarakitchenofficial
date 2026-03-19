import { useEffect, useState, useRef } from 'react';
import './Hero.css';

// Import high-quality 4K images for the slider
import bgNight from '../assets/images/restaurant_night_view.jpg';
import bg1 from '../assets/images/photo_2026-03-14_23-56-50.jpg';
import bg2 from '../assets/images/photo_2026-03-14_23-57-03.jpg';
import bg3 from '../assets/images/photo_2026-03-14_23-57-15.jpg';
import bg4 from '../assets/images/photo_2026-03-14_23-57-23.jpg';

const bgImages = [bgNight, bg1, bg2, bg3, bg4];

export default function Hero() {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % bgImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);


    return (
        <section id="home" className="hero">
            {bgImages.map((img, i) => (
                <div
                    key={i}
                    className={`hero-bg ${currentBg === i ? 'active' : ''}`}
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
                ></div>
            ))}
            <div className="hero-overlay"></div>

            {/* Floating ambient orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            <div className="hero-content">
                <h1 className="hero-title fade-in-up delay-1">
                    Authentic<br />
                    Kerala <span className="accent">Dining</span>
                </h1>

                <p className="hero-subtitle fade-in-up delay-2">
                    Experience the true essence of Kerala flavors with a<br />
                    breath-taking view of Thottara Puncha paddy fields.
                </p>

                <div className="hero-actions fade-in-up delay-3">
                    <a href="https://wa.me/919895755005" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Online Order (WhatsApp)
                    </a>
                    <a href="#gallery" className="btn btn-outline btn-lg">
                        View Menu
                    </a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-dot"></div>
            </div>
        </section>
    );
}
