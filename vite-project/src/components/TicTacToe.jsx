import React, { useState } from 'react';

export default function TicTacToe(props) {
  console.log("Rendering Board..");
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) {//edge case if any thing is marked to square the  do nothing || any winner is there do nothig
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
      setXIsNext(false);
    } else {
      nextSquare[i] = "O";
      setXIsNext(true);
    }
    setSquare(nextSquare);
    // or one live just swap setXIsNext(!xIsNext)
  }


  const winner = (!square.includes(null)) ? "Match has been ended , Result - Draw" : 'Winner: ' + calculateWinner(square);
  let status;
  if (winner) {
    status = winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className='flex'>
        <Square onSquareUserClick={() => handleClick(0)} inputDefaultValue={square[0]} />
        <Square onSquareUserClick={() => handleClick(1)} inputDefaultValue={square[1]} />
        <Square onSquareUserClick={() => handleClick(2)} inputDefaultValue={square[2]} />
      </div>
      <div className='flex'>
        <Square onSquareUserClick={() => handleClick(3)} inputDefaultValue={square[3]} />
        <Square onSquareUserClick={() => handleClick(4)} inputDefaultValue={square[4]} />
        <Square onSquareUserClick={() => handleClick(5)} inputDefaultValue={square[5]} />
      </div>
      <div className='flex'>
        <Square onSquareUserClick={() => handleClick(6)} inputDefaultValue={square[6]} />
        <Square onSquareUserClick={() => handleClick(7)} inputDefaultValue={square[7]} />
        <Square onSquareUserClick={() => handleClick(8)} inputDefaultValue={square[8]} />
      </div>
    </>
  );
}

export function Square({ inputDefaultValue, onSquareUserClick }) {
  const [userInput, setVlaue] = useState(null);
  const handleClick = () => {
    setVlaue("X");
  }
  let userInputBoolean = userInput != null;
  return (
    <>
      <button onClick={onSquareUserClick} className='border-gray-200  hover:border-gray-900 bg-cyan-100 '>
        {
          userInputBoolean ? userInput : inputDefaultValue
        }
      </button>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],  // Top row
    [3, 4, 5],  // Middle row
    [6, 7, 8],  // Bottom row
    [0, 3, 6],  // Left column
    [1, 4, 7],  // Middle column
    [2, 5, 8],  // Right column
    [0, 4, 8],  // Diagonal (top-left to bottom-right)
    [2, 4, 6],  // Diagonal (top-right to bottom-left)
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  //   It checks if:
  //     squares[a] is not null(meaning there is a player symbol in that square).
  //       squares[a] is equal to squares[b] and squares[c](indicating that the same player has occupied all three squares in the line).
  // If all conditions are met, it returns the player symbol("X" or "O") that has won
  return null;
}


// Stop rendering is column value is set
// if (squares[i]) {
//   return;
// }
