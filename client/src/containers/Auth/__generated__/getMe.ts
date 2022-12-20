/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMe
// ====================================================

export interface getMe_me {
  __typename: "User";
  id: string;
  email: string;
  login: string;
}

export interface getMe {
  me: getMe_me | null;
}
