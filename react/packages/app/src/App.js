import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

//components
import ErrorModal from "./components/Errors/ErrorModal"

//styles
import './App.css';

import BooksApp from 'books';
import SelectionsApp from 'selections';


function App() {
  const selections = useSelector(state => state.selections)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "FETCH_BOOKS" })
    dispatch({ type: "FETCH_SELECTIONS"})
  }, [])

  return (
    <>
    <SelectionsApp />
    <BooksApp />
    <ErrorModal />
    </>
  );
}

export default App;
