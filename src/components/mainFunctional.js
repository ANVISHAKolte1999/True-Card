import React, { useState, useEffect } from "react";
import user from "../APIs/user";

function MainFunctional() {
  const [data, setData] = useState([]);

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setData(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => {
        return <div key={index}>name: {item.first_name}</div>;
      })}
    </div>
  );
}

export default MainFunctional;
