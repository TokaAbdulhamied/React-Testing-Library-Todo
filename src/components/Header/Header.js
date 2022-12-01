import React from "react";
import "./Header.css";

export default function Header({ title, dataTestid }) {
  return (
    <>
      <h3 className="header">Welcom in</h3>
      <h1 className="header" data-testid={dataTestid}>
        {title}
      </h1>
    </>
  );
}
