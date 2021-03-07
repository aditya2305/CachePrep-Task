import { ADD_POST } from "../action/actionType";
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT,
} from "../action/actionType";
import uuid from "react-uuid";

const id = uuid();

const postState = [
  {
    id: id,
    title: "Interview for Data Science",
    role: "Data Scientist",
    company: "HCL",
    skills: "Python",
    exp: "I was very nervous and thrilled at the same time",
    date: Date(),
  },
];

const postReducer = (state = postState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const commentState = [
  {
    id: id,
    comment: "",
    commentid: uuid(),
  },
];

export const commentReducer = (state = commentState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];

    case REMOVE_COMMENT:
      return state.filter((comment) => comment.commentid !== action.payload);

    case UPDATE_COMMENT:
      return [
        ...state.filter(
          (comment) => comment.commentid !== action.payload.commentid
        ),
        action.payload,
      ];

    default:
      return state;
  }
};

export default postReducer;
