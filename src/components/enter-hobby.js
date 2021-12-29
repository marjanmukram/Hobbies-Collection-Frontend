import React from "react";

const EnterHobby = ({ hobby, handleChange, submitHobbis }) => {
  return (
    <div className='homeContainers'>
      <h1>Enter your Hobbies </h1>
      <input
        type='text'
        name='hobby1'
        value={hobby.hobby1}
        onChange={handleChange}
      />
      <input
        type='text'
        name='hobby2'
        value={hobby.hobby2}
        onChange={handleChange}
      />
      <input
        type='text'
        name='hobby3'
        value={hobby.hobby3}
        onChange={handleChange}
      />
      <input
        type='text'
        name='hobby4'
        value={hobby.hobby4}
        onChange={handleChange}
      />
      <input
        type='text'
        name='hobby5'
        value={hobby.hobby5}
        onChange={handleChange}
      />
      <button onClick={submitHobbis}>Submit</button>
    </div>
  );
};

export default EnterHobby;
