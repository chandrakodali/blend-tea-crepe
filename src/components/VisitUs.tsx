import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useRef, useState } from 'react';
import KineticHeading from './KineticHeading';
import './VisitUs.css';
import { MapPin, Clock, Phone } from 'lucide-react';

const VisitUs: React.FC = () => {
    const revealRef = useScrollReveal();
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const [showMap, setShowMap] = useState(false);

    // Lazy-load the Google Maps iframe only when the section is near the viewport
    useEffect(() => {
        const el = mapContainerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowMap(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Start loading 200px before visible
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section visitus" id="visit">
            <div className="container visitus-container" ref={revealRef}>
                <div className="visitus-content">
                    <KineticHeading Tag="h2" className="visitus-title" text="We'd love to see you." animateBy="word" />
                    <p className="visitus-subtitle">Stop by for a quick cup of tea or settle in for an afternoon of good food and conversation.</p>

                    <div className="visitus-info">
                        <div className="info-item">
                            <MapPin className="info-icon" size={24} />
                            <div>
                                <strong>Location</strong>
                                <p>719 S University Ave<br />Carbondale, IL 62901</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" size={24} />
                            <div className="hours-container">
                                <strong>Hours</strong>
                                <ul className="hours-list">
                                    <li><span>Monday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Tuesday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Wednesday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Thursday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Friday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Saturday</span><span>11:00 AM – 9:00 PM</span></li>
                                    <li><span>Sunday</span><span>11:00 AM – 9:00 PM</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" size={24} />
                            <div>
                                <strong>Phone</strong>
                                <p>(618) 319-1441</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.google.com/?q=719+S+University+Ave,+Carbondale,+IL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Get Directions
                    </a>
                </div>

                <div className="visitus-map" ref={mapContainerRef}>
                    <div className="map-placeholder">
                        {showMap ? (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6627027878363!2d-89.21997382343161!3d37.7126130720445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887768fb3ac25ea5%3A0xe5a36ebd77b78913!2s719%20S%20University%20Ave%2C%20Carbondale%2C%20IL%2062901!5e0!3m2!1sen!2sus!4v1709841804107!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location for Blend Tea & Crepe"
                            ></iframe>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisitUs;
