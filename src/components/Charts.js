import React from "react";
import Card from "./Card";

const Charts = () => {
  const data = [
    {
      file:
        "https://i.pinimg.com/236x/f8/2a/38/f82a388d033e33b6e757765af23d1a56--abel-makkonen-bae-quotes.jpg",
      title: "Billboard Hits",
      subtitle: "Top hits this week",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwywTbvu3baJpJzhbxzfMhw3wc2UlXkcjEfivl-gxXqvbdFQNUOC6IXTfohOzT9-EEH68&usqp=CAU",
      title: "Raps",
      subtitle:
        "Listen to top rappers from all over the verse.",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCu762MSLGyr7NzIdNMijuhy9cXIivm17WQ&usqp=CAU",
      title: "Top POP",
      subtitle: "Pop hits every week",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaRXXtcNZVrBKb4NkMV0WpnbrsS4g5OLUbg&usqp=CAU",
      title: "JaZZ hits",
      subtitle: "Feel the JAZZ'ies",
    },
    {
      file:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_pItO6qbQf7Ntqa84espszEdVZKGcUOeUQ&usqp=CAU",
      title: "Hype",
      subtitle: "Whaaaaaaaaaaat!?",
    },
  ];

  return (
    <div className="more">
      <div className="ttle">
        <div>
          <h1>Charts</h1>
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

export default Charts;
