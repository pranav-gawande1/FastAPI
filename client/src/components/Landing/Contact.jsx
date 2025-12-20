import react from 'react';

const Contact = ({ContactUS}) => {
    return (
        <>
        <section id="ContactUS" className="scroll-mt-16">
            <div className='max-w-[1200px] mx-35 my-0 py-12 px-4 sm:px-6 lg:px-8'>
                <h2 className="mb-4 text-center text-[25.2px] font-bold text-[#1D3557]"> Contact Us</h2>
                <form className='max-w-[600px] my-0 mx-auto flex flex-col gap-4'>
                    <input type="text" placeholder="Your Name" className='p-3 border-2 rounded-xl border-solid border-[#ccc]'/>
                    <input type="email" placeholder="Your Email" className='p-3 border-2 rounded-xl border-solid border-[#ccc]'/>
                    <textarea type="text" placeholder="Subject" className='p-3 border-2 rounded-xl border-solid border-[#ccc]'></textarea>
                    <button className='bg-[#ff4d4d] py-[9.6px] px-[19.2px] rounded-full text-white mt-[16px] hover:bg-red-500'>Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
};

export default Contact;