import SERVER from "../actions/server";
import { call, put, delay } from 'redux-saga/effects'
import {fetchBooks} from "./books";

export function* fetchSelections() {
    const res = yield call(SERVER.get, '/selections')
    const selections = res.data
    yield put({ type: "FETCH_SELECTIONS_FULFILLED", payload: selections })
}

export function* createSelection({ payload }) {
    yield call(SERVER.post, 'selections', payload)
    yield call(fetchSelections)
}

export function* removeSelection({ payload }) {
    yield call(SERVER.delete, '/selections/'+payload)
    yield call(fetchSelections)
}

export function* addBookToSelection({ payload }) {
    yield delay(10000)
    yield call(SERVER.post, "/selections/"+payload.selectionId+"/books", [payload.bookId])
    yield  put({type: "ADD_TO_SELECTION_FULFILLED", payload: payload.bookId})
    yield call(fetchSelections)
}

export function* removeBookFromSelection({ payload }) {
    yield call(SERVER.delete, "/selections/"+payload.selectionId+"/books/"+payload.bookId)
    yield call(fetchSelections)
}
