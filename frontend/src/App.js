import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = fetch("/api/listCompany")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [setData]);

  return (
    <div style={{ background: "#00968866", height: "100vh" }}>
      <Navbar />
      <ul
        style={{
          margin: "2rem auto ",
          listStyle: "none",
        }}
      >
        {data &&
          data.map(({ name, _id, link }, index) => {
            return (
              <li key={_id}>
                <span>{index + 1}</span>
                <a style={{ marginLeft: "10px" }} key={_id} href={link}>
                  {name}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
