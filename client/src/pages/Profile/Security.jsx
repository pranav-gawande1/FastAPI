import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import SideBarToggle from '../../components/Admin/SideBar/sideBarToggle';
import SideBar from '../../components/Admin/SideBar/SideBar';

const Security = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const { role } = useSelector((state) => state.auth);
    const [showPasswords, setShowPasswords] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [twoFactor, setTwoFactor] = useState(true);
    const [loginAlerts, setLoginAlerts] = useState(true);

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Password changed successfully!');
        setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
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

                                    <h1 className="text-4xl font-bold text-dark mb-8">Security Settings</h1>

                                    {/* Change Password Card */}
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Change Password</h2>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Current Password */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Current Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPasswords.current ? 'text' : 'password'}
                                                        name="currentPassword"
                                                        value={formData.currentPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Enter your current password"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => togglePasswordVisibility('current')}
                                                        className="absolute right-3 top-3 text-gray-500 hover:text-dark"
                                                    >
                                                        {showPasswords.current ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* New Password */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    New Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPasswords.new ? 'text' : 'password'}
                                                        name="newPassword"
                                                        value={formData.newPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Enter your new password"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => togglePasswordVisibility('new')}
                                                        className="absolute right-3 top-3 text-gray-500 hover:text-dark"
                                                    >
                                                        {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Confirm Password */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Confirm Password
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPasswords.confirm ? 'text' : 'password'}
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="Confirm your new password"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => togglePasswordVisibility('confirm')}
                                                        className="absolute right-3 top-3 text-gray-500 hover:text-dark"
                                                    >
                                                        {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-colors mt-6"
                                            >
                                                Save Password
                                            </button>
                                        </form>
                                    </div>

                                    {/* Security Toggles Card */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Two-Factor Authentication</h2>

                                        <div className="space-y-4">
                                            {/* Enable Two-Factor Authentication */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                                <div>
                                                    <p className="font-medium text-dark">Enable Two-Factor Authentication</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Add an extra layer of security to your account
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={twoFactor}
                                                        onChange={(e) => setTwoFactor(e.target.checked)}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${twoFactor ? 'bg-primary' : 'bg-gray-300'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${twoFactor ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>

                                            {/* Login Alerts */}
                                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                                <div>
                                                    <p className="font-medium text-dark">Login Alerts</p>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Get notified about new login attempts
                                                    </p>
                                                </div>
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={loginAlerts}
                                                        onChange={(e) => setLoginAlerts(e.target.checked)}
                                                        className="sr-only"
                                                    />
                                                    <div
                                                        className={`w-12 h-6 rounded-full transition-colors ${loginAlerts ? 'bg-primary' : 'bg-gray-300'
                                                            }`}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${loginAlerts ? 'translate-x-6' : 'translate-x-1'
                                                                } mt-0.5`}
                                                        />
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
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

export default Security;