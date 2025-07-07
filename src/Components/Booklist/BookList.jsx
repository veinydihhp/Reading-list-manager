import BookRow from "../Bookrow/BookRow";

const BookList = ({ books, loading, onDelete, onStatusChange }) => {
  if (loading)
    return (
      <p className="mt-5 text-lg text-indigo-400 animate-pulse">
        Loading books...
      </p>
    );
  if (!books.length)
    return (
      <p className="mt-5 text-lg text-gray-500">
        No books found. Start by adding one!
      </p>
    );

  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-xl mt-2 ring-1 ring-emerald-200 bg-white/80">
      <table className="w-full bg-white/80 rounded-xl">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-200 via-emerald-100 to-indigo-100 text-indigo-900">
            <th className="py-4 px-4 text-left text-base font-bold">Title</th>
            <th className="py-4 px-4 text-left text-base font-bold">Author</th>
            <th className="py-4 px-4 text-left text-base font-bold">Status</th>
            <th className="py-4 px-4 text-left text-base font-bold">
              Date Added
            </th>
            <th className="py-4 px-4 text-left text-base font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookRow
              key={book.id}
              book={book}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
