import Product from "../models/Product.model.js";

// function to filter products
export const filterProducts = async (searchTerm) => {
  try {
    const pipeline = [
      {
        $match: searchTerm,
      },
      {
        $lookup: {
          from: "users",
          localField: "userRef",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $lookup: {
          from: "businesses",
          localField: "businessRef",
          foreignField: "_id",
          as: "businessDetails",
        },
      },
      {
        $unwind: "$userDetails",
      },
      {
        $project: {
          title: 1,
          shortDescription: 1,
          longDescription: 1,
          quantity: 1,
          businessName: "$businessDetails.businessName",
          businessEmail: "$userDetails.email",
        },
      },
    ];
    const products = await Product.aggregate(pipeline);
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

// function to search for products based on user, business and product details
export const genericProductsSearch = async (query) => {
  try {
    const filter = {
      isDeleted: false,
    };
    const options = {
      limit: query.limit,
      sort: { createdAt: query.sortOrder ? parseInt(query.sortOrder) : -1 },
      page: query.startIndex ? parseInt(query.startIndex) : 0,
    };

    const pipeline = [
      {
        $lookup: {
          from: "businesses",
          localField: "businessRef",
          foreignField: "_id",
          as: "businessDetails",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userRef",
          foreignField: "_id",
          as: "userDetails",
        },
      },
      {
        $unwind: "$businessDetails",
      },
      {
        $unwind: "$userDetails",
      },
      {
        $project: {
          title: 1,
          shortDescription: 1,
          longDescription: 1,
          quantity: 1,
          price: 1,
          images: 1,
          isFlashSale: 1,
          slud: 1,
          city: 1,
          businessName: "$businessDetails.businessName",
          email: "$userDetails.email",
        },
      },
    ];
    const result = await Product.paginateLookup(filter, options, pipeline);
    return result;
  } catch (error) {
    throw new Error("oops1 could not search for products generically!");
  }
};
