import PizzaCard from "./PizzaCard.jsx";
import Texture from "../../assets/texture.jpeg"
import Loader from "../Loader/Loader.jsx";
import ErrorState from "../Loader/NotFound.jsx";
import useFetch from "../../shared/hooks/useFetch.jsx";
import { useSelector } from "react-redux";

const PizzaList = () => {
    const { data, loading, error } = useFetch(`/pizza/pizzas`);
    const { role } = useSelector((state) => state.auth);
    // console.log("pizza Id", pizza._id);
    return (
        <>
            {loading && <Loader />}
            {error && <ErrorState />}
            {!loading && !error && (
                <section className="bg-repeat mt-8 bg-[length:50%] sm:bg-[length:35%] lg:bg-[length:25%]" style={{ backgroundImage: `url(${Texture})` }}>
                    {role === "user" ? (
                        <h1 className="mt-4 text-center text-xl sm:text-2xl lg:text-3xl font-bold">Our Pizzas</h1>)
                        :
                        (<h1 className="mt-4 text-center text-xl sm:text-2xl lg:text-3xl font-bold">User Side View</h1>
                        )}
                    <div className="max-w-6xl justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-16 lg:gap-y-4 px-4 sm:px-8 mx-auto">
                        {data?.pizzas.map(pizza => (
                            <PizzaCard
                                key={pizza._id}
                                pizza={pizza}
                            />
                        ))}
                    </div>
                </section >
            )}
        </>
    );
};
export default PizzaList;