import { fork, all, takeEvery } from "redux-saga/effects";
import { createBook, fetchBooks, removeBook } from "./books";
import { fetchSelections, addBookToSelection, createSelection, removeSelection, removeBookFromSelection } from './selections'

export function* rootSaga() {
    yield takeEvery("FETCH_BOOKS", fetchBooks)
    yield takeEvery("CREATE_BOOK", createBook)
    yield takeEvery("DELETE_BOOK", removeBook)
    yield takeEvery("FETCH_SELECTIONS", fetchSelections)
    yield takeEvery("ADD_BOOK_TO_SELECTION", addBookToSelection)
    yield takeEvery("CREATE_SELECTION", createSelection)
    yield takeEvery("REMOVE_SELECTION", removeSelection)
    yield takeEvery("REMOVE_BOOK_FROM_SELECTION", removeBookFromSelection)
}
