import { call, put } from 'redux-saga/effects'
import SERVER from '../actions/server'

export function* fetchSelections() {
    const res = yield call(SERVER.get, '/selections')
    const selections = res.data
    yield put({ type: "FETCH_SELECTIONS_FULFILLED", payload: selections })
}

export function* addBookToSelection({ payload }) {
    const { selectionId, bookId } = payload
    yield call(SERVER.post, "/selections/"+selectionId+"/books", [bookId])
    yield put({ type: "ADD_TO_SELECTION_FULFILLED", payload: bookId })
    yield call(fetchSelections)
}

export function* createSelection({ payload }) {
    yield call(SERVER.post, '/selections', payload)
    yield call(fetchSelections)
}

export function* removeSelection({ payload }) {
    yield call(SERVER.delete, '/selections/'+payload )
    yield call(fetchSelections)
}

export function* removeBookFromSelection({ payload }) {
    const { bookId, selectionId } = payload
    yield call(SERVER.delete, "/selections/"+selectionId+"/books/"+bookId)
    yield call(fetchSelections)
}
