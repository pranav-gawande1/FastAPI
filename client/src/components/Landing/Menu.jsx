import react from 'react';
import PepperoniImg from '../../assets/Pepperoni_Pizza.jpeg'
import MargheritaImg from '../../assets/Margherita_Pizza.jpg'
import VeggieImg from '../../assets/Veggie_Delight.png'

const Menu = ({Menu}) => {
    return (
        <>
            <section id="Menu" className="scroll-mt-16">
                <div className='max-w-[1200px] mx-35 my-0 py-12 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-center text-[25.2px] font-bold text-[#1D3557] mb-4'>Our Pizzas</h1>
                    <div className='grid grid-cols-3 grid-rows-1 gap-8'>
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] shadow-2xl transition duration-300]'>
                            <img src={PepperoniImg} className='w-100 h-[200px] object-fit' />
                            <div className='p-4'>
                                <h4 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Pepperoni Pizza</h4>
                                <p className='text-[#1D3557] mb-8'>Crispy crust, mozzarella cheese, and spicy pepperoni.</p>
                                <p className='text-[#1D3557] mt-auto'>₹100</p>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] shadow-2xl transition duration-300]'>
                            <img src={MargheritaImg} className='w-100 h-[200px] object-fit' />
                            <div className='p-4'>
                                <h4 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Margherita Pizza</h4>
                                <p className='text-[#1D3557] mb-8'>Classic with fresh tomatoes, basil, and mozzarella.</p>
                                <p className='text-[#1D3557] mt-auto' >₹100</p>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] shadow-2xl transition duration-300]'>
                            <img src={VeggieImg} className='w-100 h-[200px] object-fit' />
                            <div className='p-4'>
                                <h4 className="text-[19.2px] mb-[8px] font-bold text-[#1D3557]">Veggie Delight</h4>
                                <p className='text-[#1D3557] mb-8'>Loaded with fresh vegetables and cheese.</p>
                                <p className='text-[#1D3557] mt-auto'>₹100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;