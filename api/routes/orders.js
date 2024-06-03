const express = require("express");
const Order = require("../models/orders");
const checkAuth = require("../middleware/check-auth");
const OrdersController = require("../controllers/orders");
const router = express.Router();

router.get("/", checkAuth, OrdersController.orders_get_all);

router.post("/",checkAuth, OrdersController.order_create);

router.get("/:orderId", checkAuth, OrdersController.orders_get_by_id);

router.patch("/:orderId",checkAuth, OrdersController.order_update);

router.delete("/:orderId",checkAuth, OrdersController.order_delete);

module.exports = router;
