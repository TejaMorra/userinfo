import { useState } from "react";

function User() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");

  const addUser = () => {
    fetch("http://localhost:5000/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        role: role,
        country: country,
      }),
    }).then((res) => {
      console.log(res.json());
    });
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <table>
        <tr>
          <td>
            <span>First Name</span>
          </td>
          <td>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <span>Last Name</span>
          </td>
          <td>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <span>Role</span>
          </td>
          <td>
            <input value={role} onChange={(e) => setRole(e.target.value)} />
          </td>
        </tr>
        <tr>
          <td>
            <span>Country</span>
          </td>
          <td>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </td>
        </tr>
      </table>

      <div
        style={{
          marginTop: 50,
        }}
      >
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default User;
