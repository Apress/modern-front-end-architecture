import React from "react";

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
