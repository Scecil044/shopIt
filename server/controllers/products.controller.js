import Product from "../models/Product.model.js";
import { errorHandler } from "../utils/error.js";

// function to get products
export const getProducts = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm
      ? {
          $or: [
            { title: { $regex: req.query.title, $options: "1" } },
            {
              shortDescription: {
                $regex: req.query.shortDescription,
                $options: "1",
              },
            },
            {
              longDescription: {
                $regex: req.query.longDescription,
                $options: "1",
              },
            },
          ],
        }
      : {};
    const product = await Product.find(searchTerm).populate({
      path: "userRef",
      select: "firstName lastName email",
    });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// function to create product
export const createProduct = async (req, res, next) => {
  try {
    const {
      title,
      price,
      quantity,
      shortDescription,
      longDescription,
      images,
    } = req.body;
    if (
      !title ||
      title === "" ||
      !price ||
      price === "" ||
      !shortDescription ||
      shortDescription === "" ||
      !longDescription ||
      longDescription === "" ||
      !quantity ||
      quantity === "" ||
      !images ||
      !Array.isArray(images) || // checks if images is not an array
      images.length < 1
    )
      return next(errorHandler(400, "Please fill out all required fields!"));
    // generate slug
    const slug = title
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join("_");
    //proceed to create product
    const newProduct = await Product.create({
      title,
      slug,
      quantity,
      price,
      shortDescription,
      longDescription,
      userRef: req.user.id,
      images,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// function to update product
export const updateProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

// function to update product
export const deleteProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
