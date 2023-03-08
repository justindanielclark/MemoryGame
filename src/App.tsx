import { useState } from "react";
import colors from "./consts/colors";
import Card from "./components/Card/Card";
import Scoreboard from "./components/Scoreboard/Scoreboard";

type GameObjType = {
  color: typeof colors[number];
  chosen: boolean;
};

function App() {
  const [state, setState] = useState({
    gameObjs: shuffle(createGameObjsState()),
    scoreBoard: createScoreState(),
  });

  return (
    <main className="App container mx-auto min-h-screen flex flex-col justify-start items-stretch">
      <Scoreboard
        best={state.scoreBoard.best}
        current={state.scoreBoard.current}
      />
      <div className="flex justify-center items-center flex-1 self-stretch">
        <div className="grid grid-cols-5 w-fit gap-4">
          {state.gameObjs.map((obj, idx) => {
            return (
              <Card
                color={obj.color}
                handleClick={() => {
                  if (obj.chosen) {
                    const { gameObjs, scoreBoard } = state;
                    const resetGameObjs = resetGameObjArray(gameObjs);
                    setState({
                      scoreBoard: {
                        best: scoreBoard.best,
                        current: 0,
                      },
                      gameObjs: shuffle(resetGameObjs),
                    });
                  } else {
                    const { gameObjs, scoreBoard } = state;
                    const updatedGameObjs = gameObjs.map<GameObjType>(
                      (obj, i) => {
                        if (i !== idx) {
                          return obj;
                        }
                        return {
                          chosen: true,
                          color: obj.color,
                        };
                      }
                    );
                    const shuffledGameObjs = shuffle(updatedGameObjs);
                    setState({
                      scoreBoard: {
                        best:
                          scoreBoard.best > scoreBoard.current + 1
                            ? scoreBoard.best
                            : scoreBoard.current + 1,
                        current: scoreBoard.current + 1,
                      },
                      gameObjs: shuffledGameObjs,
                    });
                  }
                }}
                key={obj.color}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
function createScoreState() {
  return {
    current: 0,
    best: 0,
  };
}
function createGameObjsState(): Array<GameObjType> {
  return colors.map((color) => {
    return {
      color,
      chosen: false,
    };
  });
}

function resetGameObjArray(arr: Array<GameObjType>): Array<GameObjType> {
  return arr.map((gameObj) => {
    return {
      color: gameObj.color,
      chosen: false,
    };
  });
}

function shuffle<T>(arr: Array<T>): Array<T> {
  const copiedArray = [...arr];
  let randomIndex;
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [copiedArray[currentIndex], copiedArray[randomIndex]] = [
      copiedArray[randomIndex],
      copiedArray[currentIndex],
    ];
  }
  return copiedArray;
}

export default App;
