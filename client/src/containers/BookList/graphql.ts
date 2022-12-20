import { gql } from '@apollo/client'

export const GET_ALL_BOOKS = gql`
  query getAllBooks {
    allBooks {
      id
      title
      author {
        firstname
        lastname
      }
    }
  }
`
export const ADD_BOOK_COMMENT_MUTATION = gql`
  mutation addNewBookComment($comment: NewComment!) {
    addComment(comment: $comment) {
      id
      comments {
        id
        author
        text
      }
      pubDate
    }
  }
`