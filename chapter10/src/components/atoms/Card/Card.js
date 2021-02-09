import React from "react";
import "./Card.css";

export default function Card({ children, highlight }) {
  return <div className="card">{children}</div>;
}
