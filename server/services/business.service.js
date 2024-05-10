import Business from "../models/Business.model.js";

export const modifyBusinessDetails = async (reqBody) => {
  try {
  } catch (error) {}
};

export const filterBusinesses = async (searchTerm) => {
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
        $unwind: "$userDetails",
      },
      {
        $project: {
          businessName: 1,
          address: 1,
          city: 1,
          officialNumber: 1,
          logo: 1,
          businessEmail: "$userDetails.email",
        },
      },
    ];
    const business = await Business.aggregate(pipeline);
    if (!business) {
      throw new Error("could not filter businesses");
    }
    return business;
  } catch (error) {
    throw new Error(error);
  }
};
