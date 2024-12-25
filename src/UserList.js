import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserList(response.data);
      })

      .catch((error) => {
        console.log("Erreur lors de la récupération des données: ", error);
      });
  }, []);
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <strong>{user.name}:</strong> <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
