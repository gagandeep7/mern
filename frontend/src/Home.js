import React from "react";
import "normalize.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div style={{ background: "#00968866", height: "100vh" }}>
      <Navbar />
      <main
        style={{
          margin: "3rem auto",
          display: "block",
          width: "30%",
          fontSize: "1.4rem",
          textAlign: "center",
          border: "1px solid black",
          padding: "2rem",
          borderRadius: "1%",
          backgroundColor: "#9E9E9E",
          textOverflow: "ellipsis",
          height: "20vh",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        <h3>Welcome to ApplyCamp</h3>
        <p>You can apply to one of the best companies</p>
      </main>
    </div>
  );
};

export default Home;
