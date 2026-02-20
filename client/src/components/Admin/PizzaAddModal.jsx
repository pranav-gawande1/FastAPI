import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { toast } from "react-toastify";

const PizzaAddModal = ({ isOpen, onClose }) => {
    const { execute, data, status, error } = useManualFetch();
    const [pizzaName, setPizzaName] = useState("");
    const [pizzaDescription, setPizzaDescription] = useState("");
    const [pizzaPrice, setPizzaPrice] = useState("");
    const [pizzaImageUrl, setPizzaImageUrl] = useState("");
    const handleAddPizza = async () => {
        await execute(`/pizza/pizza`, "POST", {
            name: pizzaName,
            description: pizzaDescription,
            price: pizzaPrice,
            imageUrl: pizzaImageUrl
        }
        );
    };

    useEffect(() => {
        if (status == "success" && data) {
            toast.success("Pizza Added successfully!!");
            setTimeout(3000);
            toast.info("Refresh page once!!");
        } else if (status === "error") {
            toast.error("Error while adding pizza!!");
        }
    }, [status, data, error]);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={"Add Pizza"}>
            <div className="flex flex-col gap-3">
                <input
                    className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                    onChange={(e) => setPizzaName(e.target.value)}
                    placeholder="Name"
                />

                <input
                    className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                    onChange={(e) => setPizzaDescription(e.target.value)}
                    placeholder="Description"
                />

                <input
                    className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                    onChange={(e) => setPizzaPrice(e.target.value)}
                    placeholder="Price"
                />

                <input
                    className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300"
                    onChange={(e) => setPizzaImageUrl(e.target.value)}
                    placeholder="Image URL (upload option will available shortly)"
                />

                <button
                    onClick={handleAddPizza}
                    // disabled={loading}
                    className="text-white bg-[#ff4d4d] px-3 py-1 rounded-lg hover:bg-red-500"
                >
                    {status === "loading" ? "Adding..." : "Add Pizza"}
                </button>
            </div>
        </Modal>
    );
};

export default PizzaAddModal;