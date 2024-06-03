const Product = require("../models/product");

exports.products_get_all = (req, res, next) => {
  Product.find()
    .then((docs) => {
      if (docs) {
        res.status(200).json(docs);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "No valid entry found for provided ID" });
    });
}
  
  exports.products_get_by_id = (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
          console.log("productIdproductIdproductId ==>>", doc);
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "No valid entry found for provided ID" });
      });
  }

  exports.product_update = (req, res, next) => {
    const id = req.params.productId;
    Product.updateOne({
      _id: id,
      quantity: req.body.quantity,
      product: req.body.product,
    }).then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      }
    });
  }
  
  exports.product_delete = (req, res, next) => {
    const id = req.params.productId;
    Product.deleteOne({ _id: id })
      .then((doc) => {
        if (doc) {
          res.status(200).json(doc);
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }

  exports.product_create = (req, res, next) => {
    const newProduct = new product({
      quantity: req.body.quantity,
      product: req.body.product,
    });
    newProduct.save();
    res.status(200).json(newProduct);
  }