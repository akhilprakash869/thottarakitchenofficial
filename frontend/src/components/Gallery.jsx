import './Gallery.css';

import beefRoast from '../assets/images/photo_2026-03-14_23-57-03.jpg';
import beefCurry from '../assets/images/photo_2026-03-14_23-57-15.jpg';
import eggBullseye from '../assets/images/egg_bullseye.jpg';
import culinaryArt from '../assets/images/photo_2026-03-14_23-56-56.jpg';
import pidiRice from '../assets/images/photo_2026-03-14_23-57-07.jpg';
import keralaBiriyani from '../assets/images/photo_2026-03-14_23-57-23.jpg';
import nightView from '../assets/images/gallery_night_view_new.jpg';
import kappaBeef from '../assets/images/gallery_tapioca_beef_new.jpg';
import spicyOmelette from '../assets/images/gallery_omelette_new.jpg';
import claypotCurry from '../assets/images/gallery_claypot_curry_new.jpg';
import fishPollichathu from '../assets/images/gallery_fish_pollichathu_new.jpg';
import imgTable1 from '../assets/images/gallery_table_1.jpg';
import imgTable2 from '../assets/images/gallery_table_2.jpg';

const images = [
    { src: nightView, alt: 'Thottara Kitchen Night View' },
    { src: beefRoast, alt: 'Signature Porotta and Beef Roast' },
    { src: fishPollichathu, alt: 'Malabar Fish Pollichathu' },
    { src: spicyOmelette, alt: 'Traditional Spicy Omelette' },
    { src: kappaBeef, alt: 'Authentic Kerala Kappa and Beef' },
    { src: claypotCurry, alt: 'Traditional Claypot Curry' },
    { src: pidiRice, alt: 'Traditional Rice Dumplings (Pidi)' },
    { src: keralaBiriyani, alt: 'Signature Kerala Biriyani' },
    { src: beefCurry, alt: 'Authentic Kerala Beef Curry' },
    { src: eggBullseye, alt: 'Perfect Sunny Side Up' },
    { src: culinaryArt, alt: 'Kerala Culinary Art' },
    { src: imgTable1, alt: 'Table Setting at Thottara' },
    { src: imgTable2, alt: 'Cozy Dining Spot' },
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
