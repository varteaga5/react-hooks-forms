import React from "react";

const DisplayData = (props) => {
  return (
    <div>
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
    </div>
  );
};

export default DisplayData;
