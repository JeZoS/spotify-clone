import React from "react";
import Card from "./Card";
import "./more.css";
const More = () => {
  const data = [
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnwDBvHQzhfaMsveBXzQYQIqgWFCCirkNHA&usqp=CAU",
      title: "Just Hits",
      subtitle: "Time for your FAVOURITE tracks... ",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BDF7kKlQiOYEroWW2DMqVlYO-hkMEc-JOg&usqp=CAU",
      title: "Pop shots",
      subtitle: "Get in the zone with these current jems",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedfU3UamJ9uGiOuSXXaz9h6Rl--ouvpXgwg&usqp=CAU",
      title: "Cyberpunk",
      subtitle: "Hard, EDMs, Beats in your favs list...",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-A7Sr34fVzBPCAC8AlolcLBoBs4XGdP-Agw&usqp=CAU",
      title: "Mega hits",
      subtitle: "Meaga mix of 75 of your favs...",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYztie6zwYSpDw-d8vkhmOABbp59TP94wBUQ&usqp=CAU",
      title: "Time Machine",
      subtitle:
        "Travel back to time for the perfect cuts...",
    },
  ];
  return (
    <div className="more">
      <div className="ttle">
        <div>
          <h1>More Of What You Like</h1>
          <p>Hear a little bit of everything you love</p>
        </div>
        <div>
          <h6>See all</h6>
        </div>
      </div>
      <div className="recent-container">
        {data.map((d, idx) => (
          <Card key={idx} card={d} />
        ))}
      </div>
    </div>
  );
};

export default More;
