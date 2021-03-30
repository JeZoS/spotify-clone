import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import axios from "axios";

const GoodMorning = ({ token }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url =
      "https://api.spotify.com/v1/browse/categories?limit=5";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(url, config)
      .then((response) => {
        setCategories(response.data.categories.items);
      })
      .catch((err) => {
        console.log(err);
        console.log("error");
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="goodMorning">
      <h1>Good Morning</h1>
      <div className="morning-container">
        {categories.length > 0 &&
          categories.map((category, idx) => (
            <Tile
              key={idx}
              category={category}
              token={token}
            />
          ))}
      </div>
    </div>
  );
};

export default GoodMorning;
