import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [isLoosed, setIsLoosed] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [playersChoise, setPlayersChoise] = useState([]);

  const [minesBoard, setMineBoard] = useState([
    { isMined: false, isOpen: false },
    { isMined: true, isOpen: false },
    { isMined: false, isOpen: false },
    { isMined: false, isOpen: false },
    { isMined: true, isOpen: false },
    { isMined: false, isOpen: false },
  ]);

  const checkForWin = () => {
    if (
      JSON.stringify(
        minesBoard
          .map(({ isMined }, idx) => !isMined && idx)
          .filter((el) => typeof el !== "boolean")
      ) === JSON.stringify(playersChoise.sort((a, b) => a - b))
    ) {
      setIsWin(true);
      setMineBoard(minesBoard.map((cell) => ({ ...cell, isOpen: true })));
      return;
    }
    return;
  };

  useEffect(() => {
    checkForWin();
  }, [playersChoise]);

  const showMine = (idx) => {
    setPlayersChoise([...playersChoise, idx]);
    const board = minesBoard.map((cell, index) => {
      if (index === idx) {
        return { ...cell, isOpen: true };
      }
      return cell;
    });
    setMineBoard(board);
  };

  const restartGame = () => {
    setIsWin(false);
    setIsLoosed(false);
    setPlayersChoise([]);
    setMineBoard([
      { isMined: false, isOpen: false },
      { isMined: true, isOpen: false },
      { isMined: false, isOpen: false },
      { isMined: false, isOpen: false },
      { isMined: true, isOpen: false },
      { isMined: false, isOpen: false },
    ]);
  };

  return (
    <div>
      <button onClick={() => setIsGameStarted(true)}>Start</button>
      {(isLoosed || isWin) && (
        <button onClick={() => restartGame()}>Restart</button>
      )}
      {isGameStarted && (
        <div className="wrapper">
          {minesBoard.map(({ isMined, isOpen }, idx) => (
            <Cell
              key={idx}
              id={idx}
              isLoosed={isLoosed}
              isMined={isMined}
              loose={setIsLoosed}
              isOpen={isOpen}
              showMine={showMine}
            />
          ))}
        </div>
      )}
      {isLoosed && <div>Opps, you loose</div>}
      {isWin && <div>You win!</div>}
    </div>
  );
};

export default App;
