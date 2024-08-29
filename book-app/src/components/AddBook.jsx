import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Title:", title, "Author:", author);
    if (title && author) {
        addBook({ title, author });
        console.log("Book added successfully"); 
        navigate('/books'); 
      } else {
        alert("Ju lutem plotësoni të gjitha fushat");
      }
  };

  return (
    <div>
      <h2>Add Book</h2>
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
        <button className='add'>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
