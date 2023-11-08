const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find({})
    .populate({
      path: "user",
      select: "name",
    })
    .populate("reviews");

  if (!products) {
    throw new CustomError.NotFoundError("0 products available!");
  }
  res.status(StatusCodes.OK).json({ count: products.length, products });
};

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.find({ _id: productId })
    .populate({
      path: "user",
      select: "name",
    })
    .populate("reviews");

  if (!product) {
    throw new CustomError.NotFoundError(
      `Product with ID: ${productId} is not found!`
    );
  }
  res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new CustomError.NotFoundError(
      `Product with ID: ${productId} is not found!`
    );
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Product updated successfully!", product });
};

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    throw new CustomError.NotFoundError(
      `Product with ID: ${productId} is not found!`
    );
  }

  await product.remove();
  res.status(StatusCodes.OK).json({ msg: "Product deleted successfully!" });
};

const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
