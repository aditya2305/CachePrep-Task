import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Post from "./components/posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPost from "./components/AddPost";

function App() {
  return (
    <Router>
      <h1>Interview Experience</h1>

      {
        <div className="App">
          <Switch>
            <Route path="/addpost" component={AddPost} />
            <Route exact path="/" component={Post} />
          </Switch>
        </div>
      }
    </Router>
  );
}

export default App;
