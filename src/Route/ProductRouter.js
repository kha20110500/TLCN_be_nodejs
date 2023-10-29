const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductController");

const { authMiddleWare } = require("../Middleware/authMiddleware");
const { upload } = require("../Controller/ProductController");

router.post(
  "/create",
  authMiddleWare,
  upload.single("image"),
  ProductController.createProduct
);
router.put(
  "/update/:id",
  authMiddleWare,
  upload.single("image"),
  ProductController.updateProduct
);
router.delete("/delete/:id", authMiddleWare, ProductController.deleteProduct);
router.post("/delete-many", authMiddleWare, ProductController.deleteMany);

router.get("/get-details/:id", ProductController.getDetailsProduct);
router.get("/get-all", ProductController.getAllProduct);
router.get("/get-all-type", ProductController.getAllType);

module.exports = router;
