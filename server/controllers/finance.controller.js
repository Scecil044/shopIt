import {
  destroyInvoice,
  editInvoice,
  getSystemInvoices,
  processInvoice,
} from "../services/finance.service.js";
import { errorHandler } from "../utils/error.js";

// function to get all invoices
export const getInvoices = async (req, res, next) => {
  try {
    const options = { sort: { createdAt: -1 } };
    const query = { isDeleted: false };
    const invoices = await getSystemInvoices(query, options);
    if (!invoices)
      return next(
        errorHandler(
          404,
          "something went wrong when retrieving system invoices"
        )
      );

    res.status(200).json(invoices);
  } catch (error) {
    next(error);
  }
};
// function to create invoice
export const createInvoice = async (req, res, next) => {
  try {
    const invoice = await processInvoice(req.body);
    if (!invoice)
      return next(
        errorHandler(400, "An error was encountered when creating an invoice")
      );
    res.status(200).json(invoice);
  } catch (error) {
    next(error);
  }
};

// function to update invoice
export const updateInvoice = async (req, res, next) => {
  try {
    const updatedInvoice = await editInvoice();

    res.status(200).json(updatedInvoice);
  } catch (error) {
    next(error);
  }
};

// function to delete invoice
export const deleteInvoice = async (req, res, next) => {
  try {
    if (req.user.role !== "admin")
      return next(
        errorHandler(403, "You do not have rights to proceed with this action")
      );
    const isDeleted = await destroyInvoice(req.params.id);
    if (!isDeleted)
      return next(errorHandler(400, "Opps, could not delete invoice!"));

    res.status(200).json("invoice deleted");
  } catch (error) {
    next(error);
  }
};
