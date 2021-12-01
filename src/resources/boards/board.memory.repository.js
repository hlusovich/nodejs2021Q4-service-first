const Board = require('./board.model');

class BoardsController {
  constructor(boards = []) {
    this.boards = boards;
  }

  getAll() {
    return this.boards.map(item => item.toResponse());
  }

  getBoard(id) {
    return this.boards.find(item => item.id === id).toResponse();
  }

  createBoard(payload) {
    const board = new Board(payload);
    this.boards.push(board);
    return board.toResponse();
  }

  updateBoard(id, payload) {
    let board = null;
    this.boards = this.boards.map(item => {
      if (item.id === id) {
        board = new Board({ ...item, ...payload });
        return board;
      }
      return item;
    });
    return board ? board.toResponse() : board;
  }

  deleteBoard(id) {
    this.boards = this.boards.filter(item => item.id !== id);
    return `Bard with ${id} was successfully  deleted`;
  }
}

module.exports = new BoardsController();
