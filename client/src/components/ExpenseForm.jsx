import { useState } from "react";

export default function ExpenseForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || form.amount <= 0 || !form.date) {
      alert("Please enter valid title, positive amount, and date");
      return;
    }
    onSubmit({ ...form, amount: +form.amount });
    setForm({ title: "", amount: "", category: "Food", date: "", note: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-5 gap-2 bg-base-200 p-3 rounded"
    >
      <input
        placeholder="Title"
        className="input input-bordered"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        className="input input-bordered"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        min="1"
      />
      <select
        className="select select-bordered"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Shopping</option>
      </select>
      <input
        type="date"
        className="input input-bordered"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        placeholder="Note"
        className="input input-bordered"
        value={form.note}
        onChange={(e) => setForm({ ...form, note: e.target.value })}
      />
      <button className="btn btn-primary col-span-5 md:col-span-1 mx-auto">
        Add
      </button>
    </form>
  );
}
