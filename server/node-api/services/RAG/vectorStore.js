// const { Chroma } = require("@langchain/community/vectorstores/chroma");
// const { HuggingFaceInferenceEmbeddings } = require("langchain/embeddings");

// const embeddings = new HuggingFaceInferenceEmbeddings({
//     model: "sentence-transformers/all-MiniLM-L6-v2",
//     modelKwargs: { device: "cpu" } 
// });

// let vectorStore;

// const initVectorStore = async (documents) => {
//     vectorStore = await Chroma.fromDocuments(
//         documents,
//         embeddings,
//         {
//             collectionName: "pizza-paradise"
//         }
//     );
// };

// const getVectorStore = () => vectorStore;

// module.exports = { initVectorStore, getVectorStore };