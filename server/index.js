const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const newsRoutes = require("./routes/news");

const app = express();

app.use(cors({ origin: config.CLIENT_URL }));

app.use(bodyParser.json());
app.use(newsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Page not found" });
});
app.listen(config.SERVER_PORT, () => {
  console.log(`Server started at port ${config.SERVER_PORT}  🚀 `);
});
