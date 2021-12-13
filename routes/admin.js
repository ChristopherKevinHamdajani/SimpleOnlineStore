const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

const products = [];
//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir,'views','add-product.html'));
  res.render("add-product", {
    pageTitle: "Add-product",
    path: "/admin/add-product",
    productCSS :true,
    formsCSS : true,
    activeAddProduct : true
  });
});

//admin/add-product =>POST
router.post("/add-product", (req, res, next) => {
  //different method(postvs get result to diff. path)
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;