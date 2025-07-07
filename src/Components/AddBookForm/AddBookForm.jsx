import { useState } from "react";

const statuses = ["To Read", "Reading", "Completed"];

const AddBookForm = ({ onAdd, loading }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState(statuses[0]);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd({ title, author, status, notes });
    setTitle("");
    setAuthor("");
    setStatus(statuses[0]);
    setNotes("");
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">Author</label>
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">Status</label>
        <select
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-gray-700">
          Notes (optional)
        </label>
        <textarea
          className="w-full px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
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
