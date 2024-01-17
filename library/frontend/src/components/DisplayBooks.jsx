import React,{useEffect,useState} from 'react';
import axios from 'axios';
import UpdateBookWindow from './UpdateBookWindow';

export default function DisplayBooks() {
    const [books,setBooks] = useState([]);
    const [showWindow, setShowWindow] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:3002/books')
        .then(response=>{
            console.log(response)
            setBooks(response.data)
        }).catch(error=>{
            console.log(error);
            })

    },[]);

    const deleteBook=(id)=>{
        axios.delete(`http://localhost:3002/books/${id}`)
        .then(response=>{
            console.log(response);
            setBooks(books.filter(book=>book.id!==id));
        })
        .catch(error=>{
            console.log(error);
            })
        }
        const updateBook=(id,updatedTitle,updatedAuthor)=>{
            axios.put(`http://localhost:3002/books/${id}`,{title:updatedTitle,author:updatedAuthor})
            .then(()=>{
                window.location.reload();
            })
            .catch(error=>{
                console.log(error);})}

    const openBook=(book)=>{
        setShowWindow(true)
        setCurrentBook(book)

    }

    const closeBook=()=>{
        setShowWindow(false);
        setCurrentBook(null)
    };

  return (
    <div className="display-books-container">
      <h1>Display the Books</h1>
      {
        books.map(book=>(
            <div className="book-item" key={book.id}>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <button className="button delete-button" onClick={()=>deleteBook(book.id)}>Delete</button>
                <button className="button edit-button" onClick={()=>openBook(book)}>Edit</button>

            </div>
        )

        )
      }
      {showWindow && currentBook && (
   <UpdateBookWindow
       show={showWindow}
       onClose={closeBook}
       onUpdate={updateBook}
       book={currentBook}
   />
)}
    </div>
  )
}
