import { useScrollReveal } from '../hooks/useScrollReveal';
import KineticHeading from './KineticHeading';
import './About.css';
import { Sun, Users, Coffee, Car } from 'lucide-react';
import aboutImg from '../assets/images/about.png';

const About: React.FC = () => {
    const revealRef = useScrollReveal();

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid" ref={revealRef}>
                    <div className="about-content">
                        <KineticHeading
                            Tag="h2"
                            className="section-title"
                            text="The Blend Story"
                            animateBy="word"
                        />
                        <p className="about-text">
                            Blend Tea & Crepe Lounge is Carbondale's cozy corner for handcrafted food and real relaxation.
                            Tucked inside a charming brick building with a white picket fence, we've created a space that
                            feels like a home away from home — whether you're catching up with friends, enjoying a quiet
                            afternoon, or treating the family to something special. Every crepe is made fresh. Every tea
                            is brewed with care. Run by Ming and a close-knit team, every visit feels personal — because
                            to us, every Blender is family.
                        </p>

                        <div className="about-badges">
                            <div className="badge">
                                <div className="badge-icon"><Sun size={20} /></div>
                                <span>Outdoor Seating</span>
                            </div>
                            <div className="badge">
                                <div className="badge-icon"><Users size={20} /></div>
                                <span>Family Friendly</span>
                            </div>
                            <div className="badge">
                                <div className="badge-icon"><Coffee size={20} /></div>
                                <span>Fresh Brewed Daily</span>
                            </div>
                            <div className="badge">
                                <div className="badge-icon"><Car size={20} /></div>
                                <span>Easy Parking</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-container">
                        <img src={aboutImg} alt="About Blend Tea and Crepe" className="about-image" loading="lazy" />
                        <div className="about-image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
