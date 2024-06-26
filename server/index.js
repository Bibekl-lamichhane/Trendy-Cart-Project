const express = require("express");

const dbConnect = require("./src/db/connection");
const userRoute = require("./src/routes/user");
const productRoute = require("./src/routes/product");
const cors = require("cors");

dbConnect();
const app = express();

app.use(cors());
require("dotenv").config();
//body parser
app.use(express.json());
app.use(userRoute);
app.use(productRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
