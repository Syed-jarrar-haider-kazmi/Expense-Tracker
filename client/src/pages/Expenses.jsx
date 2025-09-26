import { useEffect, useState } from "react";
import { getExpenses, createExpense, updateExpense, deleteExpense } from "../api/expenses";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseRow from "../components/ExpenseRow";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const loadExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load expenses");
    }
  };

  const handleAdd = async (data) => {
    try {
      await createExpense(data);
      loadExpenses();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add expense");
    }
  };

  const handleEdit = async (exp) => {
    const newTitle = prompt("New title:", exp.title);
    if (newTitle === null) return;
    try {
      await updateExpense(exp._id, { ...exp, title: newTitle });
      loadExpenses();
    } catch (err) {
      setError(err.response?.data?.message || "Update failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this expense?")) return;
    try {
      await deleteExpense(id);
      loadExpenses();
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <Navbar />
      <h1 className="text-2xl font-bold">Expenses</h1>
      {error && <p className="text-red-500">{error}</p>}

      <ExpenseForm onSubmit={handleAdd} />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <ExpenseRow
                key={exp._id}
                exp={exp}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
