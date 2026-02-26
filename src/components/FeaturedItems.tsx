import './FeaturedItems.css';

const featuredItems = [
    {
        icon: '🫖',
        name: 'Shaken Ice Tea',
        description: 'Freshly brewed black or green tea blended with your choice of flavor over ice. Add bubbles or jelly.',
        price: 'From $2.25'
    },
    {
        icon: '🥞',
        name: 'Roast Chicken Crepe',
        description: 'Roast chicken, mozzarella, sun-dried tomato & organic spinach wrapped in a warm soft crepe.',
        price: '$4.50'
    },
    {
        icon: '🍓',
        name: 'Fruit Sweet Crepe',
        description: 'Sweet crepe with fresh banana and/or strawberry, your choice of spread, and optional ice cream.',
        price: 'From $3.99'
    },
    {
        icon: '🧋',
        name: 'Hot Milk Tea',
        description: 'Freshly brewed black tea blended with hot milk and your choice of flavor. Rich and creamy.',
        price: 'From $3.20'
    }
];

const FeaturedItems: React.FC = () => {
    return (
        <section className="section bg-alt" id="featured">
            <div className="container">
                <h2 className="section-title">Fan Favorites</h2>
                <p className="section-subtitle">Handpicked selections to start your journey at Blend.</p>

                <div className="featured-grid">
                    {featuredItems.map((item, index) => (
                        <div className="featured-card" key={index}>
                            <div className="featured-icon">{item.icon}</div>
                            <h3 className="featured-name">{item.name}</h3>
                            <p className="featured-desc">{item.description}</p>
                            <div className="featured-price">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedItems;
