import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/Landing/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import { useSelector } from 'react-redux';
import SideBarToggle from '../../components/Admin/SideBar/sideBarToggle';
import SideBar from '../../components/Admin/SideBar/SideBar';

const Support = () => {
    const { isOpen } = useSelector((state) => state.sideBarStatus);
    const { role } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [openFaq, setOpenFaq] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: 'How to track my order?',
            answer:
                'You can track your order in real-time through the "Orders" section in your dashboard. You will also receive SMS and email notifications at each stage of delivery.',
        },
        {
            id: 2,
            question: 'How to cancel order?',
            answer:
                'To cancel an order, go to your active orders and click the cancel button. You can only cancel orders that have not been prepared yet. Cancellation refunds are processed within 24 hours.',
        },
        {
            id: 3,
            question: 'What is your refund policy?',
            answer:
                'We offer full refunds for orders canceled before the restaurant starts preparation. If there are quality issues, we offer replacements or refunds within 24 hours of delivery. Contact our support team for assistance.',
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! Your message has been sent to our support team.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
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
                                    {/* Contact Form */}
                                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                        <h1 className="text-4xl font-bold text-dark mb-8">Support Center</h1>
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Get in Touch</h2>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Your full name"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="your.email@example.com"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                />
                                            </div>

                                            {/* Subject */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="How can we help?"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="block text-sm font-medium text-dark mb-2">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Describe your issue..."
                                                    rows="6"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-[#ff4d4d] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    </div>

                                    {/* FAQ Section */}
                                    <div className="bg-white rounded-lg shadow-md p-6">
                                        <h2 className="text-2xl font-semibold text-dark mb-6">Frequently Asked Questions</h2>

                                        <div className="space-y-3">
                                            {faqItems.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="border border-gray-200 rounded-lg overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleFaq(item.id)}
                                                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                                                    >
                                                        <span className="font-semibold text-dark">{item.question}</span>
                                                        <div className="text-primary">
                                                            {openFaq === item.id ? (
                                                                <ChevronUp size={20} />
                                                            ) : (
                                                                <ChevronDown size={20} />
                                                            )}
                                                        </div>
                                                    </button>

                                                    {openFaq === item.id && (
                                                        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                                                            <p className="text-gray-700">{item.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
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

export default Support;