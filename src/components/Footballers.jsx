import React from "react";
import Individual from "./Individual";

function Footballers() {
  const footballers = [
    {
      id: 0,
      name: "Messi",
      position: "Forward",
      age: "32",
      club: "PSG",
    },
    {
      id: 1,
      name: "Ronaldo",
      position: "Forward",
      age: "32",
      club: "ManU",
    },
    {
      id: 2,
      name: "Neymar",
      position: "Forward",
      age: "32",
      club: "PSG",
    },
  ];

  return (
    <div>
      {footballers.map((footballer) => (
        <Individual key={footballer.id} footballer={footballer} />
      ))}
    </div>
  );
}

export default Footballers;