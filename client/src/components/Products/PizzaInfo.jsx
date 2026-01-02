import React from "react";

const PizzaInfo = ({ pizza }) => {
    const link = `${pizza.imageUrl}`;
    return (
        <>
            <div className="flex p-4 flex-row justify-center mx-auto bg-gray-200 w-[900px] rounded-sm hover:-translate-y-1 hover:shadow-2xl">
                <img className="p-8 h-full w-full lg:h-100 lg:w-100 " src={link} alt="Pizza" />
                <div className="p-8">
                    <h4 className="mt-4 font-bold">{pizza.name}</h4>
                    <p className="mt-4">{pizza.description}</p>
                    <p className="mt-4">{pizza.price}</p>
                    <p className="text-center bg-[#ff4d4d] p-4 rounded-xl text-white hover:bg-red-500 mt-4">View More</p>
                </div>
            </div>
        </>
    );
};

export default PizzaInfo;