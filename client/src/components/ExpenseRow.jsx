export default function ExpenseRow({ exp, onEdit, onDelete }) {
  return (
    <tr>
      <td>{exp.title}</td>
      <td>${exp.amount}</td>
      <td>{exp.category}</td>
      <td>{new Date(exp.date).toLocaleDateString()}</td>
      <td>{exp.note}</td>
      <td className="flex gap-2">
        <button
          onClick={() => onEdit(exp)}
          className="btn btn-xs btn-outline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(exp._id)}
          className="btn btn-xs btn-error text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
