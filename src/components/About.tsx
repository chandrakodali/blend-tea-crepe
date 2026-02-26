import './About.css';
import { Sun, Users, Coffee, Car } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="section-title" style={{ textAlign: 'left' }}>The Blend Story</h2>
                        <p className="about-text">
                            Blend Tea & Crepe Lounge is Carbondale's cozy corner for handcrafted food and real relaxation.
                            Tucked inside a charming brick building with a white picket fence, we've created a space that
                            feels like a home away from home — whether you're catching up with friends, enjoying a quiet
                            afternoon, or treating the family to something special. Every crepe is made fresh. Every tea
                            is brewed with care.
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
                        <img src="/images/about.png" alt="About Blend Tea and Crepe" className="about-image" />
                        <div className="about-image-decoration"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
