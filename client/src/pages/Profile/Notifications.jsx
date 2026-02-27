import { useState } from 'react';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import { useSelector } from 'react-redux';
import SideBarToggle from '../../components/Admin/SideBar/sideBarToggle';
import SideBar from '../../components/Admin/SideBar/SideBar';

const Notifications = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const { role } = useSelector((state) => state.auth);
    const [preferences, setPreferences] = useState({
        orderUpdates: true,
        promoOffers: true,
        newsletter: false,
        smsNotifications: true,
    });

    const handleToggle = (key) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        alert('Notification preferences saved successfully!');
    };

    return (
        <>
            <Navbar />
            <div className='flex mt-16'>
                {role === "admin" && <SideBarToggle />}
                {isOpen && role === "admin" && <SideBar />}
                <div className='flex-1'>
                    <div className="max-w-[1200px] mx-auto p-4">
                        <div className="min-h-screen bg-gradient-to-l from-gray-200 to-white flex">
                            <ProfileMenu />
                            <div className="flex-1 flex items-center justify-center p-4">
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl hover:shadow-2xl transition-shadow duration-300">

                                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                        <h1 className="text-4xl font-bold text-dark mb-8">Notification Preferences</h1>

                                        <div className="space-y-4">
                                            {/* Order Updates */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-dark">Order Updates</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Get real-time updates about your orders
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer ml-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.orderUpdates}
                                                        onChange={() => handleToggle('orderUpdates')}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${preferences.orderUpdates ? 'bg-green-400' : 'bg-red-400'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${preferences.orderUpdates ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>

                                            {/* Promotional Offers */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-dark">Promotional Offers</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Receive special deals and discounts
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer ml-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.promoOffers}
                                                        onChange={() => handleToggle('promoOffers')}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${preferences.promoOffers ? 'bg-green-400' : 'bg-red-400'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${preferences.promoOffers ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>

                                            {/* Newsletter */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-dark">Newsletter</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Weekly newsletter with restaurant recommendations
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer ml-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.newsletter}
                                                        onChange={() => handleToggle('newsletter')}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${preferences.newsletter ? 'bg-green-400' : 'bg-red-400'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${preferences.newsletter ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>

                                            {/* SMS Notifications */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-dark">SMS Notifications</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Receive important updates via SMS
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer ml-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.smsNotifications}
                                                        onChange={() => handleToggle('smsNotifications')}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${preferences.smsNotifications ? 'bg-green-400' : 'bg-red-400'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${preferences.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            onClick={handleSave}
                                            className="w-full mt-8 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors"
                                        >
                                            Save Preferences
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Notifications;