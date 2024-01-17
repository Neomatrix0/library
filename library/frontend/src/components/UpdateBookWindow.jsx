
import React, { useState } from 'react';

export default function UpdateBookWindow({book, onClose, onUpdate, show}) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);

    if (!show) {
        return null;
    }

    return (
        <div className="update-book-modal">
            <div className="modal-content">
                <h2>Update Book</h2>
                <label htmlFor="title">Title</label>
                <input 
                    id="title"
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <label htmlFor="author">Author</label>
                <textarea 
                    id="author"
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <div className="button-group">
                    <button className="save-button" onClick={() => onUpdate(book.id, title, author)}>Save</button>
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
