import react from 'react';
import heroImage from '../../assets/hero.png';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { updatesideBarStatus } from '../../shared/slices/sharedslice';

const Hero = ({ Hero }) => {

    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { isHovered, isOpen } = useSelector((state) => state.sideBarStatus);
    const openSideBar = () => {
        dispatch(updatesideBarStatus({
            isOpen: !isOpen,
            // isHovered: true
        }))
    }
    const closeSideBar = () => {
        dispatch(updatesideBarStatus({
            isOpen: false,
            // isHovered: true
        }))
    }
    const makeHovered = () => {
        dispatch(updatesideBarStatus({ isHovered: true }))
    }
    const makeUnHovered = () => {
        dispatch(updatesideBarStatus({ isHovered: false }))
    }
    return (
        <>
            <section id="Hero" className="scroll-mt-16 h-[43vh] flex items-center justify-center relative text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}
                onMouseEnter={() => makeHovered()}
                onMouseLeave={() => makeUnHovered()}
            // onMouseLeave={() => dispatch(updatesideBarStatus({ isHovered: false }))}
            >
                {isHovered && !isOpen && <button onClick={() => openSideBar()} className="absolute top-4 left-4 z-10 text-white">
                    <FaChevronRight />
                </button>}
                {isOpen && <button onClick={() => closeSideBar()} className="absolute top-4 left-4 z-10 text-white">
                    <FaChevronLeft />
                </button>}
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