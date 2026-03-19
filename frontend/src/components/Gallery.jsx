import './Gallery.css';

import img1 from '../assets/images/photo_2026-03-14_23-56-50.jpg';
import img2 from '../assets/images/photo_2026-03-14_23-57-03.jpg';
import img3 from '../assets/images/photo_2026-03-14_23-57-15.jpg';
import img4 from '../assets/images/photo_2026-03-14_23-57-10.jpg';
import img5 from '../assets/images/egg_bullseye.jpg';
import img6 from '../assets/images/photo_2026-03-14_23-56-56.jpg';
import img7 from '../assets/images/photo_2026-03-14_23-57-07.jpg';
import img8 from '../assets/images/photo_2026-03-14_23-57-27.jpg';
import img9 from '../assets/images/photo_2026-03-14_23-57-23.jpg';
import img10 from '../assets/images/photo_2026-03-14_23-56-59.jpg';

const images = [
    { src: img1, alt: 'Thottara Kitchen Night View' },
    { src: img2, alt: 'Signature Porotta and Beef Roast' },
    { src: img3, alt: 'Authentic Kerala Beef Curry' },
    { src: img4, alt: 'Traditional Spicy Omelette' },
    { src: img8, alt: 'Authentic Kerala Kappa and Beef' },
    { src: img7, alt: 'Traditional Rice Dumplings (Pidi)' },
    { src: img9, alt: 'Signature Kerala Biriyani' },
    { src: img10, alt: 'Malabar Fish Pollichathu' },
    { src: img5, alt: 'Perfect Sunny Side Up' },
    { src: img6, alt: 'Kerala Culinary Art' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Visuals</span>
                    <div className="gold-line"></div>
                    <h2 className="section-title">Our <span className="accent">Gallery</span></h2>
                    <p className="section-subtitle">A glimpse into the Thottara experience.</p>
                </div>

                <div className="gallery-grid">
                    {images.map((img, i) => (
                        <div key={i} className={`gallery-item ${i === 0 || i === 9 ? 'wide' : ''}`}>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="gallery-zoom">⊕</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
