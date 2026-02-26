import { useState } from 'react';
import './Menu.css';
import KineticHeading from './KineticHeading';
import type { MenuData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Menu data organized by category
const menuData: MenuData = {
    "Shaken Ice Tea": [
        { name: 'Plain (16oz / 24oz)', price: '$2.25 / $2.75', desc: 'No bubbles or jelly' },
        { name: 'With Bubbles or Jelly (16oz / 24oz)', price: '$2.60 / $3.10', desc: 'Added toppings' },
        { name: 'Flavors', price: 'Included', desc: 'Honey, Peach, Passion Fruit, Mango, Strawberry, Lychee, Pineapple, Lemon, White Peach, Honeydew, Rose, Lavender' }
    ],
    "Yogurt Slush": [
        { name: 'Plain (16oz / 24oz)', price: '$2.75 / $3.25', desc: 'Yogurt slush base' },
        { name: 'With Bubbles or Jelly (16oz / 24oz)', price: '$3.10 / $3.60', desc: 'Added toppings' },
        { name: 'Flavors', price: 'Included', desc: 'Honey, Peach, Passion Fruit, Strawberry, Mango, Lychee, Pineapple, White Peach, Lemon, Honeydew' }
    ],
    "Ice Milk Tea": [
        { name: 'Plain (16oz / 24oz)', price: '$2.85 / $3.35', desc: 'Classic ice milk tea' },
        { name: 'With Bubbles or Jelly (16oz / 24oz)', price: '$3.20 / $3.70', desc: 'Added toppings' },
        { name: 'Flavors', price: 'Included', desc: 'Original, Taro, Japanese Matcha, Coffee, Strawberry, Passion Fruit, Mango, Peach, Lychee, Pineapple, White Peach, Lemon, Honeydew, Rose, Lavender, Almond, Chocolate, Honey' }
    ],
    "Hot Milk Tea": [
        { name: 'Hot Milk Tea (16oz / 20oz)', price: '$3.20 / $3.70', desc: 'Warm comforting milk tea' },
        { name: 'Flavors', price: 'Included', desc: 'Original, Taro, Japanese Matcha, Coffee, Mango, Strawberry, Peach, White Peach, Pineapple, Lemon, Honeydew, Rose, Honey, Lavender, Almond, Chocolate, Lychee' }
    ],
    "Hot Tea": [
        { name: 'Hot Tea (16oz / 20oz)', price: '$2.25 / $2.75', desc: 'Fresh brewed classic hot tea' },
        { name: 'Flavors', price: 'Included', desc: 'Honey, Peach, Passion Fruit, Mango, Lemon, Strawberry, Lychee, Pineapple, White Peach, Honeydew, Rose, Lavender' }
    ],
    "Signature Tea": [
        { name: 'Hot Rose/Lavender Tea (16oz / 20oz)', price: '$2.25 / $2.75', desc: 'Signature floral notes' },
        { name: 'Hot Rose/Lavender Milk Tea', price: '$3.20 / $3.70', desc: 'Creamy with signature floral notes' },
        { name: 'Ice Coffee Milk Tea with Coffee Jelly', price: '$3.20 / $3.70', desc: 'Coffee lover\'s favorite' },
        { name: 'Ice Green Tea with Yogurt Drink', price: '$2.75 / $3.25', desc: 'Refreshing blend' },
        { name: 'Ice Passion Fruit Green Tea', price: '$2.60 / $3.10', desc: 'With Fruit Jelly' }
    ],
    "Savory Crepes": [
        { name: 'Smoked Ham', price: '$3.99', desc: 'Ham, cheddar, organic spinach' },
        { name: 'Smoked Turkey', price: '$3.99', desc: 'Turkey, Swiss cheese, organic spinach' },
        { name: 'Ham Egg', price: '$4.50', desc: 'Ham, cheddar, egg, organic spinach' },
        { name: 'Roast Chicken', price: '$4.50', desc: 'Roast chicken, mozzarella, sun-dried tomato, organic spinach' },
        { name: 'Grilled Chicken', price: '$4.99', desc: 'Grilled chicken, roasted pepper, Swiss cheese, organic spinach' },
        { name: 'Angus Roast Beef', price: '$4.99', desc: 'Roast beef, Swiss cheese, organic spinach' },
        { name: 'Beef Frank', price: '$4.99', desc: 'Beef frank, mozzarella, organic spinach' },
        { name: 'Mushroom Grilled Chicken', price: '$5.50', desc: 'Grilled chicken, mushroom, roasted pepper, Swiss cheese, organic spinach' },
        { name: 'Mushroom Supreme', price: '$4.50', desc: 'Mushroom, cheddar, organic spinach, sun-dried tomato' },
        { name: 'Veggie Mix', price: '$4.50', desc: 'Organic spinach, organic spring mix, roasted red pepper, sun-dried tomato, cheddar' }
    ],
    "Sweet Crepes": [
        { name: 'Nutella', price: '$3.00', desc: 'With whip cream' },
        { name: 'Chocolate', price: '$3.00', desc: 'With whip cream' },
        { name: 'Peanut Butter', price: '$3.00', desc: 'With whip cream' },
        { name: 'Honey', price: '$3.00', desc: 'With whip cream' },
        { name: 'Chestnut Spread', price: '$3.00', desc: 'French chestnut spread with whip cream' }
    ],
    "Fruit Crepes": [
        { name: 'Sweet Crepe Base', price: '$3.00', desc: 'Choose a spread (Nutella, Chocolate, Peanut Butter, Honey, Chestnut)' },
        { name: 'With One Fruit', price: '$3.99', desc: 'Banana or Strawberry' },
        { name: 'With Two Fruits', price: '$4.50', desc: 'Banana and Strawberry' },
        { name: 'Add Ice Cream', price: '+$1.00', desc: 'Chocolate Chip, Butter Pecan, Strawberry, Strawberry Cheesecake, Sugar Free Vanilla, Moose Track, Chocolate Brownie, Orange Sherbet' }
    ],
    "Ice Cream Crepes": [
        { name: 'Sweet Crepe with Ice Cream', price: '$4.00', desc: 'Select spread and ice cream flavor' },
        { name: 'Spread Options', price: 'Included', desc: 'Nutella, Chocolate, Peanut Butter, Honey, Chestnut' },
        { name: 'Ice Cream Flavors', price: 'Included', desc: 'Chocolate Chip, Butter Pecan, Orange Sherbet, Strawberry Cheesecake, Sugar Free Vanilla, Moose Track, Chocolate Brownie, Strawberry' }
    ]
};

const categories = Object.keys(menuData);

const Menu: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Savory Crepes");
    const revealRef = useScrollReveal();

    const currentItems = menuData[activeTab as keyof typeof menuData];

    return (
        <section className="section bg-alt" id="menu">
            <div className="container">
                <KineticHeading Tag="h2" className="section-title" text="Our Menu" animateBy="word" />
                <p className="section-subtitle">Explore our wide variety of handcrafted teas and fresh-made crepes.</p>

                {/* Scrollable Tabs Container */}
                <div className="menu-tabs-wrapper">
                    <div className="menu-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`menu-tab ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items List — plain divs instead of TiltCard for performance */}
                <div className="menu-items-container" ref={revealRef}>
                    {currentItems.map((item, index) => (
                        <div key={index} className="menu-item-card">
                            <div className="menu-item-header">
                                <h3 className="menu-item-name">{item.name}</h3>
                                <div className="menu-item-dots"></div>
                                <div className="menu-item-price">{item.price}</div>
                            </div>
                            <p className="menu-item-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
