
import { useState } from "react";

const statuses = ["To Read", "Reading", "Completed"];

const AddBookForm = ({ onAdd, loading }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    status: statuses[0],
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    onAdd(form); // Pass form data up to AddBookPage
    setForm({
      title: "",
      author: "",
      status: statuses[0],
      notes: "",
    });
  };

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <label className="block font-semibold mb-2 text-gray-700">Title</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">Author</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">Status</label>
        <select
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">
          Notes (optional)
        </label>
        <textarea
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
        />
      </div>
      <button
        className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white text-lg font-bold mt-2 transition"
        type="submit"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Book"}
      </button>
    </form>
  );
};

export default AddBookForm;
