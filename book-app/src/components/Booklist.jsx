import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Booklist({ books , deleteBook }) {
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
          deleteBook(id);
        }
};
    
      
  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <Link to={`/edit-book/${book.id}`}><button className='edit'>Edit</button></Link>
            <button  className='delete' onClick={() => handleDelete(book.id) }>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booklist;
