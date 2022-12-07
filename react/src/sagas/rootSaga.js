import { takeEvery } from "redux-saga/effects";
import { createBook, fetchBooks, removeBook } from "./books";

export function* rootSaga() {
    yield takeEvery("FETCH_BOOKS", fetchBooks)
    yield takeEvery("CREATE_BOOK", createBook)
    yield takeEvery("DELETE_BOOK", removeBook)
}
