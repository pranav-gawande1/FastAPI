import pizza from "../../constant/mockData.js";
import PizzaCard from "./PizzaCard.jsx";
import Texture from "../../assets/texture.jpeg"

const PizzaList = () => {
    return (
        <>
            <section className="bg-repeat mt-8 bg-[length:50%] sm:bg-[length:35%] lg:bg-[length:25%]" style={{ backgroundImage: `url(${Texture})` }}>
                <h1 className="mt-4 text-center text-xl sm:text-2xl lg:text-3xl font-bold">Our Pizzas</h1>
                <div className="max-w-6xl justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-x-16 lg:gap-y-4 px-4 sm:px-8 mx-auto">
                    {pizza.map(pizza => (
                        <PizzaCard key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </section>
        </>
    );
};
export default PizzaList;