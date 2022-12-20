/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewComment } from "./../../../__generated__/global-types";

// ====================================================
// GraphQL mutation operation: addNewBookComment
// ====================================================

export interface addNewBookComment_addComment_comments {
  __typename: "Comment";
  id: string;
  author: string;
  text: string;
}

export interface addNewBookComment_addComment {
  __typename: "Book";
  id: string;
  comments: (addNewBookComment_addComment_comments | null)[] | null;
  pubDate: any | null;
}

export interface addNewBookComment {
  addComment: addNewBookComment_addComment;
}

export interface addNewBookCommentVariables {
  comment: NewComment;
}
