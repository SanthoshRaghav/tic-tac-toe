import { useState } from 'react';
import './GameBoard.css';
import { findWinner } from '../utils';

const GameBoard = ({ cellCount, players }) => {
  // state
  const [gameData, setGameData] = useState(Array(cellCount).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);

  // data
  const { maleId, femaleId } = players;

  const updateGameData = (index) =>
    setGameData((prevGameData) => {
      const data = [...prevGameData];
      data[index] = playerTurn ? maleId : femaleId;
      findWinner(playerTurn ? maleId : femaleId, data);
      setPlayerTurn(!playerTurn);
      return data;
    });

  return (
    <div className='gameboard'>
      {gameData.map((_, index) => (
        <div
          className={gameData[index] ? `cell ${gameData[index]}` : `cell`}
          data-player={playerTurn ? maleId : femaleId}
          key={index}
          onClick={() => updateGameData(index)}
        ></div>
      ))}
    </div>
  );
};

export default GameBoard;
