import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookListPage from "./Pages/BookListPage/BookListPage";
import AddBookPage from "./Pages/AddBookPage/AddBookPage";
import EditBookPage from "./Pages/EditBookPage/EditBookPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookListPage />} />
        <Route path="/add" element={<AddBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
      </Routes>
    </Router>
  );
}
export default App;
