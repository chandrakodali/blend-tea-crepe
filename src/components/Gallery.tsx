import './Gallery.css';

const Gallery: React.FC = () => {
    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <h2 className="section-title">Come As You Are</h2>
                <p className="section-subtitle">A space designed for lingering — warm walls, good light, and a vibe that slows you down.</p>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="/images/gallery-1.png" alt="Our Dining Room" className="gallery-image" />
                        <div className="gallery-caption">Our Dining Room</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/gallery-2.png" alt="Fresh Crepes" className="gallery-image" />
                        <div className="gallery-caption">Fresh Crepes</div>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/Outdoor.png" alt="Outdoor Seating" className="gallery-image" />
                        <div className="gallery-caption">Outdoor Seating</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
