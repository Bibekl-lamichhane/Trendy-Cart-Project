const Product = require("../models/product");
const addNewProduct = async (req, res) => {
  await Product.create(req.body);
  return res.json({
    msg: "Product Added",
  });
};
const getAllProducts = async (req, res) => {
  const productList = await Product.find();
  return res.json(productList);
};
const getProductDetailsById = async (req, res) => {
  try {
    const productDetails = await Product.findById(req.params.id);
    return res.json(productDetails);
  } catch (err) {
    return res.json({
      msg: "unable to execute function getProductDetailsById ",
    });
  }
};

module.exports = { addNewProduct, getAllProducts, getProductDetailsById };
