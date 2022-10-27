import React from "react";

function Button(props) {
  return (
    <button
      id={props.id}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
      title={props.title}
    >
      {props.content}
    </button>
  );
}

export default Button;
