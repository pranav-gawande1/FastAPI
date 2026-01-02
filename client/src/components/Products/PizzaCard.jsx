import React from "react";

const PizzaCard = ({ pizza }) => {
    const link = `${pizza.imageUrl}`
    const link2 = `/pizza/${pizza.id}`;
    return (
        <>
            <a href={link2}> {/*future to specicfic pizza */}
                <div className="flex flex-col justify-center mx-[8px] bg-white w-[260px] hover:-translate-y-1 hover:shadow-2xl">
                    <img className="p-0 h-full w-full lg:h-40 lg:w-260" src={link} alt="Pizza" />
                    <div className="p-4">
                        <h4 className="mt-4 font-bold">{pizza.name}</h4>
                        <p className="mt-4">{pizza.description}</p>
                        <p className="mt-4">{pizza.price}</p>
                        <p className="text-center bg-[#ff4d4d] p-4 rounded-xl text-white hover:bg-red-500 mt-4">View More</p>
                    </div>
                </div>
            </a>
        </>
    );
};
export default PizzaCard;