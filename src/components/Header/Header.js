import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h3 className="header" data-testid="header-1">
        Welcom in
      </h3>
      <h1 className="header" data-testid="header-2">
        {title}
      </h1>
    </>
  );
}
