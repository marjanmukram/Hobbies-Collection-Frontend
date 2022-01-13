import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import AllUsers from "./components/allUsers";
import EnterHobby from "./components/enterHobby";
import HobbyCollection from "./components/hobbyCollection";
import SearchBar from "./components/searchBar";
import { UserContext } from "./App";

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
  const userDetails = useContext(UserContext);

  const [hobbySearchWord, setHobbySearchWord] = useState("");
  const [searchHobby, setSearchHobby] = useState([]);

  const [userSearchWord, setUserSearchWord] = useState("");
  const [searchUser, setSearchUser] = useState([]);

  const fetchAllUsers = () => {
    Axios.get("http://localhost:3003/")
      .then((response) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllHobbies();
  }, []);

  useEffect(() => {
    if (!hobbySearchWord) {
      setSearchHobby(allHobbies);
      return;
    }
    setSearchHobby(
      searchHobby.filter((hby) => hby.hobby1.includes(hobbySearchWord))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allHobbies, hobbySearchWord]);

  useEffect(() => {
    if (!userSearchWord) {
      setSearchUser(allUsers);
    } else {
      setSearchUser(() =>
        allUsers.filter((user) => user.username.includes(userSearchWord))
      );
    }
  }, [allUsers, userSearchWord]);

  const submitHobbis = () => {
    userDetails.setUser("Amal");
    // const {hobby1, hobby2, hobby3, hobby4, hobby5} = hobby
    // const hobbyArry = [
    //   hobby1,
    //   hobby2,
    //   hobby3,
    //   hobby4,
    //   hobby5,
    // ];                             we can destructure hobbyArray as line no 51 to 58

    const hobbyArry = [
      hobby.hobby1,
      hobby.hobby2,
      hobby.hobby3,
      hobby.hobby4,
      hobby.hobby5,
    ];

    const hobbyArrayFilter = hobbyArry.filter((hobby) => !!hobby);

    // const removeDup = [...new Set(hobbyArrayFilter)];

    const hobbyRemoveDup = hobbyArrayFilter.filter(function (item, index) {
      return hobbyArrayFilter.indexOf(item) === index;
    });

    const hobbyRemoveDupTrimmed = hobbyRemoveDup.map((hobby) => hobby.trim());

    Axios.post("http://localhost:3003", hobbyRemoveDupTrimmed).then((res) => {
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

  // if (!localStorage.getItem("token")) {
  //   return <Redirect to='/login' />;
  // }
  return (
    <div className='homeMain'>
      <h1 style={{ height: "100px" }}>
        <SearchBar
          setHobbySearchWord={setHobbySearchWord}
          setUserSearchWord={setUserSearchWord}
        />
        Welcome To Hobbies Collection
      </h1>

      <EnterHobby
        hobby={hobby}
        handleChange={handleChange}
        submitHobbis={submitHobbis}
      />

      <HobbyCollection allHobbies={searchHobby} />

      <AllUsers allUsers={searchUser} />
    </div>
  );
};

export default Home;
