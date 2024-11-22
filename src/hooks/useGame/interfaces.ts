export default interface IUseGamePorps {
    states: {
        board: string[],
        winner: '' | 'X' | 'E' | 'O',
    },  
    actions: {
        handleCellClick: (index: number) => void,
        resetGame: () => void;
    }
}