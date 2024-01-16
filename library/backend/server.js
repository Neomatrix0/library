import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const db= mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root123',
    database: 'library'
    //password:'root123',
    

})


const app = express();
app.use(cors());
app.use(express.json());

app.post('/books',(req,res)=>{
    const {title,author} = req.body;
    db.query(
        "INSERT INTO books (title,author) VALUES (?,?)",
        [title,author],
        (err)=>{
            if(err){
                console.log(err);
            }else{ 
                res.send('Values Inserted');
            }
        }
    )
})

app.get('/books',(req,res)=>{
    db.query('SELECT * FROM books',(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        "DELETE FROM books WHERE id = ?",
        [id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error deleting the book');
            } else {
                if (result.affectedRows === 0) {
                    // No rows affected means no book was found with the given ID
                    res.status(404).send('Book not found');
                } else {
                    res.send('Book deleted successfully');
                }
            }
        }
    );
});
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    // Constructing SQL query to update book
    db.query(
        "UPDATE books SET title = ?, author = ? WHERE id = ?",
        [title, author, id],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error updating the book');
            } else {
                if (result.affectedRows === 0) {
                    // No rows affected means no book was found with the given ID
                    res.status(404).send('Book not found');
                } else {
                    res.send('Book updated successfully');
                }
            }
        }
    );
});

app.listen(3002,()=>{
    console.log('Server is running on port 3002');
})