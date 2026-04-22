const { pipeline } = require("@xenova/transformers");

let extractor;

async function getEmbedding(text) {
  if (!extractor) {
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }

  const output = await extractor(text);

  const embeddings = output[0].map(
    (_, i) => output[0].reduce((sum, val) => sum + val, 0) / output[0].length,
  );

  return embeddings;
}

module.exports = { getEmbedding };
