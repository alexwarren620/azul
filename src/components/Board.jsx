import React, { useEffect, useState } from "react";
import "../App.css";
import Factory from "./Factory";

const Board = () => {
  // Gamestate
  const [score, setScore] = useState([0, 0]);
  const [tileBag, setTileBag] = useState([20, 20, 20, 20, 20]);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const [factories, setFactories] = useState([
    [0, 1, 2, 3], [1, 1, 4, 5]
  ]);
  
  const [center, setCenter] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 1,
  });

  const [tilingArea, setTilingArea] = useState([
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [wall, setWall] = useState([[0, 0, 0, 0, 0] * 5]);

  useEffect(() => {
    console.log(factories);
  }, [factories]);

  // PlayerMove(Player, Factory, Tile, Row)
  //   - Get group of tiles from factory
  //   - Place tile in tilingArea
  //   - Move remaining tiles to center
  //   - Give player first player token if they take from center

  return (
    <>
      <div id='factories'>
        <Factory className='factory factory-center' contents={[0]} />
        <Factory className='factory factory1' contents={[1, 1, 1, 1]} />
        <Factory className='factory factory2' contents={[2, 2, 2, 2]} />
        <Factory className='factory factory3' contents={[3, 3, 3, 3]} />
        <Factory className='factory factory4' contents={[4, 4, 4, 4]} />
        <Factory className='factory factory5' contents={[5, 5, 5, 5]} />
      </div>
    </>
  );
};

export default Board;
