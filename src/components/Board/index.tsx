//MARK: INTERFACES
import IBoardProps from "./interfaces";
//MARK: STYLES
import "./styles.scss";

function Board({ board, handleCellClick }: IBoardProps) {
  return (
    <div className="Board">
      {board.map((_cell, index) => (
        <div
          className={`Cell ${_cell}`}
          key={index}
          onClick={() => handleCellClick(index)}
        >
          <h1>{_cell}</h1>
        </div>
      ))}
    </div>
  );
}

export default Board;
