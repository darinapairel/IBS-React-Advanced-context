import { takeEvery } from "redux-saga/effects";
import { createBook, fetchBooks, removeBook } from "./books";
import {
    addBookToSelection,
    createSelection,
    fetchSelections,
    removeBookFromSelection,
    removeSelection
} from "./selections";

export function* rootSaga() {
    yield takeEvery("FETCH_BOOKS", fetchBooks)
    yield takeEvery("CREATE_BOOK", createBook)
    yield takeEvery("DELETE_BOOK", removeBook)
    yield takeEvery("FETCH_SELECTIONS", fetchSelections)
    yield takeEvery("CREATE_SELECTION", createSelection)
    yield takeEvery("REMOVE_SELECTION", removeSelection)
    yield takeEvery("ADD_TO_SELECTION", addBookToSelection)
    yield takeEvery("REMOVE_FROM_SELECTION", removeBookFromSelection)
}