import Models from '../db/models'

const {
  User
} = Models;

export default class UserController {
  static signUp(req, res) {
    const {
      firstname,
      lastname,
      email,
      password
    } = req.body;
  }

  static login(req, res) {
    res.send('hello login');
  }
}