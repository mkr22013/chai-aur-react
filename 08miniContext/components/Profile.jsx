import React, { useContext } from "react";
import UserContext from "../src/context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  //console.log("user value in profile component : ", user.userName);

  if (!user) {
    return (
      <>
        <H2>Profile</H2>
        <div className="m-4 p-4">
          <h2 className="text-center text-3xl font-bold">Please login</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Profile</h2>
      <div className="m-4 p-4 text-3xl">
        <h2 className="text-center text-3xl font-bold">
          Welcome {user.userName}, Your password is {user.password}
        </h2>
      </div>
    </>
  );
}

export default Profile;
