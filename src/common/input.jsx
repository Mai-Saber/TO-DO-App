import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeHolder}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
    />
  );
}

export default Input;
