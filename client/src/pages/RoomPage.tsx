import { useState } from 'react';
import { Link } from 'wouter';
import {
    Star,
    Wifi,
    Car,
    Coffee,
    Utensils,
    Users,
    Bed,
    Bath,
    Mountain,
    Eye,
    Filter
} from 'lucide-react';

export default function RoomsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('all');

    const rooms = [
        {
            id: 1,
            name: 'Deluxe Ocean Suite',
            category: 'suite',
            price: 450,
            originalPrice: 520,
            image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Spacious suite with panoramic ocean views and premium amenities',
            size: '65 sqm',
            guests: 4,
            beds: 2,
            bathrooms: 2,
            features: ['Ocean View', 'Balcony', 'King Bed', 'Living Area', 'Mini Bar', 'Free WiFi'],
            amenities: [Wifi, Coffee, Utensils, Eye, Mountain, Bath],
            rating: 4.9,
            reviews: 234
        },
        {
            id: 2,
            name: 'Executive Business Room',
            category: 'business',
            price: 280,
            originalPrice: 320,
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Perfect for business travelers with work desk and meeting facilities',
            size: '42 sqm',
            guests: 2,
            beds: 1,
            bathrooms: 1,
            features: ['City View', 'Work Desk', 'Queen Bed', 'Business Lounge Access', 'Printer', 'Free WiFi'],
            amenities: [Wifi, Coffee, Utensils, Car, Eye, Bath],
            rating: 4.7,
            reviews: 189
        },
        {
            id: 3,
            name: 'Luxury Presidential Suite',
            category: 'luxury',
            price: 850,
            originalPrice: 1000,
            image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'The pinnacle of luxury with butler service and exclusive amenities',
            size: '120 sqm',
            guests: 6,
            beds: 3,
            bathrooms: 3,
            features: ['Panoramic Views', 'Private Terrace', 'Butler Service', 'Dining Room', 'Jacuzzi', 'Premium WiFi'],
            amenities: [Wifi, Coffee, Utensils, Car, Eye, Bath],
            rating: 5.0,
            reviews: 87
        },
        {
            id: 4,
            name: 'Classic Double Room',
            category: 'standard',
            price: 180,
            originalPrice: 220,
            image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Comfortable and elegantly designed room perfect for couples',
            size: '28 sqm',
            guests: 2,
            beds: 1,
            bathrooms: 1,
            features: ['Garden View', 'Double Bed', 'Work Desk', 'Mini Fridge', 'Coffee Machine', 'Free WiFi'],
            amenities: [Wifi, Coffee, Bath, Eye],
            rating: 4.5,
            reviews: 342
        },
        {
            id: 5,
            name: 'Family Connecting Rooms',
            category: 'family',
            price: 320,
            originalPrice: 380,
            image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Two connecting rooms perfect for families with children',
            size: '55 sqm',
            guests: 6,
            beds: 3,
            bathrooms: 2,
            features: ['Connecting Rooms', 'Kids Area', 'Twin & Double Beds', 'Family Bathroom', 'Game Console', 'Free WiFi'],
            amenities: [Wifi, Coffee, Utensils, Bath, Users],
            rating: 4.6,
            reviews: 156
        },
        {
            id: 6,
            name: 'Penthouse Sky Suite',
            category: 'luxury',
            price: 1200,
            originalPrice: 1400,
            image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Ultimate luxury experience with private rooftop and city skyline views',
            size: '200 sqm',
            guests: 8,
            beds: 4,
            bathrooms: 4,
            features: ['Private Rooftop', 'City Skyline', 'Private Pool', 'Chef Kitchen', 'Wine Cellar', 'Concierge'],
            amenities: [Wifi, Coffee, Utensils, Car, Eye, Bath],
            rating: 5.0,
            reviews: 43
        }
    ];

    const categories = [
        { id: 'all', label: 'All Rooms' },
        { id: 'standard', label: 'Standard' },
        { id: 'business', label: 'Business' },
        { id: 'suite', label: 'Suites' },
        { id: 'luxury', label: 'Luxury' },
        { id: 'family', label: 'Family' }
    ];

    const priceRanges = [
        { id: 'all', label: 'All Prices' },
        { id: 'under300', label: 'Under $300' },
        { id: '300-500', label: '$300 - $500' },
        { id: '500-800', label: '$500 - $800' },
        { id: 'over800', label: 'Over $800' }
    ];

    const filteredRooms = rooms.filter(room => {
        const categoryMatch = selectedCategory === 'all' || room.category === selectedCategory;

        let priceMatch = true;
        if (priceRange === 'under300') priceMatch = room.price < 300;
        else if (priceRange === '300-500') priceMatch = room.price >= 300 && room.price <= 500;
        else if (priceRange === '500-800') priceMatch = room.price >= 500 && room.price <= 800;
        else if (priceRange === 'over800') priceMatch = room.price > 800;

        return categoryMatch && priceMatch;
    });

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Luxury Rooms</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                    Choose from our carefully curated selection of rooms and suites,
                    each designed to provide the ultimate comfort and luxury experience.
                </p>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row gap-6 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">Filter by:</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <label htmlFor="category" className="sr-only">Category</label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.label}</option>
                            ))}
                        </select>
                        <label htmlFor="price-range" className="sr-only">Price Range</label>
                        <select
                            id="price-range"
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        >
                            {priceRanges.map(range => (
                                <option key={range.id} value={range.id}>{range.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Rooms */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
                    {filteredRooms.map((room) => (
                        <div
                            key={room.id}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        Save ${room.originalPrice - room.price}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-white text-sm">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{room.rating}</span>
                                    <span className="text-gray-300">({room.reviews})</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{room.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>

                                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>{room.guests} guests</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Bed className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>{room.beds} {room.beds === 1 ? 'bed' : 'beds'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <Bath className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span>{room.bathrooms} bath</span>
                                    </div>
                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{room.size}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {room.amenities.slice(0, 4).map((Amenity, i) => (
                                        <div key={`${room.id}-amenity-${i}`} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                            <Amenity className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        </div>
                                    ))}
                                    {room.amenities.length > 4 && (
                                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                                                +{room.amenities.length - 4}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${room.price}</span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">${room.originalPrice}</span>
                                        </div>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">per night</span>
                                    </div>
                                    <Link href="/booking">
                                        <a className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                            Book Now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredRooms.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No rooms found</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Try adjusting your filters to see more options.
                        </p>
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-gray-900 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">Need Help Choosing?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    Our concierge team is available 24/7 to help you find the perfect room for your stay.
                </p>
                <Link href="/contact">
                    <a className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Contact Our Concierge
                    </a>
                </Link>
            </section>
        </div>
    );
}
