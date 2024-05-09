import Product from "../models/Product.model.js";
import {
  filterProducts,
  genericProductsSearch,
} from "../services/products.service.js";
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
    const products = await Product.find(searchTerm).populate({
      path: "userRef",
      select: "firstName lastName email",
    });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
// function to search products
export const searchProducts = async (req, res, next) => {
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
    const filteredProducts = await filterProducts(searchTerm);
    if (!filteredProducts)
      return next(errorHandler(400, "could not filter products"));

    res.status(200).json(filteredProducts);
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
      createdBy: req.user.id,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// function to update product
export const updateProduct = async (req, res, next) => {
  try {
    const isProduct = await Product.find(req.params.id);
    if (!isProduct) return next(errorHandler(404, "product not found"));
    const updates = Object.keys(req.body);

    updates.forEach((update) => {
      isProduct[update] = req.body[update];
    });
    isProduct.updatedBy = req.user.id;
    const updatedProduct = await isProduct.save();
    res.status(200).json(updatedProductßß);
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

// ======================================================== Aggregations ==============================================
export const getAvailableProducts = async (req, res, next) => {
  let pipeline = [
    {
      $match: {
        isDeleted: false,
        status: "available",
      },
    },
    {
      $group: {
        id: null,
        availableProducts: {
          $sum: 1,
        },
        totalSales: {
          $sum: "$quantity",
        },
      },
    },
  ];

  const availableProducts = await Product.aggregate(pipeline);
  res.status(200).json({
    availableProducts,
    totalSales,
  });

  try {
  } catch (error) {}
};

// use this function to search for products across the entire database
export const genericFilter = async (req, res, next) => {
  try {
    const filteredProducts = await genericProductsSearch(req.query);
    if (!filteredProducts)
      return next(errorHandler(400, "generic products search failed!"));

    res.status(200).json(filteredProducts);
  } catch (error) {
    next(error);
  }
};
