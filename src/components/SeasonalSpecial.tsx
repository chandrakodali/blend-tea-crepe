import KineticHeading from './KineticHeading';
import { useNativeScrollReveal } from '../hooks/useNativeScrollReveal';
import './SeasonalSpecial.css';

interface Season {
    name: string;
    emoji: string;
    drink: string;
    description: string;
    active: boolean;
}

const seasons: Season[] = [
    {
        name: 'Winter',
        emoji: '❄️',
        drink: 'White Chocolate Peppermint Milk Tea',
        description: 'Rich white chocolate meets cool peppermint in our coziest winter warmer. Available hot or iced.',
        active: true,
    },
    {
        name: 'Spring',
        emoji: '🌸',
        drink: 'Sakura Rose Milk Tea',
        description: 'Delicate cherry blossom and rose notes blended into creamy milk tea. A floral springtime favorite.',
        active: false,
    },
    {
        name: 'Fall',
        emoji: '🎃',
        drink: 'Pumpkin Pie Milk Tea',
        description: 'Warm pumpkin spice meets smooth milk tea — like pumpkin pie in a cup. Hot or cold.',
        active: false,
    },
];

const SeasonalSpecial: React.FC = () => {
    const revealRef = useNativeScrollReveal();
    const activeSeason = seasons.find(s => s.active)!;
    const upcomingSeasons = seasons.filter(s => !s.active);

    return (
        <section className="section seasonal-section" id="seasonal">
            <div className="container">
                <KineticHeading Tag="h2" className="section-title seasonal-title" text="What's Brewing This Season" animateBy="word" />
                <p className="section-subtitle">We rotate special drinks with the seasons — here's what's on now and what's coming next.</p>

                <div className="seasonal-container" ref={revealRef}>
                    {/* Active Season — Large Card */}
                    <div className="seasonal-hero-card reveal-on-scroll">
                        <div className="seasonal-badge">NOW AVAILABLE</div>
                        <div className="seasonal-hero-emoji">{activeSeason.emoji}</div>
                        <div className="seasonal-hero-content">
                            <div className="seasonal-season-label">{activeSeason.name} Special</div>
                            <h3 className="seasonal-hero-name">{activeSeason.drink}</h3>
                            <p className="seasonal-hero-desc">{activeSeason.description}</p>
                        </div>
                    </div>

                    {/* Upcoming Seasons — Smaller Cards */}
                    <div className="seasonal-upcoming">
                        {upcomingSeasons.map((season, index) => (
                            <div
                                key={season.name}
                                className="seasonal-upcoming-card reveal-on-scroll"
                                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                            >
                                <span className="seasonal-upcoming-emoji">{season.emoji}</span>
                                <div className="seasonal-upcoming-content">
                                    <div className="seasonal-upcoming-label">Coming {season.name}</div>
                                    <h4 className="seasonal-upcoming-name">{season.drink}</h4>
                                    <p className="seasonal-upcoming-desc">{season.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeasonalSpecial;
