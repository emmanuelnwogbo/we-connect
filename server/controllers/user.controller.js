import Utilities from '../utilities';

const { inputChecker } = Utilities;

export default class UserController {
  static signUp(req, res) {
    inputChecker(req.body);
  }

  static login(req, res) {
    inputChecker(req.body);
  }
}
