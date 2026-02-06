import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";

const PizzaCardAdmin = ({ pizza , onEdit, onView, onDelete}) => {
    const [IsMenuOpen, setisMenuOpen] = useState(false);
    const link = `${pizza.imageUrl}`;
    return (
        <>
            <tr className="hover:translate-y-1 hover:shadow-xl bg-white" 
            >
                <td className="px-6 py-4">
                    <div className="w-40 h-40 flex item-centerjustify-center">
                        <img src={link} className="w-32 h-32" />
                    </div>
                </td>
                <td className="px-6 py-4">
                    <p className="text-sm">{pizza.name}</p>
                </td>
                <td>
                    <p className="inline-block px-3 py-1 text-xs font-medium ">{pizza.description}</p>
                </td>
                <td className="px-6 py-4">
                    <p className="inline-block px-3 py-1 text-xs font-medium bg-gray-200 rounded-full">₹{pizza.price}</p>
                    <p>Available Sizes</p>
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => setisMenuOpen(!IsMenuOpen)}>
                        <FaEllipsisV />
                    </button>
                    {IsMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48
                        bg-gray-400 rounded-lg shadow-xl border border-gray-700 z-10">
                            <button onClick={() => onEdit(pizza)}
                                className="block text-gray-200 
                            w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:rounded-lg">Edit Pizza</button>
                            <button onClick={() => onView(pizza)}
                            className="block text-gray-200 
                            w-full text-left px-4 py-2 text-sm hover:bg-gray-800">View Pizza</button>
                            <button onClick={() => onDelete(pizza._id)}
                            className="block text-red-700 
                            w-full text-left px-4 py-2 text-sm hover:bg-gray-800 hover:rounded-lg">Delete Pizza</button>
                        </div>
                    )}
                </td>
            </tr>
        </>
    );
};

export default PizzaCardAdmin;