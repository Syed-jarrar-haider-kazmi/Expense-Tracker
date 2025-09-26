import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date, note } = req.body;

    if (!title || !amount || !date)
      return res.status(400).json({ message: "Title, amount and date are required" });

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      note,
      user: req.user.id
    });

    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const { category, from, to } = req.query;

    const filter = { user: req.user.id };
    if (category) filter.category = category;

    if (from || to) {
      filter.date = {};
      if (from) filter.date.$gte = new Date(from);
      if (to) filter.date.$lte = new Date(to);
    }

    const expenses = await Expense.find(filter).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    Object.assign(expense, req.body);
    await expense.save();
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    await expense.deleteOne();
    res.json({ message: "Expense deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};
