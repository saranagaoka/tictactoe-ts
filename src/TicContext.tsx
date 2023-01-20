import { createContext, Dispatch, SetStateAction } from "react";
import { useState } from "react";

export const TicContext = createContext<{
  gameArr: string[];
  setGameArr: Dispatch<SetStateAction<string[]>>;
  player: boolean;
  setPlayer: Dispatch<SetStateAction<boolean>>;
  winner: string;
  setWinner: Dispatch<SetStateAction<string>>;
  namePlayerO: string;
  setNamePlayerO: Dispatch<SetStateAction<string>>;
  namePlayerX: string;
  setNamePlayerX: Dispatch<SetStateAction<string>>;
}>({
  gameArr: [],
  setGameArr: () => {},
  player: true,
  setPlayer: () => [],
  winner: "",
  setWinner: () => [],
  namePlayerO: "",
  setNamePlayerO: () => [],
  namePlayerX: "",
  setNamePlayerX: () => [],
});

export const TicProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [gameArr, setGameArr] = useState<string[]>([...Array(9)]);
  const [player, setPlayer] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>("");
  const [namePlayerO, setNamePlayerO] = useState<string>("");
  const [namePlayerX, setNamePlayerX] = useState<string>("");

  return (
    <TicContext.Provider
      value={{
        gameArr: gameArr,
        setGameArr: setGameArr,
        player: player,
        setPlayer: setPlayer,
        winner: winner,
        setWinner: setWinner,
        namePlayerO: namePlayerO,
        setNamePlayerO: setNamePlayerO,
        namePlayerX: namePlayerX,
        setNamePlayerX: setNamePlayerX,
      }}
    >
      {children}
    </TicContext.Provider>
  );
};
