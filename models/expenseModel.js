const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    nos: {
      type: Number,
      required: true,
    },
    isEqual: {
      type: Boolean,
      required: true,
    },
    isPercentage: {
      type: Boolean,
      required: true,
    },
    isExact: {
      type: Boolean,
      required: true,
    },
    ids: {
      type: [[String]],
      required: true,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
