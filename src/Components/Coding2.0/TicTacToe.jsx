import React, { useState } from "react";
import "./index.css";
const Square = ({value,onClick}) => {
  return <button onClick={onClick} className="square">{value}</button>
};

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  function reset(){
    setBoard(Array(9).fill(null))
    setTurn("x")
    setWinner(null)
  }

  function handleClick(index){
    if(board[index] || winner){
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    checkWinner(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  }
   function checkWinner(board){
    const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],

      [0,3,6],
      [1,4,7],
      [2,5,8],

      [0,4,8],
      [2,4,6]

    ];
    for(let pattern of winningPatterns){
      console.log(pattern,"pattern");
      const [a,b,c] = pattern;
         console.log(a,"pattern aaa");
      if(
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ){
        setWinner(board[a]);
      }
    }
  }
  return (
    <div>
      <div>TicTacToe game</div>
      <h2>{winner ? `winner is ${winner}` : `${turn} Turn`}</h2>
      <h2>{!board?.includes(null) && "I'ts a draw"}</h2>
      <div className="board">
        {board?.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="reset">
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
