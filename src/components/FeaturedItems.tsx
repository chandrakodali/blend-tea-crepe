import type { FeaturedItem } from '../types';
import KineticHeading from './KineticHeading';
import { useNativeScrollReveal } from '../hooks/useNativeScrollReveal';
import './FeaturedItems.css';

const featuredItems: FeaturedItem[] = [
    {
        id: 'fi-1',
        icon: '🫖',
        name: 'Shaken Ice Tea',
        description: 'Freshly brewed black or green tea blended with your choice of flavor over ice. Add bubbles or jelly.',
        price: 'From $2.25'
    },
    {
        id: 'fi-2',
        icon: '🥞',
        name: 'Roast Chicken Crepe',
        description: 'Roast chicken, mozzarella, sun-dried tomato & organic spinach wrapped in a warm soft crepe.',
        price: '$4.50'
    },
    {
        id: 'fi-3',
        icon: '🍓',
        name: 'Fruit Sweet Crepe',
        description: 'Sweet crepe with fresh banana and/or strawberry, your choice of spread, and optional ice cream.',
        price: 'From $3.99'
    },
    {
        id: 'fi-4',
        icon: '❄️',
        name: 'Seasonal Special',
        description: 'White Chocolate Peppermint Milk Tea — our winter favorite is back! Rich, creamy, and festive.',
        price: 'Limited Time'
    }
];

const FeaturedItems: React.FC = () => {
    const revealRef = useNativeScrollReveal();

    return (
        <section className="section css-featured-section" id="featured">
            <div className="container">
                <KineticHeading Tag="h2" className="section-title css-featured-title" text="BLEND Tea & Crepe" animateBy="word" />

                <div className="css-featured-container" ref={revealRef}>
                    {featuredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="css-featured-card reveal-on-scroll"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="css-featured-icon">{item.icon}</div>
                            <div className="css-featured-content">
                                <h3 className="css-featured-name">{item.name}</h3>
                                <p className="css-featured-desc">{item.description}</p>
                                <div className="css-featured-divider"></div>
                                <div className="css-featured-price">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;
