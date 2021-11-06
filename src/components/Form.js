import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
