import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import LogOutButton from "./components/logoutButton";

const Home = () => {
  const [allUsers, setAllUsers] = useState([]);

  const [hobby, setHobby] = useState({
    hobby1: "",
    hobby2: "",
    hobby3: "",
    hobby4: "",
    hobby5: "",
  });

  const [allHobbies, setAllHobbies] = useState([]);

  const fetchAllUsers = () => {
    Axios.get("http://localhost:3003/")
      .then((response) => {
        // console.log(response.data);
        setAllUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAllHobbies = () => {
    Axios.get("http://localhost:3003/hobby")
      .then((response) => {
        setAllHobbies(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllHobbies();
  }, []);

  const submitHobbis = () => {
    Axios.post("http://localhost:3003", {
      hobby1: hobby.hobby1,
      hobby2: hobby.hobby2,
      hobby3: hobby.hobby3,
      hobby4: hobby.hobby4,
      hobby5: hobby.hobby5,
    }).then((res) => {
      fetchAllHobbies();
    });
    setHobby({
      hobby1: "",
      hobby2: "",
      hobby3: "",
      hobby4: "",
      hobby5: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHobby((pv) => {
      return { ...pv, [name]: value };
    });
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="homeMain">
      <h1 style={{ height: "100px" }}>
        <LogOutButton /> Welcome To Hobbies Collection
      </h1>

      <div className="homeContainers">
        <h1>Enter your Hobbies </h1>
        <input
          type="text"
          name="hobby1"
          value={hobby.hobby1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobby2"
          value={hobby.hobby2}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobby3"
          value={hobby.hobby3}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobby4"
          value={hobby.hobby4}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobby5"
          value={hobby.hobby5}
          onChange={handleChange}
        />
        <button onClick={submitHobbis}>Submit</button>
      </div>

      <div className="homeContainerHobby">
        <h1>Hobbies Collection</h1>
        <div>
          {allHobbies.map((hobby) => {
            return (
              <div className="hobbyItem">
                <h4>{hobby.hobby1}</h4>
                <h4>{hobby.hobby2}</h4>
                <h4>{hobby.hobby3}</h4>
                <h4>{hobby.hobby4}</h4>
                <h4>{hobby.hobby5}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="homeContainers">
        <h1>All Users</h1>
        {allUsers.map((user, id) => {
          return (
            <div className="hobbyItem">
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
