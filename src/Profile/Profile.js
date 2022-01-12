import React from "react";

function Profile({ name, age, profession, Data }) {
  return (
    <div>
      <h1>user Profile</h1>
      <button onClick={Data}>click here</button>
      <p>{name}</p>
      <p>{age}</p>
      <p>{profession}</p>
    </div>
  );
}

export default Profile;
