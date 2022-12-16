import React from 'react'
import CreateBookForm from "./components/Books/CreateBookForm";
import Books from "./components/Books/Books";

function BooksApp({onCreate, onDelete, books}) {
  return (
    <div className="wrapper books_wrapper">
    <h2 className="page_title">Books</h2>
      <CreateBookForm onCreate={onCreate}/>
      <Books onDelete={onDelete} books={books} />
    </div>
  )
}

export default BooksApp