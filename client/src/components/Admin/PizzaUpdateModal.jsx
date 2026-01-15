import { toast } from "react-toastify";
import useManualFetch from "../../shared/hooks/useManualFetch";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const PizzaUpdateModel = ({ pizza, isOpen, onClose, actionType, onPizzaUpdated }) => {

    // console.log("Link ", link);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const { execute, data, status, error } = useManualFetch();
    useEffect(() => {
        if (actionType === "edit" && pizza) {
            setName(pizza.name || "");
            setDescription(pizza.description || "");
            setPrice(pizza.price || "");
        }
    }, [actionType, pizza]);

    useEffect(() => {
        if (status == "success" && data) {
            // onPizzaUpdated(data);
            toast.success("Pizza updated successfully!");
            // onClose();
        }
    }, [status, data]);

    useEffect(() => {
        if (error) {
            toast.error("Something went wrong!");
        }
    }, [error]);


    if (!isOpen || !pizza) return null;
    const link = `${pizza.imageUrl}`;

    // console.log("Pizzas: ", pizza);

    const handleEdit = async () => {
        if (!pizza) return;

        const updateData = {};

        if (name !== pizza.name) updateData.name = name;
        if (price !== pizza.price) updateData.price = price;
        if (description !== pizza.description) updateData.description = description;

        if (Object.keys(updateData).length === 0) {
            toast.info("No changes made");
            return;
        }
        await execute(`/pizza/pizza/${pizza._id}`, "PATCH", updateData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={actionType === "edit" ? "Update Pizza" : "Pizza"}
        >
            {actionType === "edit" ? (
                <div className="flex flex-col gap-5 ">

                    <img className="p-8 h-full w-full lg:h-100 lg:w-100 " src={link} alt="Pizza" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={name} onChange={e => setName(e.target.value)} placeholder="Pizza name" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
                    <input className="input w-full py-1 px-3 focus:outline-none border 
                                    border-gray-500 rounded-sm text-gray-900
                                    placeholder-gray-500 bg-gray-300" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />

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