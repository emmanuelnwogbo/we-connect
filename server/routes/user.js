import express from 'express';

import Controllers from '../controllers';

const router = express.Router();
const { UserController } = Controllers;
const { signUp, login } = UserController;

router.post('/signup', signUp);
router.post('/login', login);

export default router;
