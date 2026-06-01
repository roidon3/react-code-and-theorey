import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({onClick}) {
  console.log(onClick,"index")
  return (
    <div
      className="square"
      style={squareStyle}>
    </div>
  );
}

function Board() {
  const [state,setState]=useState("X")
  function changeValue(){
    return setState((prev)=>state==="X"?"O":"X")
  }
  function isWinner(){
  //Logic for winner
  const winnerList=[
    [0,1,2],[3,4,5],[6,7,8][0,5,8],[2,5,6],[0,3,6],[1,4,7],[2,5,8]
  ]
  const winningIndex=[]
  for(let i=0;i<winnerList.length;i++){
    if(winnerList===winnerList[i]){
      //disply which player has won
      //and also reset it
    }
  }

  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square index={0} onClick={()=>console.log("")}/>
          <Square index={1} />
          <Square  index={2}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square index={3}/>
          <Square index={4}/>
          <Square index={5}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square index={6}/>
          <Square index={7}/>
          <Square index={8}/>
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);