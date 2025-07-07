import React, { useState } from "react";
import AddBookForm from "../../Components/AddBookForm/AddBookForm";
import { Link } from "react-router-dom";

const AddBookPage = () => {
  const [loading] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-300 flex items-center justify-center font-sans">
      <div className="w-full max-w-lg bg-white/90 shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center ring-1 ring-indigo-200 backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-tight drop-shadow-md">
          <span className="mr-2 bg-indigo-100 text-indigo-600 p-2 rounded-xl shadow animate-pulse">
            +
          </span>
          Add a Book
        </h2>
        <AddBookForm onAdd={() => {}} loading={loading} />
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
export default AddBookPage;
