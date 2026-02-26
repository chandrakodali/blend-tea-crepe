import { useScrollReveal } from '../hooks/useScrollReveal';
import KineticHeading from './KineticHeading';
import './Gallery.css';
import gallery1Img from '../assets/images/gallery-1.png';
import gallery2Img from '../assets/images/gallery-2.png';
import outdoorImg from '../assets/images/Outdoor.png';

const Gallery: React.FC = () => {
    const revealRef = useScrollReveal();

    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <KineticHeading Tag="h2" className="section-title" text="Come As You Are" animateBy="word" />
                <p className="section-subtitle">A space designed for lingering — warm walls, good light, and a vibe that slows you down.</p>

                <div className="gallery-grid" ref={revealRef}>
                    <div className="gallery-item">
                        <img src={gallery1Img} alt="Our Dining Room" className="gallery-image" />
                        <div className="gallery-caption">Our Dining Room</div>
                    </div>
                    <div className="gallery-item">
                        <img src={gallery2Img} alt="Fresh Crepes" className="gallery-image" />
                        <div className="gallery-caption">Fresh Crepes</div>
                    </div>
                    <div className="gallery-item">
                        <img src={outdoorImg} alt="Outdoor Seating" className="gallery-image" />
                        <div className="gallery-caption">Outdoor Seating</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
