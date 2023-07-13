import { useState, useEffect } from "react";
import { Cell } from "./Cell";

export const Board = () => {
  const [letras, setLetras] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  const [winner, setWinner] = useState(null);
  const [winningMessage, setWinningMessage] = useState(null);

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //columns
    [0, 4, 8],
    [2, 4, 6], //diagonals
  ];

  const checkWinner = () => {
    winningCombos.forEach((combo) => {
      let circleWins = combo.every((cell) => letras[cell] === "O");
      if (circleWins) {
        setWinningMessage("Circle Wins");
        setWinner("O");
        return;
      }

      let crossWins = combo.every((cell) => letras[cell] === "X");
      if (crossWins) {
        setWinningMessage("Cross Wins");
        setWinner("X");
        return;
      }
    });
  };

  useEffect(() => {
    checkWinner();
  }, [letras]);

  const [turn, setTurn] = useState("X");

  const resetear = () => {
    setWinningMessage(null);
    setLetras([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
  };

  return !winningMessage ? (
    <div className="tablero">
      <h1 className="titulo"> {"DIEGO'S TIC-TAC-TOE"}</h1>
      <div className="board">
        {letras.map((letra, index) => (
          <Cell
            key={index}
            letra={letra}
            letras={letras}
            id={index}
            setLetras={setLetras}
            turn={turn}
            setTurn={setTurn}
            winningMessage={winningMessage}
          />
        ))}
      </div>

      <div className="turno">Turn for: {turn}</div>
      <div className="mensaje">{winningMessage}</div>
    </div>
  ) : (
    <div className="ganador">
      <p className="letra">{winner}</p>
      <p>has won!!! </p>
      <button onClick={resetear} className="button">
        Reset
      </button>
    </div>
  );
};
