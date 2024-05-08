import Invoice from "../models/Invoice.model.js";

export const processInvoice = async (reqBody) => {
  try {
  } catch (error) {
    throw new Error(error);
  }
};

export const editInvoice = async () => {};

export const getSystemInvoices = async (query, options) => {
  try {
    const invoices = await Invoice.find(query, null, options);
    return invoices;
  } catch (error) {
    throw new Error(error);
  }
};

export const destroyInvoice = async (invoiceId) => {
  try {
    const isInvoice = await Invoice.findById(invoiceId);
    if (!isInvoice) {
      throw new Error("Could not find invoice by id");
    }
    isInvoice.isDeleted = true;
    await isInvoice.save();
    return isInvoice;
  } catch (error) {
    throw new Error(error);
  }
};
