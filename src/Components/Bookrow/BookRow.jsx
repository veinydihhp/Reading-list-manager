import { Link } from "react-router-dom";
import StatusBadge from "../StatusBadge/StatusBadge";

const statuses = ["To Read", "Reading", "Completed"];

const BookRow = ({ book, onDelete, onStatusChange }) => (
  <tr className="hover:bg-sky-50 transition">
    <td className="py-3 px-4">{book.title}</td>
    <td className="py-3 px-4">{book.author}</td>
    <td className="py-3 px-5">
      <StatusBadge status={book.status} />
    </td>
    <td className="py-3 px-4">{book.date_added || "—"}</td>
    <td className="py-3 px-4">
      <div className="flex gap-2">
        <select
          className="rounded px-2 py-1 border border-gray-300 text-sm focus:outline-none"
          value={book.status}
          onChange={(e) => onStatusChange(book.id, e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button
          className="px-3 py-1 rounded bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
        <Link
          to={`/edit/${book.id}`}
          className="px-6 py-1 rounded bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition"
        >
          Edit
        </Link>
      </div>
    </td>
  </tr>
);

export default BookRow;
