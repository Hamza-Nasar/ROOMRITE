import { Link } from 'wouter';
import {
    Star,
    Wifi,
    Car,
    Coffee,
    Utensils,
    Dumbbell,
    Waves,
    Shield,
    Clock,
    Award,
    Users,
    Heart
} from 'lucide-react';

export default function HomePage() {
    const features = [
        { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
        { icon: Car, title: 'Valet Parking', description: 'Complimentary valet service available 24/7' },
        { icon: Coffee, title: 'Room Service', description: '24-hour room service for your convenience' },
        { icon: Utensils, title: 'Fine Dining', description: 'Award-winning restaurant with world-class cuisine' },
        { icon: Dumbbell, title: 'Fitness Center', description: 'State-of-the-art gym equipment and personal trainers' },
        { icon: Waves, title: 'Spa & Pool', description: 'Relaxing spa treatments and rooftop pool' },
    ];

    const stats = [
        { icon: Award, value: '50+', label: 'Awards Won' },
        { icon: Users, value: '10k+', label: 'Happy Guests' },
        { icon: Heart, value: '98%', label: 'Satisfaction Rate' },
        { icon: Shield, value: '24/7', label: 'Security' },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'New York',
            rating: 5,
            comment: 'Absolutely stunning hotel! The service was impeccable and the views were breathtaking. Will definitely be back.',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b492?w=64&h=64&fit=crop&crop=face'
        },
        {
            name: 'Michael Chen',
            location: 'San Francisco',
            rating: 5,
            comment: 'Perfect for business trips. The amenities are top-notch and the location is ideal. Highly recommend!',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'
        },
        {
            name: 'Emily Rodriguez',
            location: 'Miami',
            rating: 5,
            comment: 'Our honeymoon here was magical. The staff went above and beyond to make our stay unforgettable.',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
                    }}
                >
                    <div className="hero-overlay absolute inset-0"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Experience
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Luxury Redefined
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Discover unparalleled comfort and elegance in the heart of the city.
                        Your perfect escape awaits.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/rooms">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Explore Rooms
                            </button>
                        </Link>
                        <Link href="/booking">
                            <button className="glass-effect text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            World-Class Amenities
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Experience the finest in luxury hospitality with our carefully curated selection of premium amenities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
                            >
                                <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-lg opacity-90">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            What Our Guests Say
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our valued guests have to say about their experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{testimonial.location}</p>
                                    </div>
                                </div>
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                        Ready for Your Perfect Stay?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                        Book your room today and experience the pinnacle of luxury hospitality.
                        Special rates available for direct bookings.
                    </p>
                    <Link href="/booking">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Book Your Stay Now
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}