const User = require('./user.model');

class UserController {
  constructor(users = [{ id: '2', name: 'mikita', login: 228, password: 229 }]) {
    this.users = users;
  }

  getAll() {
    return this.users.map(item => User.toResponse(item));
  }

  getUser(id) {
    return User.toResponse(this.users.find(item => item.id === id));
  }

  createUser(payload) {
    const user = new User(payload);
    this.users.push(user);
    return user;
  }

  updateUser(id, payload) {
    let  user = null;
    this.users = this.users.map(item => {
      if (item.id === id) {
        user = { ...item, ...payload };
        return user;
      }
      return item;
    });
    console.log(this.users)
    return User.toResponse(user);
  }

  deleteUser(id) {
    this.users = this.users.filter(item => item.id !== id);
    return `User with ${id} was successfully  deleted`;
  }
}

module.exports = new UserController();
