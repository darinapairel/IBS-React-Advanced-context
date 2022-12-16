import { call, put, select, take  } from 'redux-saga/effects'
import SERVER from '../actions/server'

export function* fetchBooks() {
    const res = yield call(SERVER.get, '/books')
    const books = res.data
    yield put({type: "FETCH_BOOKS_FULFILLED", payload: { books } })
}

export function* createBook({ payload }) {
    yield call(SERVER.post, 'books', payload)
    yield call(fetchBooks)
}

export function* removeBook({ payload }) {
    const isBookBlocked =  yield select(
        (state) =>  state.blockedBooks.includes(payload)
    );
    if (isBookBlocked) {
        yield put({type: "SHOW_ERROR_MODAL", payload: {message: "На текущий момент книга заблокирована для удаления!!!!!!!"} })
        yield take("ADD_TO_SELECTION_FULFILLED")
    }
    yield call(SERVER.delete, '/books/'+payload)
    yield call(fetchBooks)
}