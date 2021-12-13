const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    const products = adminData.products;
    console.log
  res.render("shop", {
    prods: adminData.products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop : true,
    productCSS : true
  });
  console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views','shop.html'));
});

module.exports = router;
