import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location] = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Rooms', href: '/rooms' },
        { name: 'Book Now', href: '/booking' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4">
                {/* Top bar with contact info */}
                <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                            <Phone size={14} />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                            <Mail size={14} />
                            <span>info@luxuryhotel.com</span>
                        </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                        ✨ Book direct and save up to 20%
                    </div>
                </div>

                {/* Main navigation */}
                <nav className="flex items-center justify-between py-4">
                    <Link href="/">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">L</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">LuxuryStay</h1>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Premium Hotel Experience</p>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <span
                                    className={`font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location === item.href
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-200'
                                        }`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col space-y-3">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href}>
                                    <span
                                        className={`block py-2 px-3 rounded-md font-medium transition-colors ${location === item.href
                                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                                : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}