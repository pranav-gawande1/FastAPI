import React from "react";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer id="Footer" className="bg-black py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex my-0 mx-35 justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-[#ff4d4d] mb-4 flex items-center">Pizza Paradise</h3>
                        <p className="text-white mb-4">Ready to serve you delicious pizzas!</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg">Order Now</h3>
                        <ul className="text-white text-sm">
                            <li className="hover:text-[#ff4d4d]"><a href="#">Pizzas</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="#">Drinks</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="#">Desserts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg">About</h3>
                        <ul className="text-white text-sm">
                            <li className="hover:text-[#ff4d4d]"><a href="/about">About</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="/about">Establishment</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="/about">Career</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg">Privacy Policy</h3>
                        <ul className="text-white text-sm">
                            <li className="hover:text-[#ff4d4d]"><a href="/pizzaparadise/policies">Policies</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="/pizzaparadise/policies">Terms of Service</a></li>
                            <li className="hover:text-[#ff4d4d]"><a href="/pizzaparadise/policies">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex my-10 mx-35 justify-between items-center">
                    <div className="flex flex-row gap-4">
                        <h1 className="text-white flex items-center">Help us in serving you better</h1>
                        <a className="text-black bg-white rounded-[10px] p-2" href="/account/login"><span>Give Feedback</span></a>
                    </div>
                    <div>
                        <h3 className="text-center text-white text-lg">Follow us</h3>
                        <div className="flex space-x-4">
                            <a href="#"><FaFacebookF className="text-white text-2xl mt-2 hover:text-[#ff4d4d]" /></a>
                            <a href="#"><FaInstagram className="text-white text-2xl mt-2 hover:text-[#ff4d4d]" /></a>
                            <a href="#"><FaTwitter className="text-white text-2xl mt-2 hover:text-[#ff4d4d]" /></a>
                            <a href="#"><FaYoutube className="text-white text-2xl mt-2 hover:text-[#ff4d4d]" /></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mx-35">
                    <p className="text-gray-400 text-sm text-center">Serving hot, fresh pizzas made with premium ingredients and authentic flavors.
                        Crafted with passion, oven-baked to perfection for bold taste in every bite.
                        Your neighborhood destination where great pizza brings people together.</p>
                    <p className="text-gray-400 text-sm text-center mt-4">@Pizza Paradise India 2025. All Right Reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;