import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
const Add = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const handleClick = () => {
    const Data = {
      name,
      link,
    };
    fetch("/api/addCompany", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(Data), // body data type must match "Content-Type" header
    }).then(() => {
      setLink("");
      setName("");
      alert("Submitted Succesfully");
    });
  };
  return (
    <div style={{ background: "#00968866", height: "100vh" }}>
      <Navbar />
      <div
        style={{
          margin: " 3rem auto",
          width: "40% ",
          height: "30vh",
          textAlign: "center",
          border: "1px solid black",
          padding: "2rem",
          borderRadius: "1%",
          backgroundColor: "#9E9E9E",
        }}
      >
        <h1>Enter INFO</h1>
        <label style={{ display: "block" }} htmlFor="name">
          enter name
        </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="info"
        />
        <label style={{ display: "block" }} htmlFor="link">
          enter link
        </label>
        <input
          type="text"
          onChange={(e) => setLink(e.target.value)}
          value={link}
          id="link"
        />
        <br />
        <button
          style={{ textAlign: "center", marginTop: "1rem" }}
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
