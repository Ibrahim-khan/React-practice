import React, {useState, useReducer} from 'react';

const booksData = [
    { id: 1, name: "Pather Panchal" },
    { id: 2, name: "Padma Nadir Majhi" },
    { id: 3, name: "Rich Dad Poor Dad" },
];

    const Modal = ({ modalText }) => {
       return <p>{modalText}</p>;
    };

    const reducer = (state, action) => {
        //action.type, action.payload
        if (action.type === "ADD"){
            const allBooks = [...state.books, action.payload]
            return {
                ...state,
                books: allBooks,
                isModalOpen: true,
                modalText: "Books is added"
            }
        }
        if (action.type === "REMOVE"){

        }
        return state;
    }

const UseReducer = () => {
    // const [books, setBooks] = useState(booksData);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalText, setModalText] = useState("");
    const [bookState, dispatch] = useReducer (reducer, {
        books: booksData,
        isModalOpen: false,
        modalText:""
    })
    const [bookName, setBookName] = useState("");


    const handleSubmit = (e) => {
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch ({type:"ADD", payload: newBook});
        setBookName("");
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

            <button value="Submit">Add Book</button>
        </form>

        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const {id, name} = book;
        return <li key={id}>{name}</li>;
      })}
    </div>
  )
}

export default UseReducer
