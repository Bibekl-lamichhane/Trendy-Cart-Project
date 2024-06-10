const mongoose = require("mongoose");
import { getProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProduct);

module.exports = router;
