import KineticHeading from './KineticHeading';
import { useNativeScrollReveal } from '../hooks/useNativeScrollReveal';
import { Star } from 'lucide-react';
import './Testimonials.css';

interface Testimonial {
    id: string;
    name: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 't-1',
        name: 'Joseph D.',
        text: 'Excellent place! We were there this week and thoroughly enjoyed it.',
        rating: 5,
    },
    {
        id: 't-2',
        name: 'Loyal Boba Fan',
        text: "I go here all the time. The boba tea is great, and the price is really good compared to other places I've been. I've come here in blistering cold just to get boba.",
        rating: 5,
    },
    {
        id: 't-3',
        name: 'SIU Alum',
        text: '"Sweet Crepe with Banana & extra Nutella!" — Absolute Delight!! Will always stay as a core memory for me. Moved to Seattle, tried every crepe place here & nothing matched.',
        rating: 5,
    },
    {
        id: 't-4',
        name: 'Morning Regular',
        text: 'Fantastic place that has the perfect morning pick-me-ups. There are lots of great menu items. Wonderful staff. Great way to start the day.',
        rating: 5,
    },
    {
        id: 't-5',
        name: 'Happy Customer',
        text: 'Food was delicious and the price was right. Would go again. Love the atmosphere, staff is friendly and great service.',
        rating: 5,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="testimonial-stars">
        {Array.from({ length: rating }, (_, i) => (
            <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
        ))}
    </div>
);

const Testimonials: React.FC = () => {
    const revealRef = useNativeScrollReveal();

    return (
        <section className="section testimonials-section" id="reviews">
            <div className="container">
                <KineticHeading Tag="h2" className="section-title" text="What Our Blenders Say" animateBy="word" />
                <div className="testimonials-rating-badge">
                    <div className="rating-stars">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />
                        ))}
                    </div>
                    <span className="rating-text">4.7 out of 5 · 149+ Google Reviews</span>
                </div>

                <div className="testimonials-grid" ref={revealRef}>
                    {testimonials.map((t, index) => (
                        <div
                            key={t.id}
                            className="testimonial-card reveal-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <StarRating rating={t.rating} />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">{t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
