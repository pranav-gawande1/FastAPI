const { getVectorStore } = require("./vectorStore")

const retrieveRelevantData = async (query) => {
    const vectorStore = getVectorStore();

    const results = await vectorStore.similaritySearch(query, 3);

    return results.map(r => r.pageContent).join("\n");
};

module.exports = retrieveRelevantData;