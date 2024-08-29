import React ,{ useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'it ends with us',author: 'Colleen Hoover' },
    { id: 2, title: '7 sisters', author: 'Lucinda Riley' },
  ]);

  const addBook = (book) => {
    setBooks([...books, { id: books.length + 1, ...book }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    console.log("Deleting book with ID:", id);
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <div>
    <h1>BOOKS</h1>
    
    <nav className='krye'>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
    
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Booklist books={books} deleteBook={deleteBook} />} />
      <Route path="/add-book" element={<AddBook  addBook={addBook}/>} />
      <Route path="/edit-book/:id" element={<EditBook books={books} updateBook={updateBook} />} />

      

    </Routes>
  </div>
  
  );
}

export default App
