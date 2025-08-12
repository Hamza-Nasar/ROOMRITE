import { useState } from 'react';
import { useForm } from 'react-hook-form';;
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Users,
    Heart,
    Car,
    Utensils,
    CheckCircle
} from 'lucide-react';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [messageSent, setMessageSent] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

    const onSubmit = async (data: ContactForm) => {
        // Simulate sending message
        console.log('Contact form data:', data);
        setTimeout(() => {
            setMessageSent(true);
            reset();
            setTimeout(() => setMessageSent(false), 5000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Visit Us',
            details: ['123 Luxury Avenue', 'Downtown District', 'New York, NY 10001'],
            color: 'text-blue-600 dark:text-blue-400'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Reservations)'],
            color: 'text-green-600 dark:text-green-400'
        },
        {
            icon: Mail,
            title: 'Email Us',
            details: ['info@luxuryhotel.com', 'reservations@luxuryhotel.com'],
            color: 'text-purple-600 dark:text-purple-400'
        },
        {
            icon: Clock,
            title: 'Hours',
            details: ['24/7 Front Desk', 'Concierge: 6 AM - 11 PM'],
            color: 'text-orange-600 dark:text-orange-400'
        }
    ];

    const departments = [
        {
            icon: Users,
            name: 'Guest Services',
            description: 'General inquiries and assistance',
            phone: '+1 (555) 123-4567',
            email: 'guest@luxuryhotel.com'
        },
        {
            icon: Car,
            name: 'Concierge',
            description: 'Tours, transportation, and recommendations',
            phone: '+1 (555) 123-4568',
            email: 'concierge@luxuryhotel.com'
        },
        {
            icon: Utensils,
            name: 'Dining Reservations',
            description: 'Restaurant bookings and private dining',
            phone: '+1 (555) 123-4569',
            email: 'dining@luxuryhotel.com'
        },
        {
            icon: Heart,
            name: 'Spa & Wellness',
            description: 'Spa treatments and fitness center',
            phone: '+1 (555) 123-4570',
            email: 'spa@luxuryhotel.com'
        }
    ];

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        We're here to help make your stay exceptional. Reach out to us anytime
                        for assistance, reservations, or any special requests.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <div className="flex items-center mb-6">
                            <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
                        </div>

                        {messageSent && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                                    <span className="text-green-800 dark:text-green-200 font-medium">
                                        Message sent successfully! We'll get back to you within 24 hours.
                                    </span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        {...register('phone')}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <select
                                    {...register('subject', { required: 'Subject is required' })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="reservation">Reservation Inquiry</option>
                                    <option value="existing">Existing Booking</option>
                                    <option value="dining">Dining Reservations</option>
                                    <option value="spa">Spa & Wellness</option>
                                    <option value="events">Events & Meetings</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    {...register('message', { required: 'Message is required' })}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Please provide details about your inquiry..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Quick Contact */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${item.color.includes('blue') ? 'bg-blue-100 dark:bg-blue-900/30' :
                                                item.color.includes('green') ? 'bg-green-100 dark:bg-green-900/30' :
                                                    item.color.includes('purple') ? 'bg-purple-100 dark:bg-purple-900/30' :
                                                        'bg-orange-100 dark:bg-orange-900/30'
                                            }`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                            {item.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Department Contacts */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Department Contacts</h2>
                            <div className="space-y-6">
                                {departments.map((dept, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                                            <dept.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{dept.name}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{dept.description}</p>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                                                <a href={`tel:${dept.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                    {dept.phone}
                                                </a>
                                                <span className="hidden sm:inline text-gray-400">•</span>
                                                <a href={`mailto:${dept.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                    {dept.email}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Location</h2>
                            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-600 dark:text-gray-300 mb-2">Interactive Map</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        123 Luxury Avenue, Downtown District<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                                    View on Google Maps
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Quick answers to common questions about our hotel and services.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: 'What time is check-in and check-out?',
                                answer: 'Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.'
                            },
                            {
                                question: 'Do you offer airport transportation?',
                                answer: 'Yes, we provide complimentary airport shuttle service. Please contact our concierge to arrange pickup times.'
                            },
                            {
                                question: 'Is parking available?',
                                answer: 'We offer valet parking service for $30 per night. Self-parking is available at nearby facilities for $20 per night.'
                            },
                            {
                                question: 'Are pets allowed?',
                                answer: 'We welcome well-behaved pets in designated pet-friendly rooms for an additional fee of $75 per stay.'
                            },
                            {
                                question: 'Do you have a cancellation policy?',
                                answer: 'Free cancellation is available up to 24 hours before your check-in date. Late cancellations may incur charges.'
                            },
                            {
                                question: 'Is WiFi free throughout the hotel?',
                                answer: 'Yes, complimentary high-speed WiFi is available throughout the hotel, including all guest rooms and public areas.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}