import React from "react";

function Input(props) {
  return (
    <input
      autoFocus={props.autoFocus}
      type={props.type}
      className={props.className}
      placeholder={props.placeHolder}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      checked={props.checked}
      onKeyDown={props.onKeyDown}
    />
  );
}

export default Input;
