import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation signUser($email: String!) {
    login(email: $email)
  }
`
export const ME = gql`
  query getMe {
    me {
      id
      email
      login
    }
  }
`