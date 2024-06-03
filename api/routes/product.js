const express = require("express");
const checkAuth = require("../middleware/check-auth");
const ProductsController = require("../controllers/products");
const router = express.Router();
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   //reject a file
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// router.get("/",checkAuth, (req, res, next) => {
//   Product.find()
//     .then((docs) => {
//       if (docs) {
//         res.status(200).json(docs);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "No valid entry found for provided ID" });
//     });
// });

// // router.post("/", upload.single("productImage"), (req, res, next) => {
// //   const newProduct = new Product({
// //     name: req.body.name,
// //     price: req.body.price,
// //     productImage: req.file.path,
// //   });
// //   newProduct.save();
// //   res.status(200).json(newProduct);
// // });

// router.post("/",checkAuth, (req, res, next) => {
//   const newProduct = new Product({
//     name: req.body.name,
//     price: req.body.price
//   });
//   newProduct.save();
//   res.status(200).json(newProduct);
// });

// router.get("/:productId",checkAuth, (req, res, next) => {
//   const id = req.params.productId;
//   Product.findById(id)
//     .select("name price _id productImage")
//     .then((doc) => {
//       if (doc) {
//         res.status(200).json(doc);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "No valid entry found for provided ID" });
//     });
// });

// router.patch("/:productId",checkAuth, (req, res, next) => {
//   const id = req.params.productId;
//   Product.updateOne({
//     _id: id,
//     name: req.body.name,
//     price: req.body.price,
//   }).then((doc) => {
//     if (doc) {
//       res.status(200).json(doc);
//     }
//   });
// });

// router.delete("/:productId",checkAuth, (req, res, next) => {
//   const id = req.params.productId;
//   Product.deleteOne({ _id: id })
//     .then((doc) => {
//       if (doc) {
//         res.status(200).json(doc);
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// });

// module.exports = router;



router.get("/",checkAuth, ProductsController.products_get_all);
router.post("/",checkAuth, ProductsController.product_create);

router.get("/:productId",checkAuth, ProductsController.products_get_by_id);

router.patch("/:productId",checkAuth, ProductsController.product_update);

router.delete("/:productId",checkAuth, ProductsController.product_delete);

module.exports = router;