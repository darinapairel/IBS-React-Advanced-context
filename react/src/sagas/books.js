import { call, put } from 'redux-saga/effects'
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
    yield call(SERVER.delete, '/books/'+payload)
    yield call(fetchBooks)
}


// export const fetchBooks = async dispatch => {
//     let res = await SERVER.get('/books')
//     let books = res.data
//     dispatch({type: "FETCH_BOOKS_FULFILLED", payload: {books}})
// }

// export const createBook = book => async dispatch => {
//     await SERVER.post('books', book)
//     dispatch(fetchBooks)
// }

// export const removeBook = id => async dispatch => {
//     await SERVER.delete('/books/'+id)
//     dispatch(fetchBooks)
// }

