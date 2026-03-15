import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { toast } from "react-toastify";
import { addItem } from "../../shared/utils/stateUpdater";

const PizzaAddModal = ({ isOpen, onClose }) => {
    const { execute, data, status, error } = useManualFetch();
    const [pizzaName, setPizzaName] = useState("");
    const [pizzaDescription, setPizzaDescription] = useState("");
    const [pizzaPrice, setPizzaPrice] = useState("");
    const [pizzaImage, setPizzaImage] = useState("");
    const handleAddPizza = async () => {
        const formData = new FormData();

        formData.append("name", pizzaName);
        formData.append("description", pizzaDescription);
        formData.append("price", pizzaPrice);
        formData.append("image", pizzaImage);
        await execute(`/pizza/pizza`, "POST", formData
        );
    };

    useEffect(() => {
        if (status == "success" && data) {
            addItem(data?.pizza);
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
                    className="w-full px-4 py-2 rounded-md border border-gray-300 
    bg-white text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400
    transition duration-200"
                    onChange={(e) => setPizzaName(e.target.value)}
                    placeholder="Pizza Name"
                />

                <input
                    className="w-full px-4 py-2 rounded-md border border-gray-300 
    bg-white text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400
    transition duration-200"
                    onChange={(e) => setPizzaDescription(e.target.value)}
                    placeholder="Description"
                />

                <input
                    className="w-full px-4 py-2 rounded-md border border-gray-300 
    bg-white text-gray-800 placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400
    transition duration-200"
                    onChange={(e) => setPizzaPrice(e.target.value)}
                    placeholder="Price"
                />

                <input
                    className="w-full px-4 py-2 rounded-md border border-gray-300 
    bg-white text-gray-700 file:mr-4 file:py-2 file:px-4
    file:rounded-md file:border-0 file:text-sm
    file:font-medium file:bg-[#ff4d4d] file:text-white
    hover:file:bg-red-500
    focus:outline-none focus:ring-2 focus:ring-red-400
    transition duration-200"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPizzaImage(e.target.files[0])}
                />

                <button
                    onClick={handleAddPizza}
                    className="text-white bg-[#ff4d4d] px-3 py-1 rounded-lg hover:bg-red-500"
                >
                    {status === "loading" ? "Adding..." : "Add Pizza"}
                </button>
            </div>
        </Modal>
    );
};

export default PizzaAddModal;