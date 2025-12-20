import react from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import TruckImg from '../../assets/delivery.png'
import Ingredients from '../../assets/ingredients.png'
import Oven from '../../assets/freshlybaked.png'

const About = ({AboutUs}) => {
    return (
        <>
            <section id="AboutUs" className="scroll-mt-16">
                <div className="max-w-[1200px] mx-35 my-0 py-12 px-4 sm:px-6 lg:px-8 m-4">
                    <h2 className="text-center text-[25.2px] font-bold text-[#1D3557]">Why Choose Us</h2>
                    <div className="grid grid-cols-3 grid-rows-1 gap-8">
                        <div className="p-8 text-center shadow-xl hover:translate-y-[-5px] shadow-2xl transition duration-300]">
                            <img src={Oven} alt="Oven Icon" className="w-[60px] mb-[16px]"/>
                            <h3 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Freshly Baked</h3>
                            <p className='text-[#1D3557]'>Our pizzas are baked to perfection in stone ovens.</p>
                        </div>
                        <div className="p-8 text-center shadow-xl hover:translate-y-[-5px] transition duration-300]">
                            <img src={Ingredients} alt="Ingredients Icon" className="w-[60px] mb-[16px]"/>
                            <h3 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Quality Ingredients</h3>
                            <p className='text-[#1D3557]'>We use only the freshest ingredients sourced locally.</p>
                        </div>
                        <div className="p-8 text-center shadow-xl hover:translate-y-[-5px] transition duration-300]">
                            <img src={TruckImg} alt="Delivery Icon" className="w-[60px] mb-[16px]"/>
                            <h3 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Fast Delivery</h3>
                            <p className='text-[#1D3557]'>Hot and fresh delivered straight to your door.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;