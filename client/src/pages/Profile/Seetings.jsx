import { useState } from 'react';
import { Sun, Moon, AlertCircle } from 'lucide-react';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import { useSelector } from 'react-redux';
import SideBarToggle from '../../components/Admin/SideBar/sideBarToggle';
import SideBar from '../../components/Admin/SideBar/SideBar';

const Settings = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const { role } = useSelector((state) => state.auth);
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleLogout = () => {
        alert('You have been logged out successfully!');
    };

    const handleDeleteAccount = () => {
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        alert('Account deleted successfully. Goodbye!');
        setShowDeleteConfirm(false);
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
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


                                    {/* Theme Settings */}
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                        <h1 className="text-4xl font-bold text-dark mb-8">Account Settings</h1>
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Appearance</h2>

                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-3">
                                                Theme
                                            </label>
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => setTheme('light')}
                                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${theme === 'light'
                                                        ? 'bg-green-400 text-gray-800'
                                                        : 'bg-red-400 text-black hover:bg-red-300'
                                                        }`}
                                                >
                                                    <Sun size={20} />
                                                    Light
                                                </button>
                                                <button
                                                    onClick={() => setTheme('dark')}
                                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${theme === 'dark'
                                                        ? 'bg-green-400 text-gray-800'
                                                        : 'bg-red-400 text-black hover:bg-red-300'
                                                        }`}
                                                >
                                                    <Moon size={20} />
                                                    Dark
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Language Settings */}
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Language</h2>

                                        <div>
                                            <label className="block text-sm font-medium text-dark mb-3">
                                                Select Language
                                            </label>
                                            <select
                                                value={language}
                                                onChange={(e) => setLanguage(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
                                            >
                                                <option value="en">English</option>
                                                <option value="es">Spanish (Español)</option>
                                                <option value="fr">French (Français)</option>
                                                <option value="de">German (Deutsch)</option>
                                                <option value="zh">Chinese (中文)</option>
                                                <option value="ja">Japanese (日本語)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Account Actions */}
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Account</h2>

                                        <div className="space-y-3">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full bg-gray-300 text-black font-semibold py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                                            >
                                                Logout
                                            </button>

                                            <button
                                                onClick={handleDeleteAccount}
                                                className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors"
                                            >
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>

                                    {/* Delete Confirmation Modal */}
                                    {showDeleteConfirm && (
                                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                                            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <AlertCircle size={24} className="text-red-600" />
                                                    <h3 className="text-2xl font-bold text-dark">Delete Account?</h3>
                                                </div>

                                                <p className="text-gray-600 mb-6">
                                                    This action cannot be undone. All your data, orders, and preferences will be permanently deleted.
                                                </p>

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={cancelDelete}
                                                        className="flex-1 bg-gray-200 text-dark font-semibold py-2 rounded-lg hover:bg-gray-300 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={confirmDelete}
                                                        className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Save Settings Button */}
                                    <button className="w-full bg-gray-500 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors">
                                        Save Settings
                                    </button>
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

export default Settings;