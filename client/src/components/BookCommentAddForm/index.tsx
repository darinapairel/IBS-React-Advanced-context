import React,  { FC, useState }  from 'react'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {ADD_BOOK_COMMENT_MUTATION} from '../../containers/BookList/graphql'
import {ME} from '../../containers/Auth/graphql'
import {getMe} from '../../containers/Auth/__generated__/getMe'
import {addNewBookComment} from '../../containers/BookList/__generated__/addNewBookComment'

const BookCommentAddForm: FC<{bookId: string}> = ({bookId}) => {
  const [comment, setComment] = useState('')
  const {data: dataME, error: errorME, loading: loadingME} = useQuery<getMe>(ME)
  const [addComment] = useMutation<addNewBookComment>(ADD_BOOK_COMMENT_MUTATION) //{data, error, loading}
  
  if (loadingME) return <div>Loading...</div>
  if (errorME) return <div>ERROR</div>
  
  return (
    <div>
      <form onSubmit={()=>{addComment({
        variables: {
          comment: {
            bookId,
            author: dataME?.me?.email,
            text: comment
          }
        }
      })}}>
        <textarea name="" id="" onChange={(e)=>setComment(e.target.value)}></textarea>
        <button type="submit">Добавить</button>
      </form>
      
    </div>
  )
}

export default BookCommentAddForm