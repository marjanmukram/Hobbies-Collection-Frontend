import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AllUsers from "./components/all-users";
import EnterHobby from "./components/enter-hobby";
import HobbiesCollection from "./components/hobbies-collection";
import LogOutButton from "./components/logoutButton";
import hobbyJson from "./mocks/hobbies.json";
import usersJson from "./mocks/users.json";

const Home = () => {
  const [allUsers, setAllUsers] = useState(usersJson);
  const [allHobbies, setAllHobbies] = useState(hobbyJson);
  const [hobby, setHobby] = useState({
    hobby1: "",
    hobby2: "",
    hobby3: "",
    hobby4: "",
    hobby5: "",
  });

  const fetchAllUsers = () => {
    axios
      .get("http://localhost:3003/")
      .then((_response) => {
        setAllUsers(usersJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAllHobbies = () => {
    axios
      .get("http://localhost:3003/hobby")
      .then(() => {
        setAllHobbies(hobbyJson);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    fetchAllHobbies();
  }, []);

  const submitHobbies = () => {
    axios
      .post("http://localhost:3003", {
        hobby1: hobby.hobby1,
        hobby2: hobby.hobby2,
        hobby3: hobby.hobby3,
        hobby4: hobby.hobby4,
        hobby5: hobby.hobby5,
      })
      .then(() => {
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
    return <Redirect to='/login' />;
  }

  return (
    <div className='homeMain'>
      <LogOutButton />

      <Typography variant='h2'>Welcome To Hobbies Collection</Typography>

      <EnterHobby
        hobby={hobby}
        handleChange={handleChange}
        submitHobbies={submitHobbies}
      />

      <HobbiesCollection allHobbies={allHobbies} />

      <AllUsers allUsers={allUsers} />
    </div>
  );
};

export default Home;
