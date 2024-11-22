export default interface IBoardProps {
  board: string[];
  handleCellClick: (index: number) => void;
}
