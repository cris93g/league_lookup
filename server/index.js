require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
routes = require("./routes/routes");

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(json());

routes(app);

app.listen(port, () => {
  console.log(`league it up at port ${port}`);
});
