import { createContext, Dispatch, SetStateAction } from "react";
import { useState } from "react";

export const TicContext = createContext<{
  gameArr: string[];
  setGameArr: Dispatch<SetStateAction<string[]>>;
  player: boolean;
  setPlayer: Dispatch<SetStateAction<boolean>>;
  wasClicked: boolean;
  setWasClicked: Dispatch<SetStateAction<boolean>>;
  winner: string;
  setWinner: Dispatch<SetStateAction<string>>;
}>({
  gameArr: [],
  setGameArr: () => {},
  player: true,
  setPlayer: () => [],
  wasClicked: false,
  setWasClicked: () => [],
  winner: "",
  setWinner: () => [],
});

export const TicProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [gameArr, setGameArr] = useState<string[]>([...Array(9)]);
  const [player, setPlayer] = useState<boolean>(true);
  const [wasClicked, setWasClicked] = useState<boolean>(false);
  const [winner, setWinner] = useState("");
  return (
    <TicContext.Provider
      value={{
        gameArr: gameArr,
        setGameArr: setGameArr,
        player: player,
        setPlayer: setPlayer,
        wasClicked: wasClicked,
        setWasClicked: setWasClicked,
        winner: winner,
        setWinner: setWinner,
      }}
    >
      {children}
    </TicContext.Provider>
  );
};
