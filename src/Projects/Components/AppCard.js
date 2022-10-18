import React from "react";

const AppCard = ({ id, image, option }) => {
  return (
    <div>
      <p>{id}</p>
      <img src={image} alt="" className="h-72 w-72" />
      <p>{option}</p>
    </div>
  );
};

export default AppCard;
