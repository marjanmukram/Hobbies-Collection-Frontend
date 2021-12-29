import React from "react";

const AllUsers = ({ allUsers }) => {
  return (
    <div className='homeContainers'>
      <h1>All Users</h1>
      {allUsers.map((user, id) => {
        return (
          <div className='hobbyItem'>
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
  );
};

export default AllUsers;
