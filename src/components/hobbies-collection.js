import React from "react";

const HobbiesCollection = ({ allHobbies }) => {
  return (
    <div className='homeContainerHobby'>
      <h1>Hobbies Collection</h1>
      <div>
        {allHobbies.map((hobby) => {
          return (
            <div className='hobbyItem'>
              {Object.values(hobby).map((hob) => (
                <h4>{hob}</h4>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HobbiesCollection;
