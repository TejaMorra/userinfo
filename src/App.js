import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import User from "./User";
import UserList from "./UserList";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a href="/">Add User</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={User} />
        <Route path="/users" component={UserList} />
      </main>
    </Router>
  );
}

export default App;
