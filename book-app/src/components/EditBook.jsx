import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditBook({ books, updateBook, }) {
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === parseInt(id));
  const [title, setTitle] = useState(bookToEdit.title);
  const [author, setAuthor] = useState(bookToEdit.author);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [bookToEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ id: parseInt(id), title, author });
    navigate('/books');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className='update' type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
