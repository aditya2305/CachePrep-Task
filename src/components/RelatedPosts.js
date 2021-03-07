import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./posts.css";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const RelatedPosts = () => {
  const state = useSelector((state) => state);

  return (
    <div className="relatedPosts">
      <div className="card expandrelate">
        <div className="input-group" style={{ width: "80%", margin: "auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search question with keywords"
            style={{ borderRadius: "15px", marginTop: "18px" }}
          />
        </div>
        <div className="card-body font-weight-bold">Top Searched Items</div>
        <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
          {state.posts.map((post) => {
            return (
              <Link to="" key={post.id}>
                {post.title} <br />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
