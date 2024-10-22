const UserModel = require("../models/userModel");
const ExpenseModel = require("../models/expenseModel");
const { createObjectCsvWriter } = require("csv-writer");
const fs = require("fs");
const ExcelJS = require("exceljs");

/**
 * Get user profile
 */
const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const profile = await UserModel.findById(userId);
    res.status(200).json({ profile, status: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/**
 * Add an expense
 */
const addExpense = async (req, res) => {
  const userId = req.userId;
  const { amount, description, nos, isEqual, isPercentage, isExact, ids } =
    req.body;

  try {
    const expense = new ExpenseModel({
      amount,
      description,
      nos,
      isEqual,
      isPercentage,
      isExact,
      ids,
    });
    await expense.save();
    res
      .status(201)
      .json({ message: "Expense Added successfully", status: "success" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/**
 * Get user's expenses
 */
const getExpense = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId);
    const phoneNumber = user.phone;

    const expense = await ExpenseModel.find({
      ids: { $elemMatch: { $elemMatch: { $eq: phoneNumber } } },
    });
    res
      .status(200)
      .json({
        message: "All Expenses fetched Successfully",
        properties: expense,
        status: "success",
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/**
 * Get all expenses
 */
const getAllExpense = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find();
    res
      .status(200)
      .json({
        message: "All Expenses fetched Successfully",
        properties: expenses,
        status: "success",
      });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

/**
 * Generate CSV file
 */
const generateCSV = async (data, fileName, res) => {
  const csvWriter = createObjectCsvWriter({
    path: fileName,
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key })),
  });

  await csvWriter.writeRecords(data);
  res.download(fileName, () => {
    fs.unlinkSync(fileName);
  });
};

/**
 * Download user's expense in CSV
 */
const getIndividualUserExpenseCSV = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId);
    const phoneNumber = user.phone;

    const expenses = await ExpenseModel.find({
      ids: { $elemMatch: { $elemMatch: { $eq: phoneNumber } } },
    });
    const fileName = "individual_user_expense.csv";
    await generateCSV(
      expenses.map((expense) => expense.toObject()),
      fileName,
      res
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getUserProfile,
  addExpense,
  getExpense,
  getAllExpense,
  getIndividualUserExpenseCSV,
};
