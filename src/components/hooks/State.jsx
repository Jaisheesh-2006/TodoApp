import React from "react";

const State = () => {
  const users = [
    { name: "Rahul", age: 22 },
    { name: "Rohit", age: 23 },
    { name: "Sachin", age: 24 },
  ];
  const userCount = users.length;
  const avgAge =
    users.reduce((acc, currEle) => acc + currEle.age, 0) / userCount;
  return (
    <div>
      <h1>Users Information</h1>
      <ul>
        {users.map((currEle, index) => {
          return (
            <li key={index}>
              <p> Name :{currEle.name}</p>
              <p> Age :{currEle.age}</p>
            </li>
          );
        })}
      </ul>

      <p>Total number of users : {userCount}</p>
      <p>Average Age of users : {avgAge}</p>
    </div>
  );
};

export default State;
