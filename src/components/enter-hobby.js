import React from "react";

const EnterHobby = ({ hobby, handleChange, submitHobbies }) => {
  return (
    <div className='homeContainers'>
      <h1>Enter your Hobbies </h1>
      {Object.values(hobby).map((hob, index) => {
        return (
          <input
            type='text'
            name={`hobby${index}`}
            value={hob}
            onChange={handleChange}
          />
        );
      })}
      <button onClick={submitHobbies}>Submit</button>
    </div>
  );
};

export default EnterHobby;
