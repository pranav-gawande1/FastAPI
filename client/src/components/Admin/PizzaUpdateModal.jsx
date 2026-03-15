import { toast } from "react-toastify";
import useManualFetch from "../../shared/hooks/useManualFetch";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { updateItem } from "../../shared/utils/stateUpdater";

const PizzaUpdateModel = ({ pizza, isOpen, onClose, actionType, setpizzaData }) => {

    // console.log("Link ", link);
    // const [name, setName] = useState("");
    const [pizzaName, setPizzaName] = useState("");
    const [pizzaDescription, setPizzaDescription] = useState("");
    const [pizzaPrice, setPizzaPrice] = useState("");
    const [pizzaImage, setPizzaImage] = useState(null);

    const { execute, data, status, error } = useManualFetch();
    useEffect(() => {
        if (actionType === "edit" && pizza) {
            setPizzaName(pizza.name || "");
            setPizzaDescription(pizza.description || "");
            setPizzaPrice(pizza.price || "");
        }
    }, [actionType, pizza]);

    const handleEdit = async () => {
        if (!pizza) return;

        const isChanged =
            pizzaName !== pizza.name ||
            pizzaDescription !== pizza.description ||
            Number(pizzaPrice) !== pizza.price ||
            pizzaImage !== null;

        if (!isChanged) {
            toast.info("No changes made");
            return;
        }
        console.log("status", isChanged);

        const updatedformData = new FormData();

        updatedformData.append("name", pizzaName);
        updatedformData.append("description", pizzaDescription);
        updatedformData.append("price", pizzaPrice);
        if (pizzaImage) {
            updatedformData.append("image", pizzaImage);
        }
        await execute(`/pizza/pizza/${pizza._id}`, "PATCH", updatedformData);
    };

    useEffect(() => {
        if (status == "success" && data) {
            updateItem(setpizzaData, data?.pizzatoUpdate);
            toast.success("Pizza updated successfully!");
            onClose();
        }
    }, [status, data]);

    useEffect(() => {
        if (error) {
            toast.error("Something went wrong!");
        }
    }, [error]);


    if (!isOpen || !pizza) return null;
    const link = `${pizza.imageUrl}`;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={actionType === "edit" ? "Update Pizza" : "Pizza"}
        >
            {actionType === "edit" ? (
                <div className="flex flex-col gap-5 ">

                    <img className="p-8 h-full w-full lg:h-100 lg:w-100 " src={pizzaImage ? URL.createObjectURL(pizzaImage) : pizza.imageUrl} alt="Pizza" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={pizzaName} onChange={e => setPizzaName(e.target.value)} placeholder="Pizza name" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={pizzaDescription} onChange={e => setPizzaDescription(e.target.value)} placeholder="Description" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={pizzaPrice} onChange={e => setPizzaPrice(e.target.value)} placeholder="Price" type="number" />

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

                    <button onClick={handleEdit} className="text-white bg-[#ff4d4d] px-3 py-1 rounded-lg hover:bg-red-500">
                        {status === "loading" ? "Updating..." : "Update"}
                    </button>
                </div>
            ) : (
                <div className="flex p-4 flex-col justify-center mx-auto bg-gray-200 max-w-auto rounded-sm hover:-translate-y-1 hover:shadow-2xl">
                    <img className="p-8 h-full w-full lg:h-100 lg:w-100 " src={link} alt="Pizza" />
                    <div className="p-8">
                        <h4 className="mt-4 font-bold">{pizza.name}</h4>
                        <p className="mt-4">{pizza.description}</p>
                        <p className="mt-4">{pizza.price}</p>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default PizzaUpdateModel;