import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
    return (
        <div className="hmain">
            <h1>Virtual Private Library</h1>
            <p>How can I help you today?</p>
            <Link to="/books">Get My Books </Link>
            <Link to="/create">Add a New Book</Link>
            
        </div>
    );
}

export default Main;
