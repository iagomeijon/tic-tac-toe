//MARK: HOOKS
import { useState, useEffect, useCallback } from "react";
//MARK: INTERFACES
import IUseGamePorps from "./interfaces";

function useGame(): IUseGamePorps {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [currentTurn, setCurrentTurn] = useState<string>("X");
  const [winner, setWinner] = useState<"" | "E" | "X" | "O">("");

  const handleCellClick = (cellClickedIndex: number) => {
    if (board[cellClickedIndex] !== "") return;

    setBoard(
      board.map((_cell, index) =>
        index === cellClickedIndex ? currentTurn : _cell
      )
    );
    setCurrentTurn((_prev) => (_prev === "X" ? "O" : "X"));
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentTurn("X");
    setWinner("");
  };

  const checkGameFinish = useCallback(() => {
    const boardCheckPositions = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[6], board[4], board[2]],
    ];

    boardCheckPositions.forEach((_boardCheckPositionComb) => {
      if (_boardCheckPositionComb.every((_cell) => _cell === "X")) {
        setWinner("X");
        return;
      }

      if (_boardCheckPositionComb.every((_cell) => _cell === "O")) {
        setWinner("O");
        return;
      }
    });

    if (board.every((_cell) => _cell !== "") && winner === "") {
      setWinner("E");
      return;
    }
  }, [board, winner]);

  useEffect(() => {
    checkGameFinish();
  }, [checkGameFinish, currentTurn]);

  return {
    states: {
      board,
      winner,
    },
    actions: {
      handleCellClick,
      resetGame,
    },
  };
}

export default useGame;
