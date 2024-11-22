import "./styles.scss";
import IFooterProps from "./interfaces";

function Footer({ winner, resetGame }: IFooterProps) {
  const renderWinnerDesc = () => {
    if (winner === "E") {
      return <h1 className={`Result ${winner}`}>Empate!!</h1>;
    }

    return <h1 className={`Result ${winner}`}> O ganhador foi: {winner}</h1>;
  };

  return (
    <footer className="Footer">
      {renderWinnerDesc()}
      <button onClick={resetGame}>Recomeçar!</button>
    </footer>
  );
}

export default Footer;
