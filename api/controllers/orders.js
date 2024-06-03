const Order = require("../models/orders");

exports.orders_get_all = (req, res, next) => {
    Order.find()
      .populate("product")
      .then((docs) => {
        if (docs) {
          res.status(200).json(docs);
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "No valid entry found for provided ID" });
      });
  }
  
  exports.orders_get_by_id = (req, res, next) => {
    const id = req.params.orderId;
    Order.findById(id)
      .populate("product")
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
          console.log("orderIdorderIdorderId ==>>", doc);
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "No valid entry found for provided ID" });
      });
  }

  exports.order_update = (req, res, next) => {
    const id = req.params.orderId;
    Order.updateOne({
      _id: id,
      quantity: req.body.quantity,
      product: req.body.product,
    }).then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      }
    });
  }
  
  exports.order_delete = (req, res, next) => {
    const id = req.params.orderId;
    Order.deleteOne({ _id: id })
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }

  exports.order_create = (req, res, next) => {
    const newOrder = new Order({
      quantity: req.body.quantity,
      product: req.body.product,
    });
    newOrder.save();
    res.status(200).json(newOrder);
  }