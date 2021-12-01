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
const moc = new Board(
  {
    title:"First",
    id:"42",
    columns:[
      {id:"1", title:"first", order:1, tasks:[
          {id:"22", name:"22"}

        ]},{
        id:"2", title:"second", order:2, tasks:[
          {id:"32", name:"32"}, {id:"42", name:"mikita"}

        ]
      }
    ]
  }
)
  module.exports = new BoardsController([moc]);
