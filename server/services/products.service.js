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
