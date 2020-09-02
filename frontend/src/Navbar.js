import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: "7vh",
        margin: "0",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "2rem",
        backgroundColor: "#607d8b",
        fontSize: "1.5rem",
      }}
    >
      <Link
        style={{
          marginRight: "auto",
          paddingLeft: "1rem",
          color: "#ffc107",
          textDecoration: "none",
        }}
        to="/"
      >
        ApplyCamp
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#ffc107",
          margin: "0 1rem",
        }}
        to="/listCompany"
      >
        Show
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "#ffc107",
        }}
        to="/addCompany"
      >
        Add
      </Link>
    </nav>
  );
};

export default Navbar;
