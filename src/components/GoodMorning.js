import React from "react";
import Tile from "./Tile";

const GoodMorning = () => {
  const data = [
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRp0Q2drziIo5SVV9RJj7Xrm1R7hK9Q2jTtQ&usqp=CAU",
      title: "Hindi",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV8Ajn3vkBHuNIpBPR6fL_OE_eYrnIWmbSQ&usqp=CAU",
      title: "Hard",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFjYnWk2Qw3UdUy8sjhn2XwCumAdxoXWjxQ&usqp=CAU",
      title: "Sugar Radio",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvFXeiW0Z8xIYct5ZrZXOyi5QpJ34wCB90A&usqp=CAU",
      title: "Country Gold",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_FMIJRUPmBzZj0MBGnddUX4kGP2_LUMsbQ&usqp=CAU",
      title: "Daydream Radio",
    },
  ];
  return (
    <div className="goodMorning">
      <h1>Good Morning</h1>
      <div className="morning-container">
        {data.map((tile, idx) => (
          <Tile key={idx} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default GoodMorning;
