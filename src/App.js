import "./App.css";
import Board from "./Components/Board";
import Block from "./Components/Block";
import Row from "./Components/Row";
import FormStyle from "./Components/Form";
import ButtonStyled from "./Components/Button";
import { useState } from "react";

function App() {
    const [board, setBoard] = useState([
        ["p", ".", "."],
        ["X", ".", "."],
        [".", "X", "@"],
    ]);

    const colorMap = {
        p: "red",
        ".": "yellow",
        X: "black",
        "@": "green",
    };

    const move = {
        U: [-1, 0],
        R: [0, 1],
        D: [1, 0],
        L: [0, -1],
    };

    function handleMove(m) {
        const { currI, currJ } = findP(board);

        const i = currI + move[m][0];
        const j = currJ + move[m][1];
        const newBoard = Array.from(board);
        newBoard[currI][currJ] = ".";
        newBoard[i][j] = "p";
        setBoard(newBoard);
    }

    function findP(board) {
        let currI = 0,
            currJ = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length - 1; j++) {
                if (board[i][j] === "p") {
                    currI = i;
                    currJ = j;
                    return { currI, currJ };
                }
            }
        }
    }

    function takeInput(e) {
        console.log(e.target.value);
    }
    return (
        <div className="app">
            <Board className="board">
                {board.map((item) => (
                    <Row>
                        {item.map((ele, i) => (
                            <Block val={ele} key={i} color={colorMap[ele]} />
                        ))}
                    </Row>
                ))}
            </Board>
            <div className="app__buttons">
                <button onClick={() => handleMove("U")}>Up</button>
                <button onClick={() => handleMove("R")}>Right</button>
                <button onClick={() => handleMove("D")}>Down</button>
                <button onClick={() => handleMove("L")}>Left</button>
            </div>
            <FormStyle>
                <form>
                    <input
                        type="text"
                        placeholder="Enter the Moves"
                        onChange={takeInput}
                    />
                </form>
            </FormStyle>
            <ButtonStyled>Submit</ButtonStyled>
        </div>
    );
}

export default App;
