const pool = require("../config/db");
const fs = require("fs");
const path = require("path");
const { getEmbedding } = require("./embedding");

exports.processDocument = async (document) => {
  try {
    console.log("Processing document:", document);
    await pool.query(
      `UPDATE documents SET processing_status = 'processing' WHERE id = $1`,
      [document.id],
    );

    const filePath = path.resolve("uploads", document.file_url);

    const extractedText = fs.readFileSync(filePath, "utf-8");

    const embedding = await getEmbedding(extractedText);

    await pool.query(
      `UPDATE documents SET extracted_text = $1 , embedding = $2, processing_status = 'completed' WHERE id = $3`,
      [extractedText, embedding, document.id],
    );
  } catch (error) {
    console.error("Error processing document:", error);
    await pool.query(
      `UPDATE documents SET processing_status = 'failed' WHERE id = $1`,
      [document.id],
    );
  }
};
