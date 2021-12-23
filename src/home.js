import Axios from "axios";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [hobby1, setHobby1] = useState("");
  const [hobby2, setHobby2] = useState("");
  const [hobby3, setHobby3] = useState("");
  const [hobby4, setHobby4] = useState("");
  const [hobby5, setHobby5] = useState("");

  const [allHobbies, setAllHobbies] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/")
      .then((response) => {
        // console.log(response.data);
        setAllUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [allUsers]);

  useEffect(() => {
    Axios.get("http://localhost:3003/hobby")
      .then((response) => {
        setAllHobbies(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [allHobbies]);

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
        {allHobbies.map((hobby) => {
          return (
            <div>
              <h4>{hobby.hobby1}</h4>
              <h4>{hobby.hobby2}</h4>
              <h4>{hobby.hobby3}</h4>
              <h4>{hobby.hobby4}</h4>
              <h4>{hobby.hobby5}</h4>
            </div>
          );
        })}
      </div>

      <div className="homeContainers">
        <h1>All Users</h1>
        {allUsers.map((user, id) => {
          return (
            <div>
              <ui>
                <h4>
                  <li>
                    Username:{user.username} || Email: {user.email}
                  </li>
                </h4>
              </ui>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
