import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card
        key={monster.id}
        id={monster.id}
        monster={monster.name}
        email={monster.email}
      />
    ))}
  </div>
);
