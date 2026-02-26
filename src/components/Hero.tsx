import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Where Every Sip & Bite Feels Like Home</h1>
                    <p className="hero-subtitle">Handcrafted Crepes & Premium Teas in the Heart of Carbondale</p>
                    <div className="hero-buttons">
                        <a href="#menu" className="btn btn-primary btn-lg">View Our Menu</a>
                        <a href="#visit" className="btn btn-secondary btn-secondary-light btn-lg">Find Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
