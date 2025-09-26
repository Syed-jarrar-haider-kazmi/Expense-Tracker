import { useState } from "react";

export default function RegisterForm({ onSubmit, error }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        placeholder="Name"
        className="input input-bordered w-full"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      {error && <p className="text-red-500">{error}</p>}

      <button className="btn btn-primary w-full">Register</button>
    </form>
  );
}
