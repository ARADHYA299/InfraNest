require("dotenv").config({ override: true });
const app = require("./app");

const PORT = process.env.PORT || 5000;

console.log({
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
