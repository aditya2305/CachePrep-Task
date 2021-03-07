import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./posts.css";
import { BiLike, BiDislike } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import RelatedPosts from "./RelatedPosts";
import Comments from "./Comments";
import uuid from "react-uuid";
import user from "../user.png";

const Post = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const state = useSelector((state) => state);
  const history = useHistory();

  const addComment = (id) => {
    if (comment === "") {
      return alert("Enter something");
    }
    dispatch({
      type: "ADD_COMMENT",
      payload: {
        id: id,
        comment: comment,
        commentid: uuid(),
      },
    });
    setComment("");
  };

  const toAddPost = () => {
    history.push("/addpost");
  };

  return (
    <>
      <div className="alignment">
        <div className="postsection">
          <div className="card shareexp">
            <div className="card-body">
              <h6
                to="/addpost"
                style={{ color: "#696969" }}
                onClick={toAddPost}
              >
                Share your Interview experiene with community
                <BsPencil style={{ marginLeft: "10px" }} />
              </h6>
            </div>
          </div>

          {state.posts
            .slice(0)
            .reverse()
            .map((post, index) => {
              return (
                <div className="card" key={index}>
                  <div className="forimage">
                    <img
                      className="d-flex mr-3"
                      src={user}
                      alt="Generic placeholder image"
                      style={{
                        position: "absolute",
                        left: "8px",
                        top: "15px",
                        width: "5%",
                      }}
                    />
                    <div className="card-body" key={post.id}>
                      <h6 className="card-subtitle text-muted">
                        Rohan Sinha, Web Developer, Amazon
                      </h6>
                      <p
                        className="card-subtitle mb-2 text-muted lead text-black-50"
                        style={{ fontSize: "15px", marginTop: "1px" }}
                      >
                        Posted on {post.date}
                      </p>
                      <h4 className="card-title">{post.title}</h4>
                      <h6 className="" style={{ color: "#12B0E8" }}>
                        {post.role}, {post.skills}, {post.company}
                      </h6>
                      <p className="card-text">{post.exp}</p>
                      <BiLike
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                      />
                      <BiDislike
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                      />
                      <div
                        style={{
                          paddingTop: "7px",
                          paddingBottom: "7px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "5px",
                          marginBottom: "10px",
                        }}
                      >
                        <div style={{ maxWidth: "98%", margin: "auto" }}>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Add your comment"
                              onChange={(e) => setComment(e.target.value)}
                            />

                            <div className="input-group-append">
                              <button
                                className="btn btn-primary"
                                type="button"
                                onClick={() => addComment(post.id)}
                              >
                                Add Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Comments id={post.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          <br />
        </div>
        <RelatedPosts />
      </div>
    </>
  );
};

export default Post;
