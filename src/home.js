import Axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="homeMain">
      <h1>Loging Success</h1>

      <div className="homeContainers">
        <h1>Enter your Hobbies </h1>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Submit</button>
      </div>

      <div className="homeContainers">
        <h1>Hobbies Collection</h1>
      </div>

      <div className="homeContainers">
        <h1>All Users</h1>
        {allUsers.map((user, id) => {
          return (
            <div>
              <h1>{user.username}</h1>
              <h1>{user.email}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
