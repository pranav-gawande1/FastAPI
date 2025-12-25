import react from 'react';
import PepperoniImg from '../../assets/Pepperoni_Pizza.jpeg'
import MargheritaImg from '../../assets/Margherita_Pizza.jpg'
import VeggieImg from '../../assets/Veggie_Delight.png'

const Menu = ({Menu}) => {
    return (
        <>
            <section id="Menu" className="scroll-mt-16">
                <div className='max-w-[1200px] mx-auto my-0 py-12 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#1D3557] mb-4'>Our Pizzas</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'> {/*grid-cols-1 for mobile, sm:grid-cols-2 for small screens lg:grid-cols-3 for large screens*/}
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-300]'>
                            <img src={PepperoniImg} className='w-full h-48 sm:h-56 lg:h-64 object-fit' />
                            <div className='p-4'>
                                <h4 className="text-base sm:text-lg mb-[8px] font-bold text-[#1D3557]">Pepperoni Pizza</h4>
                                <p className='text-sm sm:text-base text-[#1D3557] mb-8'>Crispy crust, mozzarella cheese, and spicy pepperoni.</p>
                                <p className='text-[#1D3557] mt-auto'>₹100</p>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-300]'>
                            <img src={MargheritaImg} className='w-full h-48 sm:h-56 lg:h-64 object-fit' />
                            <div className='p-4'>
                                <h4 className="text-base sm:text-lg mb-[8px] font-bold text-[#1D3557]">Margherita Pizza</h4>
                                <p className='text-sm sm:text-base text-[#1D3557] mb-8'>Classic with fresh tomatoes, basil, and mozzarella.</p>
                                <p className='text-[#1D3557] mt-auto' >₹100</p>
                            </div>
                        </div>
                        <div className='shadow-2xl rounded-lg overflow-hidden hover:translate-y-[-5px] transition duration-300]'>
                            <img src={VeggieImg} className='w-full h-48 sm:h-56 lg:h-64 object-fit' />
                            <div className='p-4'>
                                <h4 className="text-base sm:text-lg mb-[8px] font-bold text-[#1D3557]">Veggie Delight</h4>
                                <p className='text-sm sm:text-base text-[#1D3557] mb-8'>Loaded with fresh vegetables and cheese.</p>
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