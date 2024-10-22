const express = require("express");
require("./database/index");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const morgan = require("morgan");

dotenv.config();
const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api", authRoutes);
app.use("/api", expenseRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
