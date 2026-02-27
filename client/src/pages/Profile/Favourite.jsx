import { useState } from 'react';
import { Heart } from 'lucide-react';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import SideBarToggle from '../../components/Admin/SideBar/sideBarToggle';
import SideBar from '../../components/Admin/SideBar/SideBar';

const Favorites = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const { role } = useSelector((state) => state.auth);
    const [favorites, setFavorites] = useState([
        {
            id: 1,
            name: 'Margherita Pizza',
            price: '₹12.99',
            image: 'bg-gradient-to-br from-orange-300 to-orange-400',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            price: '₹8.99',
            image: 'bg-gradient-to-br from-green-300 to-green-400',
        },
        {
            id: 4,
            name: 'Sushi Roll Mix',
            price: '₹15.99',
            image: 'bg-gradient-to-br from-red-300 to-red-400',
        },
        {
            id: 5,
            name: 'Spicy Thai Curry',
            price: '₹11.99',
            image: 'bg-gradient-to-br from-yellow-300 to-yellow-400',
        },
        {
            id: 6,
            name: 'Chocolate Cake',
            price: '₹6.99',
            image: 'bg-gradient-to-br from-purple-300 to-purple-400',
        },
    ]);

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
    };

    return (
        <>
            <Navbar />
            <div className='flex mt-16'>
                {role === "admin" && <SideBarToggle />}
                {isOpen && role === "admin" && <SideBar />}
                <div className='flex-1'>
                    <div className="max-w-[1200px] mx-auto p-4 ">
                        <div className="min-h-screen bg-gradient-to-l from-gray-200 to-white flex">
                            <ProfileMenu />
                            <div className="flex-1 flex items-center justify-center p-4">
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-2xl hover:shadow-2xl transition-shadow duration-300">
                                    <h1 className="text-4xl font-bold text-dark mb-8">Your Favorites</h1>
                                    {favorites.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {favorites.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                                                >
                                                    {/* Image Placeholder */}
                                                    <div className={`${item.image} h-40 flex items-center justify-center`}>
                                                        <span className="text-white text-4xl">🍽️</span>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-4">
                                                        <h3 className="text-lg font-semibold text-dark">{item.name}</h3>
                                                        <p className="text-primary font-bold text-xl mt-2">{item.price}</p>

                                                        <button
                                                            onClick={() => removeFavorite(item.id)}
                                                            className="w-full mt-4 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold py-2 rounded-lg hover:bg-red-100 transition-colors"
                                                        >
                                                            <Heart size={18} fill="currentColor" />
                                                            Remove from Favorites
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl mx-auto">
                                            <div className="mb-4 text-6xl">🍕</div>
                                            <h2 className="text-2xl font-semibold text-dark mb-2">No Favorites Yet</h2>
                                            <p className="text-gray-600 mb-6">
                                                Start adding your favorite meals to quickly order them later!
                                            </p>
                                            <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
                                                Browse Menu
                                            </button>
                                        </div>
                                    )}
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

export default Favorites;