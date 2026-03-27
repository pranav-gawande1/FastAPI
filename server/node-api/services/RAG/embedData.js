const formatPizza = (pizza) => {
    return `
    Pizza name: ${pizza.name}
    Price: ${pizza.price}
    Description: ${pizza.description}
    `;
};

module.exports = { formatPizza };