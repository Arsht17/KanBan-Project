import seed from "./seed.js";

const clone = (value) => structuredClone(value);

const state = clone(seed);

function normalizeColumns(columns = []) {
  return columns.map((column) => ({
    ...clone(column),
    id: column.id || crypto.randomUUID(),
    tasks: clone(column.tasks || []),
  }));
}

function findBoard(boardId) {
  const board = state.boards.find((item) => item.id === boardId);
  if (!board) throw new Error("Board not found");
  return board;
}

function findColumn(boardId, columnId) {
  const column = findBoard(boardId).columns.find(
    (item) => item.id === columnId
  );
  if (!column) throw new Error("Column not found");
  return column;
}

export const Api = {
  async getBoards() {
    return clone(state.boards);
  },

  async createBoard(board) {
    const newBoard = {
      ...clone(board),
      id: crypto.randomUUID(),
      columns: normalizeColumns(board.columns),
    };
    state.boards.push(newBoard);
    return clone(newBoard);
  },

  async deleteBoard(id) {
    const index = state.boards.findIndex((board) => board.id === id);
    if (index === -1) throw new Error("Board not found");
    const [deletedBoard] = state.boards.splice(index, 1);
    return clone(deletedBoard);
  },

  async editBoard(board) {
    const index = state.boards.findIndex((item) => item.id === board.id);
    if (index === -1) throw new Error("Board not found");
    const existingBoard = state.boards[index];
    const columns = (board.columns || []).map((column) => {
      const existingColumn = existingBoard.columns.find(
        (item) => item.id === column.id
      );
      return {
        ...clone(column),
        tasks: clone(existingColumn?.tasks || column.tasks || []),
      };
    });
    state.boards[index] = { ...clone(board), columns };
    return clone(state.boards[index]);
  },

  async getColumns(boardId) {
    return clone(findBoard(boardId).columns);
  },

  async createColumn(boardId, column) {
    const newColumn = {
      ...clone(column),
      id: crypto.randomUUID(),
      tasks: [],
    };
    findBoard(boardId).columns.push(newColumn);
    return clone(newColumn);
  },

  async deleteColumn(boardId, columnId) {
    const board = findBoard(boardId);
    const index = board.columns.findIndex((column) => column.id === columnId);
    if (index === -1) throw new Error("Column not found");
    const [deletedColumn] = board.columns.splice(index, 1);
    return clone(deletedColumn);
  },

  async editColumn(boardId, column) {
    const board = findBoard(boardId);
    const index = board.columns.findIndex((item) => item.id === column.id);
    if (index === -1) throw new Error("Column not found");
    board.columns[index] = { ...board.columns[index], ...clone(column) };
    return clone(board.columns[index]);
  },

  async getTasks(boardId, columnId) {
    return clone(findColumn(boardId, columnId).tasks || []);
  },

  async createTask(boardId, columnId, task) {
    const column = findColumn(boardId, columnId);
    column.tasks ||= [];
    const newTask = {
      ...clone(task),
      id: task.id || crypto.randomUUID(),
      subtasks: clone(task.subtasks || []),
    };
    column.tasks.push(newTask);
    return clone(newTask);
  },

  async deleteTask(boardId, columnId, taskId) {
    const column = findColumn(boardId, columnId);
    column.tasks ||= [];
    const index = column.tasks.findIndex((task) => task.id === taskId);
    if (index === -1) throw new Error("Task not found");
    column.tasks.splice(index, 1);
    return { message: "Task deleted" };
  },

  async editTask(boardId, columnId, task) {
    const column = findColumn(boardId, columnId);
    column.tasks ||= [];
    const index = column.tasks.findIndex((item) => item.id === task.id);
    if (index === -1) throw new Error("Task not found");
    column.tasks[index] = { ...column.tasks[index], ...clone(task) };
    return clone(column.tasks[index]);
  },
};
