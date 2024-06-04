import React, {useState, useReducer} from 'react';
import { reducer } from './Reducer';

const booksData = [
    { id: 1, name: "Pather Panchal" },
    { id: 2, name: "Padma Nadir Majhi" },
    { id: 3, name: "Rich Dad Poor Dad" },
];

    const Modal = ({ modalText }) => {
       return <p>{modalText}</p>;
    };

    
const UseReducer = () => {
    
    const [bookState, dispatch] = useReducer (reducer, {
        books: booksData,
        isModalOpen: false,
        modalText:""
    });
    const [bookName, setBookName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch ({type:"ADD", payload: newBook});
        setBookName("");
    };

    const removeBook = (id) => {
      dispatch({type:"REMOVE", payload: id})
    };

  return (
    <div>
      <h2>User Reducer</h2>
      <h3>Book List</h3>

        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={bookName} 
            onChange={(e) => {
                setBookName(e.target.value);
                }} 
            />

            <button type="Submit">Add Book</button>
        </form>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const {id, name} = book;
        return <li key={id}>
          {name}
          <button onClick = {() => {removeBook(id)}}>Remove</button>
          </li>;
      })}
    </div>
  )
}

export default UseReducer
