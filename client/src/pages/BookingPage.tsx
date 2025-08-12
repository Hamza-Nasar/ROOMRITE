import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, Phone, Mail, CreditCard, Shield, CheckCircle } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    roomType: string;
    guests: number;
    specialRequests: string;
    checkIn: Date;
    checkOut: Date;
}

export default function BookingPage() {
    const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date(Date.now() + 86400000)); // Tomorrow
    const [currentStep, setCurrentStep] = useState(1);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm<BookingForm>();

    const roomTypes = [
        { id: 'classic', name: 'Classic Double Room', price: 180, originalPrice: 220 },
        { id: 'executive', name: 'Executive Business Room', price: 280, originalPrice: 320 },
        { id: 'family', name: 'Family Connecting Rooms', price: 320, originalPrice: 380 },
        { id: 'deluxe', name: 'Deluxe Ocean Suite', price: 450, originalPrice: 520 },
        { id: 'luxury', name: 'Luxury Presidential Suite', price: 850, originalPrice: 1000 },
        { id: 'penthouse', name: 'Penthouse Sky Suite', price: 1200, originalPrice: 1400 }
    ];

    const selectedRoomType = watch('roomType');
    const selectedRoom = roomTypes.find(room => room.id === selectedRoomType);

    const nights = checkInDate && checkOutDate
        ? Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
        : 1;

    const subtotal = selectedRoom ? selectedRoom.price * nights : 0;
    const savings = selectedRoom ? (selectedRoom.originalPrice - selectedRoom.price) * nights : 0;
    const taxes = subtotal * 0.12; // 12% tax
    const total = subtotal + taxes;

    const onSubmit = async (data: BookingForm) => {
        if (currentStep === 1) {
            setCurrentStep(2);
        } else {
            // Simulate booking process
            setTimeout(() => {
                setBookingConfirmed(true);
            }, 2000);
        }
    };

    if (bookingConfirmed) {
        return (
            <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your reservation has been confirmed. You'll receive a confirmation email shortly.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Confirmation Number</p>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">LUX-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <section className="bg-white dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
                        Book Your Stay
                    </h1>
                    <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Complete your reservation in just a few simple steps and get ready for an unforgettable experience.
                    </p>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="bg-white dark:bg-gray-800 py-8 border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}>
                                    1
                                </div>
                                <span className={`ml-3 font-medium ${currentStep >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    Booking Details
                                </span>
                            </div>
                            <div className={`w-20 h-1 rounded ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                                }`}></div>
                            <div className="flex items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}>
                                    2
                                </div>
                                <span className={`ml-3 font-medium ${currentStep >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    Payment
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Booking Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                {currentStep === 1 && (
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Booking Information</h2>

                                        {/* Guest Information */}
                                        <div className="space-y-6 mb-8">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Guest Information</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        First Name *
                                                    </label>
                                                    <input
                                                        {...register('firstName', { required: 'First name is required' })}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter your first name"
                                                    />
                                                    {errors.firstName && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Last Name *
                                                    </label>
                                                    <input
                                                        {...register('lastName', { required: 'Last name is required' })}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter your last name"
                                                    />
                                                    {errors.lastName && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        <Mail className="w-4 h-4 inline mr-1" />
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
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter your email"
                                                    />
                                                    {errors.email && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        <Phone className="w-4 h-4 inline mr-1" />
                                                        Phone Number *
                                                    </label>
                                                    <input
                                                        {...register('phone', { required: 'Phone number is required' })}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter your phone number"
                                                    />
                                                    {errors.phone && (
                                                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stay Details */}
                                        <div className="space-y-6 mb-8">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Details</h3>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        <Calendar className="w-4 h-4 inline mr-1" />
                                                        Check-in Date
                                                    </label>
                                                    <DatePicker
                                                        selected={checkInDate}
                                                        onChange={(date: Date | null) => setCheckInDate(date)}
                                                        minDate={new Date()}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        <Calendar className="w-4 h-4 inline mr-1" />
                                                        Check-out Date
                                                    </label>
                                                    <DatePicker
                                                        selected={checkOutDate}
                                                        onChange={(date: Date | null) => setCheckOutDate(date)}
                                                        minDate={checkInDate ? new Date(checkInDate.getTime() + 86400000) : new Date()}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        <Users className="w-4 h-4 inline mr-1" />
                                                        Guests
                                                    </label>
                                                    <select
                                                        {...register('guests', { required: 'Number of guests is required' })}
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    >
                                                        <option value="1">1 Guest</option>
                                                        <option value="2">2 Guests</option>
                                                        <option value="3">3 Guests</option>
                                                        <option value="4">4 Guests</option>
                                                        <option value="5">5 Guests</option>
                                                        <option value="6">6+ Guests</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Room Type *
                                                </label>
                                                <select
                                                    {...register('roomType', { required: 'Room type is required' })}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                >
                                                    <option value="">Select a room type</option>
                                                    {roomTypes.map(room => (
                                                        <option key={room.id} value={room.id}>
                                                            {room.name} - ${room.price}/night
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.roomType && (
                                                    <p className="text-red-500 text-sm mt-1">{errors.roomType.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Special Requests
                                                </label>
                                                <textarea
                                                    {...register('specialRequests')}
                                                    rows={4}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Any special requests or preferences (optional)"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Information</h2>

                                        <div className="space-y-6">
                                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                                <div className="flex items-center">
                                                    <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                                                    <span className="text-sm text-blue-800 dark:text-blue-200">
                                                        Your payment information is secured with 256-bit SSL encryption
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    <CreditCard className="w-4 h-4 inline mr-1" />
                                                    Card Number
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="col-span-2">
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        Expiry Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                        CVV
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="123"
                                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Cardholder Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Name as it appears on card"
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(1)}
                                                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-4 rounded-lg font-semibold text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                                            >
                                                Complete Booking
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Booking Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Booking Summary</h3>

                                {selectedRoom && (
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{selectedRoom.name}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {checkInDate?.toLocaleDateString()} - {checkOutDate?.toLocaleDateString()}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {nights} {nights === 1 ? 'night' : 'nights'}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Room rate</span>
                                                <span className="text-gray-900 dark:text-white">${selectedRoom.price} × {nights}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                                <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                                            </div>
                                            {savings > 0 && (
                                                <div className="flex justify-between text-green-600 dark:text-green-400">
                                                    <span>You save</span>
                                                    <span>-${savings.toFixed(2)}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Taxes & fees</span>
                                                <span className="text-gray-900 dark:text-white">${taxes.toFixed(2)}</span>
                                            </div>
                                            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                                                <div className="flex justify-between">
                                                    <span className="text-xl font-bold text-gray-900 dark:text-white">Total</span>
                                                    <span className="text-xl font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Included Benefits:</h5>
                                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                                        <li>• Free WiFi</li>
                                        <li>• 24/7 Room Service</li>
                                        <li>• Complimentary Breakfast</li>
                                        <li>• Access to Fitness Center</li>
                                        <li>• Free Cancellation (24h)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}