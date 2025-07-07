import { useEffect, useState } from "react";
import BookList from "../../Components/Booklist/BookList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Fetch books from Supabase when component mounts or when search/filter changes
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      let query = supabase
        .from("books")
        .select("*")
        .order("date_added", { ascending: false });

      // Search title OR author (case-insensitive)
      if (search) {
        query = query.or(`title.ilike.%${search}%,author.ilike.%${search}%`);
      }
      if (filterStatus) {
        query = query.eq("status", filterStatus);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } else {
        setBooks(data);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [search, filterStatus]);

  // --- DELETE FUNCTION ---
  const handleDelete = async (bookId) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    setLoading(true);
    const { error } = await supabase.from("books").delete().eq("id", bookId);
    if (!error) {
      setBooks((prev) => prev.filter((book) => book.id !== bookId));
    } else {
      alert("Failed to delete book");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-600 via-sky-300 to-emerald-300 flex items-center justify-center font-sans transition-all">
      <div className="w-full max-w-6xl bg-white/90 shadow-2xl rounded-3xl px-10 py-12 flex flex-col items-center ring-1 ring-indigo-200 backdrop-blur-md">
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
          onDelete={handleDelete}
          onStatusChange={() => {}} // We'll implement this soon!
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
