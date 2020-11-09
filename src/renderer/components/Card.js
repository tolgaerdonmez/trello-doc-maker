import React from "react";
import Checklist from "./Checklist";

function Card({ name, checklists, ...props }) {
  return (
    <div>
      <h4>{name}</h4>

      {checklists.length ? (
        checklists.map((checklist) => (
          <Checklist key={checklist.id} {...checklist} />
        ))
      ) : (
        <p>Checklist yok</p>
      )}
    </div>
  );
}

export default Card;
