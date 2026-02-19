import React from "react";

const ProfileCard = (props) => {
  console.log(props);

  let { productName, price, color } = props;
  return (
    <div className="card">
      <h1>Profile Card</h1>
      <h3>Product Name :{productName} </h3>
      <h3>Price : {price}</h3>
      <h3>Color : {color}</h3>
      <button>Order Now</button>
    </div>
  );
};

export default ProfileCard;
