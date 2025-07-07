import { useState } from "react";
import BookList from "../../Components/Booklist/BookList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const BookListPage = () => {
  const [books] = useState([]);
  const [loading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-300 flex items-center justify-center font-sans transition-all">
      <div className="w-full max-w-4xl bg-white/90 shadow-2xl rounded-3xl px-8 py-12 flex flex-col items-center ring-1 ring-indigo-200 backdrop-blur-md">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-8 tracking-tight flex items-center gap-3 drop-shadow-lg">
          <span className="p-2 bg-emerald-100 rounded-xl shadow-lg animate-pulse">
            <svg
              className="w-12 h-12 text-emerald-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 7.5v11.25A2.25 2.25 0 0 1 14.25 21H4.5V6.75A2.25 2.25 0 0 1 6.75 4.5h9.75a2.25 2.25 0 0 1 2.25 2.25zm0 0V6.75A2.25 2.25 0 0 0 14.25 4.5H6.75A2.25 2.25 0 0 0 4.5 6.75V21"
              />
            </svg>
          </span>
          Personal Reading List
        </h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <BookList
          books={books}
          loading={loading}
          onDelete={() => {}}
          onStatusChange={() => {}}
        />
        <Link
          to="/add"
          className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-500 hover:from-indigo-500 hover:to-emerald-500 transition text-white text-lg font-extrabold shadow-xl hover:scale-105 active:scale-95 duration-200"
        >
          + Add Book
        </Link>
      </div>
    </div>
  );
};
export default BookListPage;
