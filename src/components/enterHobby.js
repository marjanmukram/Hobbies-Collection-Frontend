import React from "react";

const EnterHobby = ({ hobby, handleChange, submitHobbis }) => {
  return (
    <div className="homeContainers">
      <h1>Enter your Hobbies </h1>
      <input
        type="text"
        name="hobby1"
        value={hobby.hobby1}
        autoComplete="off"
        onChange={handleChange}
      />
      <input
        type="text"
        name="hobby2"
        value={hobby.hobby2}
        autoComplete="off"
        onChange={handleChange}
      />
      <input
        type="text"
        name="hobby3"
        value={hobby.hobby3}
        autoComplete="off"
        onChange={handleChange}
      />
      <input
        type="text"
        name="hobby4"
        value={hobby.hobby4}
        autoComplete="off"
        onChange={handleChange}
      />
      <input
        type="text"
        name="hobby5"
        value={hobby.hobby5}
        autoComplete="off"
        onChange={handleChange}
      />
      <button onClick={submitHobbis}>Submit</button>
    </div>
  );
};

export default EnterHobby;
