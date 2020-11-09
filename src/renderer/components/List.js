import React from "react";
import Card from "./Card";

function List({ name, desc, cards }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
}

export default List;
