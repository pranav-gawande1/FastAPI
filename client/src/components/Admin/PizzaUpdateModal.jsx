import Modal from "../Modal/Modal";
import { useState } from "react";

const PizzaUpdateModel = ({ pizza, isOpen, onClose, onSuccess, actionType }) => {
    const [name, setName] = useState(pizza?.name);
    const [description, setDescription] = useState(pizza?.description);
    const [price, setPrice] = useState(pizza?.price);
    if (!isOpen || !pizza) return null;
    const link = `${pizza.imageUrl}`;
    if (actionType === "edit") {
        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose} title="Update Pizza">
                    <div className="flex flex-col gap-3">
                        <input
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Pizza name"
                        />

                        <input
                            className="input mt-3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Description"
                        />

                        <input
                            className="input mt-3"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price"
                        />

                        <button
                            // onClick={handleUpdate}
                            // disabled={loading}
                            className="btn-primary w-full mt-4"
                        >
                            {/* {loading ? "Updating..." : "Update"} */}
                            Update
                        </button>
                    </div>
                </Modal>
            </>
        );
    } else if (actionType === "view") {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="Pizza">
                <div className="flex p-4 flex-col justify-center mx-auto bg-gray-200 max-w-auto rounded-sm hover:-translate-y-1 hover:shadow-2xl">
                <img className="p-8 h-full w-full lg:h-100 lg:w-100 " src={link} alt="Pizza" />
                <div className="p-8">
                    <h4 className="mt-4 font-bold">{pizza.name}</h4>
                    <p className="mt-4">{pizza.description}</p>
                    <p className="mt-4">{pizza.price}</p>
                </div>
            </div>
            </Modal >
        );
    }
};

export default PizzaUpdateModel;