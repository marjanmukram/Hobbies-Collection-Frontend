import Axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");
  const [hobby4, setHobby4] = useState("");
  const [hobby5, setHobby5] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3003")
      .then((response) => {
        setAllUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHobbis = () => {
    Axios.post("http://localhost:3003", {
      hobby1: hobby1,
      hobby2: hobby2,
      hobby3: hobby3,
      hobby4: hobby4,
      hobby5: hobby5,
    });
  };

  return (
    <div className="homeMain">
      <h1>Loging Success</h1>

      <div className="homeContainers">
        <h1>Enter your Hobbies </h1>
        <input
          type="text"
          onChange={(e) => {
            setHobby1(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setHobby2(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setHobby3(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setHobby4(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setHobby5(e.target.value);
          }}
        />
        <button onClick={submitHobbis}>Submit</button>
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
