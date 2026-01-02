import react from 'react';
import heroImage from '../../assets/hero.png';
import { useSelector } from 'react-redux';

const Hero = ({ Hero }) => {

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    return (
        <>
            <section id="Hero" className="scroll-mt-16 h-[43vh] flex items-center justify-center relative text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className='absolute inset-0 bg-black/50'></div>
                <div className="relative max-w-[1200px] z-1 mb-[64px]">
                    <h1 className="text-white text-4xl font-[700] mb-[16px]">Welcome to Pizza Paradise</h1>
                    <p className="text-white text-lg mb-[16px]">Delicious, fresh, and made just for you. Taste the difference!</p>
                    {!isAuthenticated ? (
                        <a href="/" className="bg-[#ff4d4d] py-[9.6px] px-[19.2px] rounded-full text-white mt-[16px] hover:bg-red-500">Explore Menu</a>
                    ) : (
                        <a href="/home" className="bg-[#ff4d4d] py-[9.6px] px-[19.2px] rounded-full text-white mt-[16px] hover:bg-red-500">Welcome Back, {user}</a>
                    )
                    }
                </div>
            </section>
        </>
    );
};

export default Hero;