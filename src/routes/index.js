const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");

router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/category", categoryRoutes);
router.use("/order", orderRoutes);

module.exports = router;
