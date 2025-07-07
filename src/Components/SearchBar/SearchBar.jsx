
const SearchBar = ({ search, setSearch, filterStatus, setFilterStatus }) => (
  <div className="w-full flex flex-col md:flex-row gap-4 mb-6">
    <input
      className="flex-1 px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      type="text"
      placeholder="Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <select
      className="px-4 py-2 rounded border border-gray-300 bg-gray-100 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
    >
      <option value="">All Statuses</option>
      <option value="To Read">To Read</option>
      <option value="Reading">Reading</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
);

export default SearchBar;
