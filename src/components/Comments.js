import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

const Comments = ({ id }) => {
  const [editable, setEditable] = useState(false);
  const [editContent, setEditContent] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const textRef = useRef(null);

  const deleteComment = (cid) => {
    dispatch({
      type: "REMOVE_COMMENT",
      payload: cid,
    });
  };

  const editComment = (cid) => {
    dispatch({
      type: "UPDATE_COMMENT",
      payload: {
        id: id,
        commentid: cid,
        comment: editContent,
      },
    });
    setEditable(false);
    console.log(editContent);
  };

  const renderForm = (cid) => {
    if (editable === true) {
      return (
        <div className="input-group">
          <input
            onChange={(e) => setEditContent(e.target.value)}
            type="text"
            className="form-control"
            placeholder=""
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="button"
              value={editContent}
              onClick={() => {
                editComment(cid);
              }}
            >
              Done
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {state.comments.map((comment, index) => {
        if (comment.id === id && comment.comment !== "") {
          return (
            <ul className="list-group" key={index}>
              <li className="list-group-item">
                {" "}
                {comment.comment}
                <AiFillEdit
                  style={{ position: "absolute", right: "3rem" }}
                  onClick={() => {
                    setEditable(true);
                    renderForm(comment.commentid);
                  }}
                />
                <AiOutlineDelete
                  style={{ position: "absolute", right: "1rem" }}
                  onClick={() => deleteComment(comment.commentid)}
                />
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default Comments;
