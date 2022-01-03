import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AllUsers from "./components/allUsers";
import EnterHobby from "./components/enterHobby";
import HobbyCollection from "./components/hobbyCollection";
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
    const { hobby1, hobby2, hobby3, hobby4, hobby5 } = hobby;
    const hobbyArray = [hobby1, hobby2, hobby3, hobby4, hobby5];
    const filteredHobbyArray = hobbyArray.filter((hobby) => !!hobby);
    
    Axios.post("http://localhost:3003", filteredHobbyArray).then((res) => {
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
      <h1 style={{ height: "100px" }}>
        <LogOutButton /> Welcome To Hobbies Collection
      </h1>

      <EnterHobby
        hobby={hobby}
        handleChange={handleChange}
        submitHobbis={submitHobbis}
      />

      <HobbyCollection allHobbies={allHobbies} />

      <AllUsers allUsers={allUsers} />
    </div>
  );
};

export default Home;
