const PizzaModel = require("../../models/Pizza");
const { formatPizza } = require("./embedData");
const { initVectorStore } = require("./vectorStore");

const initRag = async () => {
    const pizzas = await PizzaModel.find();

    const documents = pizzas.map(pizza => ({
        pageContent: formatPizza(pizza),
        metadata: { id: pizza._id.toString() }
    }));

    // await initVectorStore(documents);

    console.log("Rag initialized!!");
};

module.exports = initRag;