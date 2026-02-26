// Type definitions for BlendTea Crepe Data Models

export interface MenuItem {
    name: string;
    price: string;
    desc: string;
}

export interface MenuData {
    [category: string]: MenuItem[];
}

export interface FeaturedItem {
    id: string;
    icon: string;
    name: string;
    description: string;
    price: string;
}
