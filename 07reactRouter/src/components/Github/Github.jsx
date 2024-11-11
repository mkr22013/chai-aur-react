import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mkr22013")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  //Above code can directly be used to make an api call using useEffect and fetch but we are using loader functionality of react router dom
  //check the router code in main.jsx file for loader implementation in github routing.
  var data = useLoaderData();

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="m-4 p-4 text-white bg-gray-600 text-center text-3xl">
        Github followers :{" "}
        {data.followers == 0 ? "No Followers, Try hard" : data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mkr22013");
  return response.json();
};
