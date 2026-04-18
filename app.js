const express = require("express");
const cors = require("cors");
const documentRoutes = require("./routes/document.routes");
const analyticsRoutes = require("./routes/analytics.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/documents", documentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);

module.exports = app;
