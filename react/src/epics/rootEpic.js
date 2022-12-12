import { flatMap } from "lodash";
import { ofType, combineEpics } from "redux-observable";
import { from, Observable } from "rxjs";
import { map, mapTo, switchMap } from "rxjs/operators";
import SERVER from '../actions/server'

export const fetchBooksEpic = (action$) => {
  return action$.pipe(
    ofType("FETCH_BOOKS"),
    switchMap(()=>from(SERVER.get("/books"))),
    // map((res) => ({type: "FETCH_BOOKS_FULFILLED", payload: { books: res.data }}))
    map((res) => {
      // debugger
      return {type: "FETCH_BOOKS_FULFILLED", payload: { books: res.data }}
    })
  )
}

export const fetchSelectionsEpic = (action$) => {
  return action$.pipe(
    ofType("FETCH_SELECTIONS"),
    switchMap(()=>from(SERVER.get("/selections"))),
    
    map((res) => {
      // debugger
      return {type: "FETCH_SELECTIONS_FULFILLED", payload: res.data }
    })
  )
}

export const rootEpic = combineEpics(
  fetchBooksEpic,
  fetchSelectionsEpic
)
// 39-73 is equal to 34-37
/* export const rootEpic = (action$) => {
  return action$.pipe(
    filter(),
    map((action)=>{
      debugger
    }),
    mapTo({type: "TYPE_END"})


  )

}
export const fetchDataEpic = (action$) => {

  action$.pipe(
    // рефакторинг, используя rx.js (map, combineLatest, flatMap)
  )

  // combineLatest check
  const books$ = fetchBooksEpic(action$) // вернет observable books$.payload.books
  const selections$ = fetchSelectionsEpic(action$) // аналог Promise


  /*return new Observable ((observer)=>{
    books$.subscribe(
      (value) => observer.next(value)
    )
    selections$.subscribe(
      (value) => observer.next(value)
    )
    // selections$.subscribe(observer.next)
    // debugger
    // observer.complete()
  })
}*/ 

export const simpleExample = () => {
  const books = new Promise ((res, rej)  => {
    res("books")
  })
  const selections = new Promise ((res, rej)  => {
    res("selections")
  })
  return new Promise((resolve, rej) => {
    Promise.all([books, selections]).then(
      resolve // or  values => resolve([values])
    )
  })
}
