import {
  ADD_COMMENT,
  ADD_POST,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from "./actionType";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const removeComment = (commentid) => ({
  type: REMOVE_COMMENT,
  payload: commentid,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const updateComment = (update) => ({
  type: UPDATE_COMMENT,
  payload: update,
});
