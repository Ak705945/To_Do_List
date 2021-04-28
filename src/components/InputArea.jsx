import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.functions[1]}
        type="text"
        value={props.functions[2]}
      />
      <button onClick={props.functions[0]}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
