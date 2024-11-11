import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="m-4 bg-gray-500 text-white text-center font-bold text-3xl p-4">
      User : {userid}
    </div>
  );
}

export default User;
