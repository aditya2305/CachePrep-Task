import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./AddPost.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const AddPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState("");
  const [exp, setExp] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_POST",
      payload: {
        title: title,
        role: role,
        company: company,
        skills: skills,
        exp: exp,
        date: Date(),
      },
    });

    setTitle("");
    setRole("");
    setCompany("");
    setSkills("");
    setExp("");
    history.push("/");
  };

  return (
    <div>
      <div className="card addpostbody">
        <div className="card-body">
          <h6
            className="card-subtitle text-muted"
            style={{ textAlign: "center" }}
          >
            Share your interview experience
          </h6>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="formGroupExampleInput">Post Title*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Role Interviewed for*</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type here"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Company Interviewed at</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type here"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">Required Skills</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type here"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput">
                Interview Experience Details
              </label>
              <input
                type="text"
                className="form-control inputfield"
                placeholder="Type here"
                style={{ height: "300px" }}
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
            </div>
            <div
              className="custom-control custom-checkbox"
              style={{ marginBottom: "50px" }}
            >
              <input type="checkbox" className="custom-control-input" />
              <label className="custom-control-label" for="customCheck1">
                Post Anonymously
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "150px", marginLeft: "152px" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
