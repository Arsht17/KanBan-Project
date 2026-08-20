import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { boardsSlice } from "../store";
import { Api } from "../api";

export const AppContext = createContext(null);

//everyone can get context
export function AppContextProvider({ children }) {
  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState("");
  const dispatch = useDispatch();

  async function createBoard(form) {
    const newBoard = await Api.createBoard({ name: form.name });
    //update state (ui)
    //setBoards([...boards, newBoard])
    setBoards((prevBoards) => [...prevBoards, newBoard]);
    dispatch(boardsSlice.actions.addBoard(newBoard));
  }

  async function createColumn(boardId, column) {
    const newColumn = await Api.createColumn(boardId, column);

    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === boardId
          ? { ...board, columns: [...board.columns, newColumn] }
          : board
      )
    );
    if (selectedBoard) {
      dispatch(
        boardsSlice.actions.editBoard({
          ...selectedBoard,
          columns: [...selectedBoard.columns, newColumn],
        })
      );
    }
  }

  const selectedBoard = boards.find((board) => board.id === selectedBoardId);
  const data = {
    boards,
    selectedBoard,
    selectedBoardId,
    setBoards,
    setSelectedBoardId,
    createBoard,
    createColumn,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
