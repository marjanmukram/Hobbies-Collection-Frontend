import React from "react";

const HobbyCollection = ({ allHobbies }) => {
  return (
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
  );
};

export default HobbyCollection;
