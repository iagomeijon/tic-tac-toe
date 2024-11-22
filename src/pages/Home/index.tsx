//MARK: HOOKS
import useGame from "../../hooks/useGame";

//MARK: COMPONENTS
import Header from "../../components/Header";
import Board from "../../components/Board";
import Footer from "../../components/Footer";

//MARK: STYLES
import "./styles.scss";

function Home() {
  const { states, actions } = useGame();
  const { board, winner } = states;
  const { handleCellClick, resetGame } = actions;

  return (
    <div className="Home">
      <Header title="Jogo da Velha" />
      <Board board={board} handleCellClick={handleCellClick} />
      {winner !== "" && <Footer resetGame={resetGame} winner={winner} />}
    </div>
  );
}

export default Home;
