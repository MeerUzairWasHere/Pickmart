const express = require("express");
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require("../controllers/productController");

const { getSingleProductReviews } = require("../controllers/reviewController");

router
  .route("/")
  .get(getAllProducts)
  .post(authenticateUser, authorizePermissions, createProduct);

router
  .route("/uploadImage")
  .post(authenticateUser, authorizePermissions, uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch(authenticateUser, authorizePermissions, updateProduct)
  .delete(authenticateUser, authorizePermissions, deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);

module.exports = router;
