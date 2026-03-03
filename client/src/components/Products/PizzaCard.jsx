import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../features/Cart/cartSlice";
import useManualFetch from "../../shared/hooks/useManualFetch";
import { useEffect } from "react";
import { toast } from "react-toastify";

const PizzaCard = ({ pizza }) => {
    const { role } = useSelector((state) => state.auth);
    const { execute, data, status, error } = useManualFetch();
    const link = `${pizza.imageUrl}`
    const dispatch = useDispatch();
    const link2 = `/pizza/${pizza._id}`;

    const handelAddtocart = async (pizza_id) => {
        await execute('/carts/cart', "POST",
            {
                pizzaId: pizza_id
            }
        );
    };
    useEffect(() => {
        if (status === "success" && data) {
            dispatch(setCart(data?.cart));
            toast.success(`Item added to cart!!!`);
        }
    }, [status, data, error, dispatch]);


    return (
        <>
            <div className="flex flex-col justify-center mx-[8px] bg-white w-[260px] hover:-translate-y-1 hover:shadow-2xl">
                <img className="p-0 h-full w-full lg:h-40 lg:w-260" src={link} alt="Pizza" />
                <div className="p-4">
                    <h4 className="mt-4 font-bold">{pizza.name}</h4>
                    <p className="mt-4">{pizza.description}</p>


                    <div className="px-2 py-1 flex justify-between gap-2 mt-4">
                        <span>
                            ₹{pizza.price}
                        </span>
                        {role === "user" &&
                            <button
                                onClick={() =>
                                    handelAddtocart(pizza._id)
                                }
                                className="bg-[#ff4d4d] text-white  px-2 py-1 rounded-xl
                                    flex items-center gap-2 transition-all duration-200 active:scale-95 focus:outline-none"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                <span>Add</span>
                            </button>
                        }
                    </div>
                    {/*future to specicfic pizza */}
                    <a href={link2}>
                        <p className="text-center bg-[#ff4d4d] px-2 py-1 rounded-xl text-white hover:bg-red-500 mt-4">View More</p>
                    </a>
                </div>
            </div>
        </>
    );
};
export default PizzaCard;