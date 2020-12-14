import { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div>
        <table
          className="t1"
          style={{ width: "20%", border: "1px solid black" }}
        >
          <tr className="t1">
            <th className="t1">First Name</th>
            <th className="t1">Last Name</th>
            <th className="t1">Role</th>
            <th className="t1">Country</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td className="t1">{user.firstName}</td>
              <td className="t1">{user.lastName}</td>
              <td className="t1">{user.role}</td>
              <td className="t1">{user.country}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default UserList;
