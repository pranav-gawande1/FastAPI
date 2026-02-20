import PizzaUpdateModel from "./PizzaUpdateModal";
import PizzaCardAdmin from "./PizzaCardAdmin.jsx";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { useEffect } from "react";
import { toast } from "react-toastify";
import PizzaAddModal from "./PizzaAddModal.jsx";
import { Plus } from "lucide-react";
import { apiRequest } from "../../services/api.js";
// import PizzaView from "./PizzaView";

const PizzaTable = ({ pizzas = [], onPizzaDelete }) => {
    const [pizza, setPizzas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [selectedPizza, setSelectedPizza] = useState(null);
    const [isAddPizza, setIsAddPizza] = useState(false);
    const [actionType, setActionType] = useState(null);

    const { execute, error, status, data } = useManualFetch();

    const handleEdit = async (pizza) => {
        setSelectedPizza(pizza);
        setActionType("edit");
    };

    const handleAddPizza = async () => {
        setIsAddPizza(!isAddPizza);
    };

    const handlePizzaUpdated = (updatedPizza) => {
        setPizzas(prev =>
            prev.map(p =>
                p._id === updatedPizza._id ? updatedPizza : p
            )
        );
    };

    const handleView = (pizza) => {
        setSelectedPizza(pizza);
        setActionType("view");
    };

    const handleDelete = async (pizza_id) => {
        await execute(`/pizza/pizza/${pizza_id}`, "DELETE",);
        onPizzaDelete(pizza_id);
    };

    useEffect(() => {
        if (status === "success") {
            toast.success("Pizza deleted successful!");
        } else if (error) {
            toast.error("Error:", error);
        }
    }, [status, error]);

    const priceFilters = {
        "0-500": (price) => price > 0 && price < 500,
        "500-800": (price) => price >= 500 && price < 800,
        "800+": (price) => price >= 800,
    };

    const filteredPizzas = pizzas.filter((pizza) => {
        const price = Number(
            String(pizza.price).replace(/[^0-9.]/g, "")
        );

        const matchesSearch =
            pizza.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesPrice =
            filterStatus === "all"
                ? true
                : priceFilters[filterStatus](price);

        return matchesSearch && matchesPrice;
    });


    return (
        <>
            <div className="w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-3 p-2">
                    <div className="flex-1 relative">
                        <FaSearch className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by name of pizza...."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white
                        border border-gray-700 rounded-lg text-gray-900 placeholder-gray-500
                        focus:outline-none transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2 bg-white
                    border border-gray-700 rounded-lg px-4 py-2">
                        <FaFilter className="text-gray-600" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-transparent text-sm text-gray-800 focus:outline-none cursor-pointer"
                        >
                            <option value="all"
                                className="text-gray-800"
                            >All</option>
                            <option value="0-500"
                                className="text-gray-800"
                            >0 - 500</option>
                            <option value="500-800"
                                className="text-gray-800">500 - 800</option>
                            <option value="800+"
                                className="text-gray-800">800 and above</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 bg-white
                    border border-gray-700 rounded-lg px-4 py-2 hover:bg-[#ff4d4d] hover:text-white 
                    focus:">
                        <button onClick={() => handleAddPizza()}>
                            Add Pizza
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs
                        font-semibold text-gray-900 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                        font-semibold text-gray-900 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                        font-semibold text-gray-900 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                        font-semibold text-gray-900 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs
                        font-semibold text-gray-900 uppercase tracking-wider">
                                    Menu
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPizzas.length > 0 ? (
                                filteredPizzas.map((pizza) => <PizzaCardAdmin
                                    key={pizza._id}
                                    pizza={pizza}
                                    onEdit={handleEdit}
                                    onView={handleView}
                                    onDelete={handleDelete} />)
                            ) :
                                (
                                    <tr className="text-center">
                                        <td className="px-6 py-8 text-center text-gray-700">
                                            <p className="text-sm">No Pizzas Found matching your choices.</p>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    <PizzaUpdateModel
                        pizza={selectedPizza}
                        isOpen={!!selectedPizza}
                        actionType={actionType}
                        onPizzaUpdated={handlePizzaUpdated}
                        onClose={() => setSelectedPizza(null)}
                    />
                    <PizzaAddModal
                        isOpen={isAddPizza}
                        onClose={() => setIsAddPizza(false)}
                    />
                </div>

                <div className="px-6 py-4 bg-gray-200
                flex items-center justify-between text-sm text-gray-900
                ">
                    <p>
                        Showing {filteredPizzas.length} of {pizzas.length} pizzas
                    </p>
                    <div className="flex gap-4">
                        <button>← Previous</button>
                        <button>Next →</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PizzaTable;