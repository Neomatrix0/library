import React,{useState} from 'react';
import axios from 'axios';


export default function CreateBook() {
  

    const [title,setTitle] = useState("")
    const [author,setAuthour] = useState("")

    const handleCreation=async(e)=>{
        e.preventDefault();
        const newBook={
            title,
            author
        }
         console.log(newBook)
        axios.post("http://localhost:3002/books",newBook)
        .then(response=>{
            console.log(response)
            alert("Your book has been successfully created!")
            setTitle("")
            setAuthour("")
        }).catch(error=>console.log(error))
    }

  return (
    <div className="create-book">
      <h2>Add a new book</h2>
      <form onSubmit={handleCreation} class="create-book-form ">
        <div className='formdiv'>
            
            <input
            type="text"
            name="title"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            placeholder='Title'/>
        </div>
        <div className='formdiv'>
            
            <input
            type="text"
            name="author"
            onChange={(e)=>setAuthour(e.target.value)}
            value={author}
            placeholder='Author'

            />
        </div>
        <button type="submit">Create Book</button>
      </form>
    </div>
  )
}
