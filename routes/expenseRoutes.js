const { Router } = require("express");
const { authenticateToken } = require("../middleware/authMiddleware");
const expenseController = require("../controllers/expenseController");

const router = Router();

router.get("/profile", authenticateToken, expenseController.getUserProfile);
router.post("/expense", authenticateToken, expenseController.addExpense);
router.get("/expense", authenticateToken, expenseController.getExpense);
router.get(
  "/getAllExpense",
  authenticateToken,
  expenseController.getAllExpense
);
router.get(
  "/downloadMyExpenseCSV",
  authenticateToken,
  expenseController.getIndividualUserExpenseCSV
);

module.exports = router;
