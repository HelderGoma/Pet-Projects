import "./TicTacToe.css"
import { useState } from "react";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]           
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; 
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <div className="board">
        {board.map((cell, i) => (
          <button
            className="square"
            key={i}
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next player: {xIsNext ? "X" : "O"}</h2>}
      <button className="button-reset" onClick={resetGame} >Reset</button>
    </div>
  );
}
export default TicTacToe