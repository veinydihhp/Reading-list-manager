// import React, { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";

// // Simulate fetchBook and updateBook
// // Replace these with your actual Supabase logic or props!
// const fetchBook = (id) => {
//   // Simulated book
//   return Promise.resolve({
//     id,
//     title: "Sample Book",
//     author: "Sample Author",
//     status: "To Read",
//     notes: "Edit the notes here.",
//   });
// };

// const updateBook = (id, data) => {
//   // Simulate update
//   return Promise.resolve({ ...data, id });
// };

// const statuses = ["To Read", "Reading", "Completed"];

// const EditBookPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [book, setBook] = useState(null);
//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     status: "To Read",
//     notes: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetchBook(id).then((data) => {
//       setBook(data);
//       setForm({
//         title: data.title,
//         author: data.author,
//         status: data.status,
//         notes: data.notes,
//       });
//       setLoading(false);
//     });
//   }, [id]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     await updateBook(id, form);
//     setSaving(false);
//     navigate("/"); // Redirect to main list page after save
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-200 flex items-center justify-center">
//         <div className="text-2xl font-bold text-indigo-800 animate-pulse">
//           Loading book...
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-200 flex items-center justify-center">
//       <div className="w-full max-w-lg bg-white/90 shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center ring-1 ring-indigo-200 backdrop-blur-md">
//         <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-tight flex items-center drop-shadow-md">
//           <span className="mr-2 bg-indigo-100 text-indigo-600 p-2 rounded-xl shadow">
//             ✏️
//           </span>
//           Edit Book
//         </h2>
//         <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
//           <div>
//             <label className="block font-semibold mb-2 text-indigo-700 text-lg">
//               Title
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2 text-indigo-700 text-lg">
//               Author
//             </label>
//             <input
//               className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
//               type="text"
//               name="author"
//               value={form.author}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-2 text-indigo-700 text-lg">
//               Status
//             </label>
//             <select
//               className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
//               name="status"
//               value={form.status}
//               onChange={handleChange}
//             >
//               {statuses.map((s) => (
//                 <option key={s}>{s}</option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-2 text-indigo-700 text-lg">
//               Notes (optional)
//             </label>
//             <textarea
//               className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
//               name="notes"
//               value={form.notes}
//               onChange={handleChange}
//               rows={3}
//             />
//           </div>
//           <button
//             className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-emerald-500 hover:to-indigo-600 text-white text-lg font-extrabold mt-2 shadow-xl hover:scale-105 active:scale-95 transition"
//             type="submit"
//             disabled={saving}
//           >
//             {saving ? "Saving..." : "Save Changes"}
//           </button>
//         </form>
//         <Link
//           to="/"
//           className="mt-8 px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-700 transition text-white text-base font-bold shadow-md hover:scale-105 active:scale-95 duration-200"
//         >
//           ← Back to List
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EditBookPage;


import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const statuses = ["To Read", "Reading", "Completed"];

const EditBookPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    status: "To Read",
    notes: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Fetch book data from Supabase
  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("id", id)
        .single();
      if (error || !data) {
        alert("Book not found!");
        navigate("/");
      } else {
        setForm({
          title: data.title || "",
          author: data.author || "",
          status: data.status || "To Read",
          notes: data.notes || "",
        });
      }
      setLoading(false);
    };
    fetchBook();
  }, [id, navigate]);

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit and update in Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase
      .from("books")
      .update({
        title: form.title,
        author: form.author,
        status: form.status,
        notes: form.notes,
      })
      .eq("id", id);
    setSaving(false);
    if (error) {
      alert("Failed to save changes: " + error.message);
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-200 flex items-center justify-center">
        <div className="text-2xl font-bold text-indigo-800 animate-pulse">
          Loading book...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-200 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white/90 shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center ring-1 ring-indigo-200 backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-tight flex items-center drop-shadow-md">
          <span className="mr-2 bg-indigo-100 text-indigo-600 p-2 rounded-xl shadow">
            ✏️
          </span>
          Edit Book
        </h2>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-2 text-indigo-700 text-lg">
              Title
            </label>
            <input
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-indigo-700 text-lg">
              Author
            </label>
            <input
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-2 text-indigo-700 text-lg">
              Status
            </label>
            <select
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
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
            <label className="block font-semibold mb-2 text-indigo-700 text-lg">
              Notes (optional)
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-indigo-50 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition shadow"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <button
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-emerald-500 hover:to-indigo-600 text-white text-lg font-extrabold mt-2 shadow-xl hover:scale-105 active:scale-95 transition"
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
        <Link
          to="/"
          className="mt-8 px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-700 transition text-white text-base font-bold shadow-md hover:scale-105 active:scale-95 duration-200"
        >
          ← Back to List
        </Link>
      </div>
    </div>
  );
};

export default EditBookPage;
