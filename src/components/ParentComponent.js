import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ParentComponent = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFChange={(e) => setFirstName(e.target.value)}
        handleLChange={(e) => setLastName(e.target.value)}
      />
      <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default ParentComponent;
