import React from "react";
import Tile from "./Tile";

const Factory = (props) => {
  const getRandomRotation = () => Math.random() * 40 - 20;

  if (props.contents.length == 1) {
    return (
      <div className={props.className}>
        {props.contents[0] !== undefined && (
          <Tile
            className={"tile tile" + props.contents[0]}
            style={{
              position: "sticky",
            }}
          />
        )}{" "}
      </div>
    );
  }

  return (
    <div className={props.className}>
      {props.contents[0] !== undefined && (
        <Tile
          className={"tile tile" + props.contents[0]}
          style={{
            left: "46.5025px",
            top: "145.497px",
            transform: `rotate(${getRandomRotation()}deg)`,
          }}
        />
      )}
      {props.contents[1] !== undefined && (
        <Tile
          className={"tile tile" + props.contents[1]}
          style={{
            left: "46.5025px",
            top: "46.5025px",
            transform: `rotate(${getRandomRotation()}deg)`,
          }}
        />
      )}
      {props.contents[2] !== undefined && (
        <Tile
          className={"tile tile" + props.contents[2]}
          style={{
            top: "46.5025px",
            left: "145.497px",
            transform: `rotate(${getRandomRotation()}deg)`,
          }}
        />
      )}
      {props.contents[3] !== undefined && (
        <Tile
          className={"tile tile" + props.contents[3]}
          style={{
            left: "145.497px",
            top: "145.497px",
            transform: `rotate(${getRandomRotation()}deg)`,
          }}
        />
      )}
    </div>
  );
};
export default Factory;
